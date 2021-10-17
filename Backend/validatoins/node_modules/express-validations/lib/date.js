function isValidDate(date) {
	if (date !== undefined) {
		date = date.toString()
		var dateFormat = /^\d{1,2}[\.|\/|-]\d{1,2}[\.|\/|-]\d{1,4}$/
		if (dateFormat.test(date)) {
			date = date.replace(/0*(\d*)/gi, "$1")
			var dateArray = date.split(/[\.|\/|-]/)
			dateArray[1] = dateArray[1] - 1
			if (dateArray[2].length < 4) {
				dateArray[2] = (parseInt(dateArray[2]) < 50) ? 2000 + parseInt(dateArray[2]) : 1900 + parseInt(dateArray[2])
			}
			var testDate = new Date(dateArray[2], dateArray[1], dateArray[0])
			if (testDate.getDate() != dateArray[0] || testDate.getMonth() != dateArray[1] || testDate.getFullYear() != dateArray[2]) {
				return false
			} else {
				return true
			}
		} else {
			return false
		}
	} else {
		return false
	}
}

module.exports = { isValidDate }
