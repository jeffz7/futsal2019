const GameModel = require('./model')
const { withTryCatch } = require('../../utils/tryCatch')

module.exports.getAllGames = async (req, res) => {
    withTryCatch(async () => {
        let games = new GameModel()
        return await games.getAllGames()
    }, res)
}


module.exports.getGameDetails = async (req, res) => {
    withTryCatch(async () => {
        return []
    }, res)

}

module.exports.createGames = async (req, res) => {
    withTryCatch(async () => {
        let games = new GameModel()
        return await games.createGames(req.body.games)
    }, res)
}

