const TeamModel = require('./model')
const { withTryCatch } = require('../../utils/tryCatch')

module.exports.getAllTeams = async (req, res) => {
    withTryCatch(async () => {
        let teams = new TeamModel()
        let result = await teams.getAllTeams()
        return res.status(200).send({ success: true, code: 200, data: result, error: null })
    }, res)
}


module.exports.getTeamDetails = async (req, res) => {
    withTryCatch(async () => {
        let teams = new TeamModel()
        let result = await teams.getTeamDetails(req.params.id)
        return res.status(200).send({ success: true, code: 200, data: result, error: null })
    }, res)
}

module.exports.createTeams = async (req, res) => {
    withTryCatch(async () => {
        let teams = new TeamModel()
        let result = await teams.createTeams(req.body.teams)
        return res.status(200).send({ success: true, code: 200, data: result, error: null })
    }, res)
}