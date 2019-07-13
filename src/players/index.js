const PlayerModel = require('./model')
const { withTryCatch } = require('../../utils/tryCatch')

module.exports.getAllPlayers = async (req, res) => {
    withTryCatch(async () => {
        let players = new PlayerModel()
        return await players.getAllPlayers()
    }, res)
}

module.exports.getPlayersByTeam = async (req, res) => {

}

module.exports.getPlayerDetails = async (req, res) => {
    withTryCatch(async () => {
        let players = new PlayerModel()
        return await players.getPlayerDetails(req.params.id)
    }, res)
}

module.exports.createPlayers = async (req, res) => {
    withTryCatch(async () => {
        let players = new PlayerModel()
        return await players.createPlayers(req.body.players)
    }, res)
}