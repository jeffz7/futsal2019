const { exceptionHandler } = require('../common/exceptions')
const responseData = { success: true, code: 200, data: {}, error: null }

module.exports.withTryCatch = async (operations, res) => {
    try {
        let data = await operations()
        responseData.data = data
        return res.status(200).send(responseData)
    } catch (e) {
        exceptionHandler(e, res)
    }
}