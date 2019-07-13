const GameModel = require('./model')
const { withTryCatch } = require('../../utils/tryCatch')

module.exports.getAllGames = async (req, res) => {
    withTryCatch(async () => {
        let games = new GameModel()
        let result = await games.getAllGames()
        return res.status(200).send({ success: true, code: 200, data: result, error: null })
    }, res)
}


module.exports.getGameDetails = async (req, res) => {
    withTryCatch(async () => {
        return res.status(200).send({ success: true, code: 200, data: [], error: null })
    }, res)

}

