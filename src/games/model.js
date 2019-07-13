const Model = require('../../common/model')

class GameModel extends Model {
    constructor(){
        super()
    }

    async getAllGames() {
        let query = `MATCH (g:Game) return g ORDER BY g.name`
        const success = await this.execute(query)
        return success.records
    }

}

module.exports = GameModel