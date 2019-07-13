const PlayerModel = require('./model')
const { withTryCatch } = require('../../utils/tryCatch')

module.exports.getAllPlayers = async (req, res) => {
    withTryCatch(async () => {
        let players = new PlayerModel()
        let result = await players.getAllPlayers()
        return res.status(200).send({ success: true, code: 200, data: result, error: null })
    }, res)
}

module.exports.getPlayersByTeam = async (req, res) => {

}

module.exports.getPlayerDetails = async (req, res) => {

}

module.exports.createPlayers = async (req, res) => {
    withTryCatch(async () => {
        let players = new PlayerModel()
        let result = await players.createPlayers(req.body.players)
        return res.status(200).send({ success: true, code: 200, data: result, error: null })
    }, res)
}