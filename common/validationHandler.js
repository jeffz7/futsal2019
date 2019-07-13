/* map validation errors to response string */
const { ValidationException } = require('./exceptions')

module.exports = next => result => {
  if (result.isEmpty()) return

  if (!next) {
    throw new ValidationException(result.array({ onlyFirstError: true }).map(i => `['${i.param}' ${i.msg}]`).join(', '))
  } else {
    return next(

      new ValidationException(

        result.array({ onlyFirstError: true }).map(i => `['${i.param}' ${i.msg}]`).join(', ')

      )
    )
  }
}
