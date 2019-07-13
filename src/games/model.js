const Model = require('../../common/model')

class GameModel extends Model {
    constructor() {
        super()
    }

    async getAllGames () {
        let query = `MATCH (g:Game) return g ORDER BY g.name`
        const success = await this.execute(query)
        let result = success.records.map(record => record.get(0).properties)
        return result
    }

    async createGames (games) {
        
        let gamesInDB = await this.getAllGames()
        if (gamesInDB && gamesInDB.length > 0) {
            throw 'Games already exists in DB'
        }

        let createQuery = [], returnQuery = [], param = {}
        games.map((game, i) => {
            createQuery.push(` CREATE (n${i}:Game) SET n${i} = $game${i} `)
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

}

module.exports = GameModel