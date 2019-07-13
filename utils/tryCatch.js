const { exceptionHandler } = require('../common/exceptions')

module.exports.withTryCatch = async (operations, res) => {
    try {
        await operations()
    } catch (e) {
        exceptionHandler(e, res)
    }
}