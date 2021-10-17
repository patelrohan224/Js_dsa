function isAlpha(alpha) {
	let isAlpha = /^[A-Za-z]+$/
	if (alpha !== undefined) {
		return isAlpha.test(alpha.toString())
	} else {
		return false
	}
}

function isNumeric(numeric) {
	let isNumeric = /^[0-9]+$/
	if (numeric !== undefined) {
		return isNumeric.test(numeric.toString())
	} else {
		return false
	}
}

function isAlphaNumeric(alphaNumeric) {
	let isAlphaNumeric = /^[A-Za-z0-9]+$/
	if (alphaNumeric !== undefined) {
		return isAlphaNumeric.test(alphaNumeric.toString())
	} else {
		return false
	}
}

function containsNotNumber(notNumber) {
	let containsNotNumber = /^[^0-9]+$/
	if (notNumber !== undefined) {
		return containsNotNumber.test(notNumber.toString())
	} else {
		return false
	}
}

function containsNotAlphabets(notAlphabets) {
	let containsNotAlphabets = /^[^A-Za-z]+$/
	if (notAlphabets !== undefined) {
		return containsNotAlphabets.test(notAlphabets.toString())
	} else {
		return false
	}
}

function isLength(string, min = null, max = null) {
	if (string !== undefined) {
		if (min !== null && max !== null) {
			if (string.length >= min && string.length <= max) {
				return true
			} else {
				return false
			}
		} else if (min !== null && max === null) {
			if (string.length >= min) {
				return true
			} else {
				return false
			}
		} else if (min === null && max !== null) {
			if (string.length <= max) {
				return true
			} else {
				return false
			}
		} else {
			return "minimum length or maximum length is required"
		}
	} else {
		return false
	}
}

module.exports = { isAlpha, isNumeric, isAlphaNumeric, containsNotNumber, containsNotAlphabets, isLength }
