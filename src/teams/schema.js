const { body, query } = require('express-validator')

module.exports = (method) => {
    switch (method) {
        case 'addPlayersIntoTeam': {
            return [
                body('players', 'players Array of id is Required').isArray(),
            ]
        }
    }
}