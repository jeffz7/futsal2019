const Model = require('../../common/model')

class GameModel extends Model {
    constructor() {
        super()
    }

    async getGameDetails (id) {
        let query = `MATCH (g:Game{id:$id}) RETURN g`
        const success = await this.execute(query, { id })
        let result = success.records[0]? success.records[0].get(0).properties : null
        if(result && result.stats){
            result.stats = JSON.parse(result.stats)
        }
        return result
    }

    async getAllGames () {
        let query = `MATCH (g:Game) RETURN g ORDER BY g.name`
        const success = await this.execute(query)
        let result = success.records.map(record => {
            let result = record.get(0).properties
            if(result && result.stats){
                result.stats = JSON.parse(result.stats)
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
            let q = ` MATCH (t1${i}:Team{id:$game${i}.teams[0]}), (t2${i}:Team{id:$game${i}.teams[1]})` +
                ` CREATE (n${i}:Game:Scheduled) SET n${i} = $game${i} ` +
                ` CREATE (t1${i})-[:IN]->(n${i})<-[:IN]-(t2${i}) `
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
        patch = JSON.stringify(patch)
        let query = `MATCH (g:Game{id: $id}) ` +
            `SET g.stats = $patch ` +
            `RETURN g `
        const success = await this.execute(query, { id, patch })
        let result = success.records[0] ? success.records[0].get(0).properties : null
        return result
    }

}

module.exports = GameModel