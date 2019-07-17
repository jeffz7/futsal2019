const validator = require('express-validator')
const { exceptionHandler } = require('../common/exceptions')
const validationHandler = require('../common/validationHandler')()
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

module.exports.withTryCatchValidation = async (req, res, operations) => {
    try {
        const validationError = await validator.validationResult(req)
        if (validationError) {
            validationHandler(validationError)
        }
        let data = await operations()
        responseData.data = data
        return res.status(200).send(responseData)
    } catch (e) {
        exceptionHandler(e, res)
    }
}