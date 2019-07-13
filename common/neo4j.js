const neo4j = require('neo4j-driver').v1
const url = process.env.NEO4J_URL || 'bolt://localhost:7687'

const user = {
    username: process.env.NEO4J_USERNAME || 'jobin',
    password: process.env.NEO4J_PASSWORD || 'Pwd123$$'
}

const neo4jDriver = neo4j.driver(url,
    neo4j.auth.basic(user.username, user.password))


module.exports = neo4jDriver