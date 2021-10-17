var assert = require('assert')

var { isValidEmail, isValidFirstname, isValidMiddlename, isValidLastname, isValidFullname, isStrongPassword, isValidDate, isAlpha, isNumeric, isAlphaNumeric, containsNotNumber, containsNotAlphabets, isLength, isValidURL } = require('../validations')

var testSampleEmail = [
	{ input: 'abc', expectedResult: false, description: '"abc" is not valid email' },
	{ input: 'abc#xyz.com', expectedResult: false, description: '"abc#xyz.com" is not valid email' },
	{ input: 'abc@123.com.', expectedResult: false, description: '"abc@123.com." is not valid email' },
	{ input: 'abc@xyz.c', expectedResult: false, description: '"abc@xyz.c" is not valid email' },
	{ input: undefined, expectedResult: false, description: '"undefined" is not valid value' },
	{ input: 'abc@xyz.com', expectedResult: true, description: '"abc@xyz.com" is valid email' },
	{ input: 'abc@pqr.xyz.com', expectedResult: true, description: '"abc@pqr.xyz.com" is valid email' }
]

var testSampleFirstname = [
	{ input: 'John123', expectedResult: false, description: '"John123" is not valid firstname' },
	{ input: 'John%Williams', expectedResult: false, description: '"John%Williams" is not valid firstname' },
	{ input: 'John@123', expectedResult: false, description: '"John@123" is not valid firstname' },
	{ input: '123456', expectedResult: false, description: '"123456" is not valid firstname' },
	{ input: undefined, expectedResult: false, description: '"undefined" is not valid value' },
	{ input: 'John', expectedResult: true, description: '"John" is valid firstname' }
]

var testSampleMiddlename = [
	{ input: 'David123', expectedResult: false, description: '"David123" is not valid middlename' },
	{ input: 'David@123', expectedResult: false, description: '"David@123" is not valid middlename' },
	{ input: '123456', expectedResult: false, description: '"123456" is not valid middlename' },
	{ input: undefined, expectedResult: false, description: '"undefined" is not valid value' },
	{ input: 'David', expectedResult: true, description: '"David" is valid middlename' }
]

var testSampleLastname = [
	{ input: 'Williams123', expectedResult: false, description: '"Williams123" is not valid lastname' },
	{ input: 'Williams@123', expectedResult: false, description: '"Williams@123" is not valid lastname' },
	{ input: '123456', expectedResult: false, description: '"123456" is not valid lastname' },
	{ input: undefined, expectedResult: false, description: '"undefined" is not valid value' },
	{ input: 'Williams', expectedResult: true, description: '"Williams" is valid lastname' }
]

var testSampleFullname = [
	{ input: 'John1 David2 Williams', expectedResult: false, description: '"John1 David2 Williams" is not valid fullname' },
	{ input: 'John David@Williams', expectedResult: false, description: '"John David@Williams" is not valid fullname' },
	{ input: '123456', expectedResult: false, description: '"123456" is not valid fullname' },
	{ input: undefined, expectedResult: false, description: '"undefined" is not valid value' },
	{ input: 'John David Williams', expectedResult: true, description: '"John David Williams" is valid fullname' }
]

var testSampleDate = [
	{ input: '32/01/2018', expectedResult: false, description: '"32/01/2018" is not valid date' },
	{ input: '31-13-2018', expectedResult: false, description: '"31-13-2018" is not valid date' },
	{ input: '29|02|2018', expectedResult: false, description: '"29|02|2018" is not valid date' },
	{ input: '29.2018', expectedResult: false, description: '"29.2018" is not valid date' },
	{ input: '31/01/20018', expectedResult: false, description: '"31/01/20018" is valid date' },
	{ input: undefined, expectedResult: false, description: '"undefined" is not valid value' },
	{ input: '31/01/2018', expectedResult: true, description: '"31/01/2018" is valid date' },
	{ input: '31.01.2018', expectedResult: true, description: '"31.01.2018" is valid date' },
	{ input: '31|01|2018', expectedResult: true, description: '"31|01|2018" is valid date' },
	{ input: '1-1-2018', expectedResult: true, description: '"1-1-2018" is valid date' },
	{ input: '1-1-18', expectedResult: true, description: '"1-1-18" is valid date' },
	{ input: '1-1-90', expectedResult: true, description: '"1-1-90" is valid date' },
	{ input: '31-12-2017', expectedResult: true, description: '"31-12-2017" is valid date' },
	{ input: '29-02-2016', expectedResult: true, description: '"29-02-2016" is valid date' }
]

