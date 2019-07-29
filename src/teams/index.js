const TeamModel = require('./model')
const { withTryCatch, withTryCatchValidation } = require('../../utils/tryCatch')

module.exports.getAllTeams = async (req, res) => {
    withTryCatch(async () => {
        let teams = new TeamModel()
        return await teams.getAllTeams()
    }, res)
}


module.exports.getTeamDetails = async (req, res) => {
    withTryCatch(async () => {
        let teams = new TeamModel()
        return await teams.getTeamDetails(req.params.id)
    }, res)
}

module.exports.createTeams = async (req, res) => {
    withTryCatch(async () => {
        let teams = new TeamModel()
        return await teams.createTeams(req.body.teams)
    }, res)
}

module.exports.addPlayersIntoTeam = async (req, res) => {
    withTryCatchValidation(req, res, async () => {
        let teams = new TeamModel()
        return await teams.addPlayersIntoTeam(req.params.id, req.body.players)
    })
}
module.exports.getTopTeams = async (req, res) => {
    withTryCatchValidation(req, res, async () => {
        let teams = new TeamModel()
        return await teams.getTopTeams()
    })
}
