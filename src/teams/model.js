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
        const success = await this.execute(query, {id})
        let result = success.records[0].get(0).properties
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

}

module.exports = TeamModel