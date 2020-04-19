/**
 * function to prepare roman numbers based on passed params
 * the roman letter combinations for all the ones, tens, hundreds based on three values. ones, fives and tens. 
 *  for example all the one digit number can be formed with I, V, and X 
 */
function prepareRoman(num, one, fives, tens) {
  switch (num) {
    case 1:
      return one;
      break;
    case 2:
      return one + one;
      break;
    case 3:
      return one + one + one;
      break;
    case 4:
      return one + fives;
      break;
    case 5:
      return fives;
      break;
    case 6:
      return fives + one;
      break;
    case 7:
      return fives + one + one;
      break;
    case 8:
      return fives + one + one + one;
      break;
    case 9:
      return one + tens;
      break;
  }
}
function convertToRoman(num) {
  let roman = [];
  let thousands;
  let hundreds;
  let tens;
  // prepare thousands and store the remainder as num again to further find hundreds in next step
  if (num > 999 && num < 10000) {
    thousands = Math.floor(num / 1000);
    num = num % 1000;
  }
  // prepare number of hundreds in the provided number and store the remainder as num again to find tens in the next step
  if (num > 99) {
    hundreds = Math.floor(num / 100);
    num = num % 100;
  }
  // find the tens and store the remainder as num again this is the ones
  if (num > 9) {
    tens = Math.floor(num / 10);
    num = num % 10;
  }
  // since thousands is formed by M that pattern is bit different. Use for loop and form number of M for thousands
  if (thousands) {
    for (let i = 1; i <= thousands; i++) {
      roman.push('M');
    }
  }
  // for hundreds, tens, and ones use the prepareRoman function and pass the correct one, five and tens respectively
  if (hundreds) {
    roman.push(prepareRoman(hundreds, 'C', 'D', 'M'));
  }
  if (tens) {
    roman.push(prepareRoman(tens, 'X', 'L', 'C'));
  }
  if (num < 10) {
    roman.push(prepareRoman(num, 'I', 'V', 'X'));
  }
  // finally join the array to convert to string and return
  return roman.join('');
}

convertToRoman(3999);
