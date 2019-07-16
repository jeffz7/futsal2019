const express = require('express')
const router = express.Router()

const players = require('./src/players')
const games = require('./src/games')
const teams = require('./src/teams')

const gameSchema = require('./src/games/schema')

router.get('/games', games.getAllGames)
router.get('/games/:id', games.getGameDetails)
router.get('/players', players.getAllPlayers)
router.get('/players/:id', players.getPlayerDetails)
router.get('/teams', teams.getAllTeams)
router.get('/teams/:id', teams.getTeamDetails)

/** Route for Admin*/
router.post('/players', players.createPlayers)
router.post('/teams', teams.createTeams)
router.post('/games', games.createGames)
router.patch('/games/:id', gameSchema('update'), games.updateGame)



module.exports = router