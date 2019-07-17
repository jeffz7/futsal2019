const { body, query } = require('express-validator')
const {isUUIDArray} = require('../../common/validators')

module.exports = (method) => {
    switch (method) {
        case 'addPlayersIntoTeam': {
            return [
                body('players', 'players Array of id is Required').isArray().custom(object => isUUIDArray(object)),
            ]
        }
    }
}