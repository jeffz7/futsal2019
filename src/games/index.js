const GameModel = require('./model')
const { withTryCatch, withTryCatchValidation } = require('../../utils/tryCatch')

module.exports.getAllGames = async (req, res) => {
    withTryCatch(async () => {
        let games = new GameModel()
        return await games.getAllGames()
    }, res)
}


module.exports.getGameDetails = async (req, res) => {
    withTryCatch(async () => {
        let games = new GameModel()
        return await games.getGameDetails(req.params.id)
    }, res)

}

module.exports.createGames = async (req, res) => {
    withTryCatch(async () => {
        let games = new GameModel()
        return await games.createGames(req.body.games)
    }, res)
}

module.exports.updateGame = async (req, res) => {
    withTryCatchValidation(req, res, async () => {
        let games = new GameModel()
        return await games.updateGame(req.params.id, req.body)
    })
}

