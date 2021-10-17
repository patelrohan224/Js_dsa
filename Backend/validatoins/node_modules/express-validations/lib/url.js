function isValidURL(url) {
	let isValidURL = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
	if (url !== undefined) {
		return isValidURL.test(url.toString())
	} else {
		return false
	}
}

module.exports = { isValidURL }
