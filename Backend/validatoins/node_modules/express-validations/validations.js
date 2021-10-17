var { isValidEmail } = require('./lib/email')
var { isValidFirstname, isValidMiddlename, isValidLastname, isValidFullname } = require('./lib/name')
var { isStrongPassword } = require('./lib/password')
var { isValidDate } = require('./lib/date')
var { isAlpha, isNumeric, isAlphaNumeric, containsNotNumber, containsNotAlphabets, isLength } = require('./lib/general')
var { isValidURL } = require('./lib/url')

module.exports = {
	isValidEmail,
	isValidFirstname, isValidMiddlename, isValidLastname, isValidFullname,
	isStrongPassword,
	isValidDate,
	isAlpha, isNumeric, isAlphaNumeric, containsNotNumber, containsNotAlphabets, isLength,
	isValidURL
}
