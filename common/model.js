const neo4jDriver = require('./neo4j')
const exceptionType = require('./exceptions')

class Model {
    constructor() {
        this.neo4jDriver = neo4jDriver
        this.session = null
        this.permanent = [] /* this fields should not be modified by request payload */
        this.properties = {}
    }

    async execute (query, params) {
        this.session = this.neo4jDriver.session()
        try {
            return await this.session.run(query, params)
        } catch (e) {
            console.debug('NEO4J error: ' + e)
            throw new exceptionType.DatabaseException('Failed to execute query')
        } finally {
            this.session.close()
        }
    }

    /* check that body doest not contain additional parameters */
    validBody (reqBody) {
        for (var index in reqBody) {
            if (!(index in this.properties) || this.permanent.includes(index)) {
                throw new exceptionType.ValidationException(`${index} is not a valid parameter`)
            }
        }
    }

}

module.exports = Model