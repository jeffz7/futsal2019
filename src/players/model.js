const Model = require('../../common/model')

class PlayerModel extends Model {
    constructor() {
        super()
    }

    async getAllPlayers () {
        let query = `MATCH (p:Player)
        OPTIONAL MATCH (p)-[:SCORED]-> (gs:Goal)
        WITH COUNT(gs) AS scored, p
        OPTIONAL MATCH (p)-[:ASSISTED]-> (ga:Goal)
        WITH COUNT(ga) AS assisted, scored, p
        RETURN p ,scored, assisted order by scored desc, assisted desc, p.name`
        const success = await this.execute(query)
        let result = success.records.map(record => {
            let player = record.get(0).properties
            player.goal_scored = Number(record.get('scored'))
            player.goal_assisted = Number(record.get('assisted'))
            return player
        })
        return result
    }

    async getPlayerDetails (id) {
        let query = `MATCH (p:Player{id:$id}) 
        OPTIONAL MATCH (p)-[:SCORED]-> (gs:Goal)
        WITH COUNT(gs) AS scored, p
        OPTIONAL MATCH (p)-[:ASSISTED]-> (ga:Goal)
        WITH COUNT(ga) AS assisted, scored, p
        RETURN p ,scored, assisted`
        const success = await this.execute(query, { id })
        let player = {}
        if (success.records[0]) {
            player = success.records[0].get(0).properties
            player.goal_scored = Number(success.records[0].get('scored'))
            player.goal_assisted = Number(success.records[0].get('assisted'))
        }
        return player
    }

    async getTopPlayers(){
        let query = `MATCH (n:Player)--(:Goal) 
        RETURN DISTINCT n AS player, size((n)-[:SCORED]->(:Goal)) AS goals, 
        size((n)-[:ASSISTED]->(:Goal)) AS assists 
        ORDER BY goals DESC, assists DESC, n.name ASC
        LIMIT 10`
        const success = await this.execute(query)
        let result = success.records.map(record => {
            let player = record.get('player').properties
            player.goal_scored = Number(record.get('goals'))
            player.goal_assisted = Number(record.get('assists'))
            return player
        })
        return result
    }

    async createPlayers (players) {

        let playersInDB = await this.getAllPlayers()
        if (playersInDB && playersInDB.length > 0) {
            throw 'Players already exists in DB'
        }

        let createQuery = [], returnQuery = [], param = {}
        players.map((player, i) => {
            createQuery.push(` CREATE (p${i}:Player) SET p${i} = $player${i}, p${i}.id = randomUUID() `)
            returnQuery.push(` p${i} `)
            param['player' + i] = player
        })

        let query = createQuery.join('') + ' RETURN ' + returnQuery.join(',')
        const success = await this.execute(query, param)

        let result = []
        if (success.records[0]) {
            for (let i = 0; i < players.length; i++) {
                result.push(success.records[0].get(i).properties)
            }
        }
        return result

    }

}

module.exports = PlayerModel