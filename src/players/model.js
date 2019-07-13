const Model = require('../../common/model')

class PlayerModel extends Model {
    constructor() {
        super()
    }

    async getAllPlayers () {
        let query = `MATCH (p:Player) return p ORDER BY p.name`
        const success = await this.execute(query)
        let result = success.records.map(record => record.get(0).properties)
        return result
    }

    async getPlayerDetails (id) {
        let query = `MATCH (p:Player{id:$id}) return p`
        const success = await this.execute(query, {id})
        let result = success.records[0] ? success.records[0].get(0).properties : null
        return result
    }

    async createPlayers (players) {
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