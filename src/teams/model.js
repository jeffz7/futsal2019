const Model = require('../../common/model')

class TeamModel extends Model {
    constructor() {
        super()
    }

    async getAllTeams () {
        let query = `MATCH (n:Team) return n ORDER BY n.name`
        const success = await this.execute(query)
        let result = success.records.map(record => record.get(0).properties)
        return result
    }

    async getTeamDetails (id) {
        let query = `MATCH (n:Team{id:$id}) return n`
        const success = await this.execute(query, { id })
        let result = success.records[0] ? success.records[0].get(0).properties : null
        return result
    }



    async createTeams (teams) {

        let teamsInDB = await this.getAllTeams()
        if (teamsInDB && teamsInDB.length > 0) {
            throw 'Teams already exists in DB'
        }

        let createQuery = [], returnQuery = [], param = {}
        teams.map((team, i) => {
            createQuery.push(` CREATE (n${i}:Team) SET n${i} = $team${i} `)
            returnQuery.push(` n${i} `)
            param['team' + i] = team
        })

        let query = createQuery.join('') + ' RETURN ' + returnQuery.join(',')
        const success = await this.execute(query, param)

        let result = []
        if (success.records[0]) {
            for (let i = 0; i < teams.length; i++) {
                result.push(success.records[0].get(i).properties)
            }
        }
        return result

    }

    async addPlayersIntoTeam (id, players) {
        let query = ` MATCH (t:Team{id: $id}), (p:Player) WHERE p.name in $players` +
            ` MERGE (p)-[:IN]->(t)` +
            ` RETURN t, COLLECT(p)`
        const success = await this.execute(query, { id, players })
        let result = {}
        if (success.records[0]) {
            result.team = success.records[0].get(0).properties
            result.team.players = success.records[0].get(1) ? success.records[0].get(1).map(r => r.properties) : []
        }
        return result
    }

    async getTopTeams () {
        let query = `MATCH (n:Team)
        WITH 
        n AS team, size((n)-[:IN]->(:Game:Played)) AS played,
        size((n)-[:IN]->(:Game:Played{winner:n.id})) AS win,
        size((n)-[:IN]->(:Game:Played{winner: "tie"})) AS tie,
        size((n)<-[:FOR]-(:Goal)) AS goal_scored
        OPTIONAL MATCH (m:Game)--(g:Goal)-[:FOR]->(t:Team) 
        where team.id in m.teams and t.id <> team.id
        RETURN count(g) as goal_conceded, team, played, win, tie,
        (played-win-tie) AS loss, (win*3 + tie) AS pts,
        goal_scored,( goal_scored-count(g)) as gd
        ORDER BY pts DESC, gd DESC, goal_scored DESC, played DESC`
        const success = await this.execute(query)
        let result = success.records.map(record => {
            let team = record.get('team').properties
            team.played = Number(record.get('played'))
            team.win = Number(record.get('win'))
            team.tie = Number(record.get('tie'))
            team.loss = Number(record.get('loss'))
            team.points = Number(record.get('pts'))
            team.goal_scored = Number(record.get('goal_scored'))
            team.goal_conceded = Number(record.get('goal_conceded'))
            team.gd = Number(record.get('gd'))
            return team
        })
        return result
    }

}

module.exports = TeamModel