var testSamplePassword = [
	{ input: 'rqpyyani', expectedResult: false, description: '"rqpyyani" is not strong password' },
	{ input: 'XXYfZK', expectedResult: false, description: '"XXYfZK" is not strong password' },
	{ input: 'kctjhXcGZ', expectedResult: false, description: '"kctjhXcGZ" is not strong password' },
	{ input: '92M3M', expectedResult: false, description: '"92M3M" is not strong password' },
	{ input: 'OQ{OK015.T', expectedResult: false, description: '"OQ{OK015.T" is not strong password' },
	{ input: '`~#por@k', expectedResult: false, description: '"`~#por@k" is not strong password' },
	{ input: '^^*2/,)<|*"$', expectedResult: false, description: '"^^*2/,)<|*"$" is not strong password' },
	{ input: '~B_][22', expectedResult: false, description: '"~B_][22" is not strong password' },
	{ input: undefined, expectedResult: false, description: '"undefined" is not valid value' },
	{ input: 'W,54/)*UA(|n', expectedResult: true, description: '"W,54/)*UA(|n" is strong password' },
	{ input: '3n@u=T$k\'', expectedResult: true, description: '"3n@u=T$k\'" is strong password' }
]

var testSampleAlphabets = [
	{ input: 'rqpyyani', expectedResult: true, description: '"rqpyyani" is valid alphabetic string' },
	{ input: 'XXYfZK', expectedResult: true, description: '"XXYfZK" is valid alphabetic string' },
	{ input: 'kctjFhXcGZ', expectedResult: true, description: '"kctjFhXcGZ" is valid alphabetic string' },
	{ input: undefined, expectedResult: false, description: '"undefined" is not valid value' },
	{ input: '123456', expectedResult: false, description: '"123456" is not valid alphabetic string' },
	{ input: 'Alpha@123', expectedResult: false, description: '"Alpha@123" is not valid alphabetic string' }
]

var testSampleNumbers = [
	{ input: '123456', expectedResult: true, description: '"123456" is valid numeric string' },
	{ input: '1987450564156814', expectedResult: true, description: '"1987450564156814" is valid numeric string' },
	{ input: 'kct1jFh5XcGZ', expectedResult: false, description: '"kct1jFh5XcGZ" is not valid numeric string' },
	{ input: undefined, expectedResult: false, description: '"undefined" is not valid value' },
	{ input: '123G456', expectedResult: false, description: '"123G456" is not valid numeric string' },
	{ input: 'Alpha@123', expectedResult: false, description: '"Alpha@123" is not valid numeric string' }
]

var testSampleAlphaNumeric = [
	{ input: 'Abc1234', expectedResult: true, description: '"Abc1234" is valid alpha-numeric string' },
	{ input: 'ABCD7867kj', expectedResult: true, description: '"ABCD7867kj" is valid alpha-numeric string' },
	{ input: 'kct1jFh5XcGZ', expectedResult: true, description: '"kct1jFh5XcGZ" is valid alpha-numeric string' },
	{ input: undefined, expectedResult: false, description: '"undefined" is not valid value' },
	{ input: '123@456', expectedResult: false, description: '"123@456" is not valid alpha-numeric string' },
	{ input: 'Alpha@123', expectedResult: false, description: '"Alpha@123" is not valid alpha-numeric string' }
]

var testSampleNotNumber = [
	{ input: 'Abc@XYZ', expectedResult: true, description: '"Abc@XYZ" is not contains a number' },
	{ input: 'HBR%(VO.I)', expectedResult: true, description: '"HBR%(VO.I)" is not contains a number' },
	{ input: 'kct1jFh5XcGZ', expectedResult: false, description: '"kct1jFh5XcGZ" is contains a number' },
	{ input: undefined, expectedResult: false, description: '"undefined" is not valid value' },
	{ input: '123@456', expectedResult: false, description: '"123@456" is contains a number' },
	{ input: 'Alpha@123', expectedResult: false, description: '"Alpha@123" is contains a number' }
]

var testSampleNotAlphabets = [
	{ input: '123@456', expectedResult: true, description: '"123@456" is not contains an alphabet' },
	{ input: '10245#^&', expectedResult: true, description: '"10245#^&" is not contains an alphabet' },
	{ input: 'kct1jFh5XcGZ', expectedResult: false, description: '"kct1jFh5XcGZ" is contains an alphabet' },
	{ input: undefined, expectedResult: false, description: '"undefined" is not valid value' },
	{ input: '123A45f6', expectedResult: false, description: '"123A45f6" is contains an alphabet' },
	{ input: 'Alpha@123', expectedResult: false, description: '"Alpha@123" is contains an alphabet' }
]

