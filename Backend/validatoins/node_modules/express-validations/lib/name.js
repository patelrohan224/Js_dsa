function isValidFirstname(firstname) {
	let isValidFirstname = /^(?=.{1,30}$)[A-Za-z]+$/
	if (firstname !== undefined) {
		return isValidFirstname.test(firstname.toString().toLowerCase())
	} else {
		return false
	}
}

function isValidMiddlename(middlename) {
	let isValidMiddlename = /^(?=.{1,30}$)[A-Za-z]+$/
	if (middlename !== undefined) {
		return isValidMiddlename.test(middlename.toString().toLowerCase())
	} else {
		return false
	}
}

function isValidLastname(lastname) {
	let isValidLastname = /^(?=.{1,30}$)[A-Za-z]+$/
	if (lastname !== undefined) {
		return isValidLastname.test(lastname.toString().toLowerCase())
	} else {
		return false
	}
}

function isValidFullname(fullname) {
	let isValidFullname = /^([A-Za-z]+\s)*[A-Za-z]+$/
	if (fullname !== undefined) {
		return isValidFullname.test(fullname.toString().toLowerCase())
	} else {
		return false
	}
}

module.exports = { isValidFirstname, isValidMiddlename, isValidLastname, isValidFullname }
