
function DatabaseException (message) {
  this.message = message
  this.name = 'DatabaseException'
  this.status = 500
}

function ElementNotFoundException (message) {
  this.message = message
  this.name = 'ElementNotFoundException'
  this.status = 404
}

function ValidationException (message) {
  this.message = message
  this.name = 'ValidationException'
  this.status = 400
}

function ForbiddenException (message) {
  this.message = message
  this.name = 'ForbiddenException'
  this.status = 403
}
function AuthorizationException (message) {
  this.message = message
  this.name = 'AuthorizationException'
  this.status = 403
}

function exceptionHandler (e, res) {
  if (e instanceof ValidationException) {
    res.status(e.status).send({ success: false, code: e.status, data: [], errors: e, })
  } else if (e instanceof ElementNotFoundException) {
    res.status(e.status).send({ success: false, code: e.status, data: [], errors: e, })
  } else if (e instanceof DatabaseException) {
    res.status(e.status).send({ success: false, code: e.status, data: [], errors: e, })
  } else if (e instanceof AuthorizationException) {
    res.status(e.status).send({ success: false, code: e.status, data: [], errors: e, })
  } else {
    res.status(500).send({ success: false, code: 500, data: 'Internal Server Error', errors: e, })
    console.log(e)
  }
}

module.exports = { exceptionHandler, DatabaseException, ElementNotFoundException, ValidationException, ForbiddenException, AuthorizationException, }