var testSampleLength = [
	{ input: 'abcdefg', minLength: 0, maxLength: 10, expectedResult: true, description: '"abcdefg" is in specified length range' },
	{ input: 'abcd1234', minLength: 10, maxLength: 20, expectedResult: false, description: '"abcd1234" is not in specified length range' },
	{ input: 'abcdef', minLength: 3, maxLength: null, expectedResult: true, description: '"abcdef" is in specified length range' },
	{ input: 'ab', minLength: 3, maxLength: null, expectedResult: false, description: '"ab" is not in specified length range' },
	{ input: 'abcde', minLength: null, maxLength: 6, expectedResult: true, description: '"abcde" is in specified length range' },
	{ input: 'abcdefg', minLength: null, maxLength: 6, expectedResult: false, description: '"abcdefg" is not in specified length range' },
	{ input: 'abcdefg', minLength: null, maxLength: null, expectedResult: 'minimum length or maximum length is required', description: '"abcdefg" is not in specified length range' },
	{ input: undefined, minLength: 0, maxLength: 6, expectedResult: false, description: '"undefined" is not valid value' },
	{ input: 'abcde', expectedResult: 'minimum length or maximum length is required', description: '"abcde" is not in specified length range' }
]

var testSampleURL = [
	{ input: 'google.com', expectedResult: true, description: '"google.com" is valid URL' },
	{ input: 'www.google.com', expectedResult: true, description: '"www.google.com" is valid URL' },
	{ input: 'http://www.google.com', expectedResult: true, description: '"http://www.google.com" is valid URL' },
	{ input: 'https://www.google.com', expectedResult: true, description: '"https://www.google.com" is valid URL' },
	{ input: 'https://www.google.com/specificPageURL', expectedResult: true, description: '"https://www.google.com/specificPageURL" is valid URL' },
	{ input: 'http//www.google.com', expectedResult: false, description: '"http//www.google.com" is not valid URL' },
	{ input: '123456', expectedResult: false, description: '"123456" is not valid URL' },
	{ input: undefined, expectedResult: false, description: '"undefined" is not valid value' }
]

describe('Array', () => {
	testSampleEmail.forEach((email) => {
		it(email.description, () => {
			assert.equal(isValidEmail(email.input), email.expectedResult)
		})
	})
})

describe('Array', () => {
	testSampleFirstname.forEach((firstname) => {
		it(firstname.description, () => {
			assert.equal(isValidFirstname(firstname.input), firstname.expectedResult)
		})
	})
})

describe('Array', () => {
	testSampleMiddlename.forEach((middlename) => {
		it(middlename.description, () => {
			assert.equal(isValidMiddlename(middlename.input), middlename.expectedResult)
		})
	})
})

describe('Array', () => {
	testSampleLastname.forEach((lastname) => {
		it(lastname.description, () => {
			assert.equal(isValidLastname(lastname.input), lastname.expectedResult)
		})
	})
})

describe('Array', () => {
	testSampleFullname.forEach((fullname) => {
		it(fullname.description, () => {
			assert.equal(isValidFullname(fullname.input), fullname.expectedResult)
		})
	})
})

describe('Array', () => {
	testSampleDate.forEach((date) => {
		it(date.description, () => {
			assert.equal(isValidDate(date.input), date.expectedResult)
		})
	})
})

describe('Array', () => {
	testSamplePassword.forEach((password) => {
		it(password.description, () => {
			assert.equal(isStrongPassword(password.input), password.expectedResult)
		})
	})
})

describe('Array', () => {
	testSampleAlphabets.forEach((alphabets) => {
		it(alphabets.description, () => {
			assert.equal(isAlpha(alphabets.input), alphabets.expectedResult)
		})
	})
})

describe('Array', () => {
	testSampleNumbers.forEach((numbers) => {
		it(numbers.description, () => {
			assert.equal(isNumeric(numbers.input), numbers.expectedResult)
		})
	})
})

describe('Array', () => {
	testSampleAlphaNumeric.forEach((alphaNumeric) => {
		it(alphaNumeric.description, () => {
			assert.equal(isAlphaNumeric(alphaNumeric.input), alphaNumeric.expectedResult)
		})
	})
})

describe('Array', () => {
	testSampleNotNumber.forEach((notNumber) => {
		it(notNumber.description, () => {
			assert.equal(containsNotNumber(notNumber.input), notNumber.expectedResult)
		})
	})
})

describe('Array', () => {
	testSampleNotAlphabets.forEach((notAlphabet) => {
		it(notAlphabet.description, () => {
			assert.equal(containsNotAlphabets(notAlphabet.input), notAlphabet.expectedResult)
		})
	})
})

describe('Array', () => {
	testSampleLength.forEach((string) => {
		it(string.description, () => {
			assert.equal(isLength(string.input, string.minLength, string.maxLength), string.expectedResult)
		})
	})
})

describe('Array', () => {
	testSampleURL.forEach((url) => {
		it(url.description, () => {
			assert.equal(isValidURL(url.input), url.expectedResult)
		})
	})
})
