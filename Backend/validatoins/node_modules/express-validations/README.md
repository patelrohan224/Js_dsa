# express-validations

[![npm Status](https://img.shields.io/npm/v/express-validations.svg)](https://travis-ci.org/bhavik5/express-validations) [![Build Status](https://travis-ci.org/bhavik5/express-validations.svg?branch=master)](https://travis-ci.org/bhavik5/express-validations) [![Known Vulnerabilities](https://snyk.io/test/npm/express-validations/badge.svg)](https://travis-ci.org/bhavik5/express-validations) [![Code Standard](https://img.shields.io/badge/code%20standard-eslint-brightgreen.svg?style=flat)](https://travis-ci.org/bhavik5/express-validations) [![HitCount](http://hits.dwyl.io/bhavik5/express-validations.svg)](https://travis-ci.org/bhavik5/express-validations)

[![npm package](https://nodei.co/npm/express-validations.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/express-validations/)

NPM package that provides almost all types of validation methods

  - [Upgrade notice](#upgrade-notice)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Complete List of Validation Methods](#complete-list-of-validation-methods)
  - [License](#license)

### Upgrade Notice

If you're arriving here as a express-validations v1 user, please check the Usage Guide in order to find out what's we provide!

### Installation

```bash
  $ npm install express-validations
```

### Usage

```javascript
  var expressValidations = require('express-validations');
  var email = 'demouser@gmail.com';
  var firstname = 'demouser';
  var minLength = 3;
  var maxLength = 25;

  if (expressValidations.isValidEmail(email)) {
    // if email address is valid
  } else {
    // if email address is invalid
  }

  expressValidations.isValidFirstname(firstname);
  // returns true, if firstname is valid

  expressValidations.isLength('String Length', minLength, maxLength)
  // returns true, if length is between specified range
  // If you have only maxLength criteria, use null for minLength
```

### Complete List of Validation Methods

  - isValidEmail(email)
  - isValidFirstname(firstname)
  - isValidMiddlename(middlename)
  - isValidLastname(lastname)
  - isValidFullname(fullname)
  - isStrongPassword(password)
  - isValidDate(date)
  - isAlpha(alphabeticString)
  - isNumeric(numericString)
  - isAlphaNumeric(alphaNumericString)
  - containsNotNumber(nonNumericString)
  - containsNotAlphabets(nonAlphabeticString)
  - isLength(string, minLength, maxLength)
  - isValidURL(url)

### License

ISC License