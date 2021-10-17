function isStrongPassword(password) {
	let isStrongPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[~`!@#$%^&*()+_=\\|[\]{}:;"'?/,.<>-])(?=.*[A-Z]).{8,32}$/
	if (password !== undefined) {
		return isStrongPassword.test(password.toString())
	} else {
		return false
	}
}

module.exports = { isStrongPassword }
