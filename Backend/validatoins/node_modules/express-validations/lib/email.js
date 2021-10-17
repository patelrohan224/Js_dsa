function isValidEmail(email) {
	let isValidEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
	if (email !== undefined) {
		return isValidEmail.test(email.toString().toLowerCase())
	} else {
		return false
	}
}

module.exports = { isValidEmail }
