const { body, query } = require('express-validator')

module.exports = (method) => {
    switch (method) {
        case 'update': {
            return [
                body('winner', 'winner[STRING] is required').isString(),
            ]
        }
    }
}