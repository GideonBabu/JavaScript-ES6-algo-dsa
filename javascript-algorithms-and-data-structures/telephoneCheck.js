function telephoneCheck(str) {

  // declare and define the boolean variables
  let hasTenDigits = false;
  let hasElevenDigits = false;
  let startsWithOne = false;
  let hasCorrectParentheses = false;
  let hasAllowedCharsOnly = false;

  // regular expression check for number of digits
  if (str.match(/[\d]/g).length === 10)
    hasTenDigits = true;
  if (str.match(/[\d]/g).length === 11)
    hasElevenDigits = true;
  
  // regular expression check for first digit
  if (/^1/.test(str) === true)
    startsWithOne = true;

  // regular expression check for correct parantheses
  if (/[()]/.test(str) === false) {
    hasCorrectParentheses = true;
  } else if (/[(]{1}/.test(str) === true && /[)]{1}/.test(str) == true) {
    // closing parentheses should not be the last character
    if (str.slice(-1) !== ')') {
      hasCorrectParentheses = true;
    }
  }

  // regular expression check for allowed character  
  if (/^[\d\s-() ]+$/.test(str) === true)
    hasAllowedCharsOnly = true;

  // given input is not ten and eleven digits immediately return false
  if (!hasTenDigits && !hasElevenDigits) {
    return false;
  }

  // check input has both allowed characters and correct parentheses
  if (!hasAllowedCharsOnly || !hasCorrectParentheses) {
    return false;
  }

  // check if input has eleven digits it must start with number 1, US country code, otherwise return false
  if (hasElevenDigits && !startsWithOne) {
    return false;
  }

  return true;
}

telephoneCheck("2 (757) 622-7382");