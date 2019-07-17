const validator = require('validator')


function isStringArray (arrayData) {
  if (Array.isArray(arrayData)) {
    if (arrayData.length < 1) {
      throw 'List is empty'
    }
    arrayData.forEach(function (element) {
      if (!isString(element)) {
        throw 'Array does not contain strings'
      }
    })
    return true
  }
  return false
}


function isUnixTimeStamp (timestamp) {
  if (isNaN(parseInt(timestamp))) {
    throw `It should be numeric. Received timestamp is ${timestamp}.`
  }

  var date = new Date(timestamp * 1000)
  if (isNaN(date.getTime())) {
    throw `Timestamp should be in Unix format ex. 1555674886. Received timestamp is ${timestamp}.`
  }

  return true
}


// Returns if a value is a string
function isString (value) {
  return typeof value === 'string' || value instanceof String
}


function isUUIDArray (value) {
  if (Array.isArray(value)) {
    if (value.length < 1) {
      throw 'Empty array!'
    }

    if (!isUnique(value)) {
      throw "Array should contain unique uuid's"
    }
    value.forEach(function (element) {
      if (!validator.isUUID(element)) {
        throw "Array does not contain uuid's"
      }
    })
    return true
  }
  return false
}

function isUnique (array) {
  return (new Set(array)).size === array.length
}

function difference (arrayB, arrayA) {
  return arrayA.filter(x => !arrayB.includes(x))
}


module.exports = {
  isUnixTimeStamp,
  isStringArray,
  isString,
  isUUIDArray
}
