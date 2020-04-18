function palindrome(str) {
  // define the regular expression to filter only alpha numeric characters
  let regEx = /[a-z0-9]{1}/;
  // filter only alphanumeric characters from provided string
  let alphaNum = str.toLowerCase().split('').filter(char => {
    if (regEx.test(char)) {
      return true;
    }
  });
  // convert array to string
  alphaNum = alphaNum.join('');
  
  // copy converted alpha numeric string to another variable to reverse
  let copy = alphaNum;
  let reverse = [];
  // reverse the string using array unshift
  copy.split('').forEach(char => {
    reverse.unshift(char);
  });
  reverse = reverse.join('');

  // check if both strings are equal
  if (alphaNum === reverse) {
    return true;
  }
  
  return false;
}

palindrome("Gide on*!");
