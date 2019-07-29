const Model = require('../../common/model')

class GameModel extends Model {
    constructor() {
        super()
    }

    async getGameDetails (id) {
        let query = `MATCH (g:Game{id:$id})
        OPTIONAL MATCH (goal:Goal)-[:IN]->(g)
        RETURN 
        DISTINCT g, collect({
        id: goal.id, time: goal.time,
        scored_by:HEAD([(goal)<-[:SCORED]-(p:Player)|{id: p.id, name: p.name, image: p.image}]),
        assisted_by:HEAD([(goal)<-[:ASSISTED]-(p:Player)|{id: p.id, name: p.name, image: p.image}]),
        for_team:HEAD([(goal)-[:FOR]->(t:Team)| t.id])}) AS goalDetails`
        const success = await this.execute(query, { id })
        let result = success.records[0] ? success.records[0].get(0).properties : null
        if (result && result.stats) {
            result.stats = JSON.parse(result.stats)
            result.stats.goals = success.records[0].get(1)
        }
        return result
    }

    async getAllGames () {
        let query = `MATCH (g:Game)
        OPTIONAL MATCH (goal:Goal)-[:IN]->(g)
        RETURN 
        DISTINCT g, collect({
        id: goal.id, time: goal.time,
        scored_by:HEAD([(goal)<-[:SCORED]-(p:Player)|{id: p.id, name: p.name, image: p.image}]),
        assisted_by:HEAD([(goal)<-[:ASSISTED]-(p:Player)|{id: p.id, name: p.name, image: p.image}]),
        for_team:HEAD([(goal)-[:FOR]->(t:Team)| t.id])}) AS goalDetails ORDER BY g.game_number asc`
        const success = await this.execute(query)
        let result = success.records.map(record => {
            let result = record.get(0).properties
            if (result && result.stats) {
                result.stats = JSON.parse(result.stats)
                result.stats.goals = record.get(1)
            }
            return result

        })
        return result
    }

    async createGames (games) {

        let gamesInDB = await this.getAllGames()
        if (gamesInDB && gamesInDB.length > 0) {
            throw 'Games already exists in DB'
        }

        let createQuery = [], returnQuery = [], param = {}
        games.map((game, i) => {
            let q = ` CREATE (n${i}:Game:Scheduled) SET n${i} = $game${i} `
            if (game.type === "Group Stage") {
                q = ` MATCH (t1${i}:Team{id:$game${i}.teams[0]}), (t2${i}:Team{id:$game${i}.teams[1]})` +
                    ` CREATE (n${i}:Game:Scheduled) SET n${i} = $game${i} ` +
                    ` CREATE (t1${i})-[:IN]->(n${i})<-[:IN]-(t2${i}) `
            }

            let t = []
            for (let j = 0; j <= i; j++) {
                t.push(`n${j}`)
            }
            createQuery.push(q + ' WITH ' + (t.join(',')))
            returnQuery.push(` n${i} `)
            param['game' + i] = game
        })

        let query = createQuery.join('') + ' RETURN ' + returnQuery.join(',')
        const success = await this.execute(query, param)

        let result = []
        if (success.records[0]) {
            for (let i = 0; i < games.length; i++) {
                result.push(success.records[0].get(i).properties)
            }
        }
        return result
    }

    async updateGame (id, patch) {
        let goals = patch.goals
        let winner = patch.winner || "tie"
        let goalsQueryArray = await this.creatGoalQuery(goals)
        patch = JSON.stringify(patch)
        let query = `MATCH(g: Game{ id: $id }) ` +
            ` SET g.stats = $patch, g.winner = $winner, g.status="played", g:Played ` +
            ` REMOVE g:Scheduled ` +
            ` ${goalsQueryArray.join('')} ` +
            ` RETURN g`
        const success = await this.execute(query, { id, patch, goals, winner })
        let result = success.records[0] ? success.records[0].get(0).properties : null
        return result
        // return query
    }

    // Internal function
    async creatGoalQuery (goals = []) {
        return goals.map((goal, i) => {
            let findAssistedPlayer = ''
            let createAssistEdge = ''
            if (goal.assisted_player) {
                findAssistedPlayer = ` MATCH (gap${i}:Player{id: $goals[${i}].assisted_player}) `
                createAssistEdge = ` MERGE (gap${i})-[:ASSISTED]->(goal${i}) `
            }
            let goalQuery = ` WITH g` +
                ` MATCH(gsp${i}: Player{ id: $goals[${i}].player }) ` +
                findAssistedPlayer +
                ` MATCH (gst${i}: Team{ id: $goals[${i}].team }) ` +
                ` CREATE(goal${i}: Goal{ id: randomUUID() }) ` +
                ` MERGE(gsp${i}) - [: SCORED] -> (goal${i}) ` +
                ` MERGE(gst${i}) < -[: FOR] - (goal${i}) ` +
                ` MERGE(g) < -[: IN] - (goal${i}) ` +
                createAssistEdge +
                ` SET goal${i} += $goals[${i}] `

            return goalQuery
        })
    }

}

module.exports = GameModel