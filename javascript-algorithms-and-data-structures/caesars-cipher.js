function rot13(str) {
  // declare and array to store the decoded values
  let rot13 = [];
  // declare and define an array with alphabets
  let alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G','H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T','U', 'V', 'W', 'X', 'Y', 'Z'];
  // split the string into each character and loop over each character to decode
  str.split('').forEach(char => {
    // check if the character is alphabet A-Z using regular expression, if not it must be some puntuation, spaces or any other character that we do not need to decode. Just add it to the decoded array rot13
    if (/[A-Z]/.test(char) === false) {
      rot13.push(char);
      return;
    }
    // get the index of the character and assign to index
    let index = alphabets.indexOf(char);
    // if the index is lesser than 13, add the value in the alphabets array exactly after adding index 13
    if (index < 13) {
      rot13.push(alphabets[index + 13]);
    } else { // else rotate the index by getting the remainder when dividing the index by 13. Alternatively, we can also minus the 13 from index and push the new index value from alphabets to decoded array
      index = index % 13;
      rot13.push(alphabets[index]);
    }
  });
  // finally convert the array to string by array.prototype.join method
  return rot13.join('');
}

rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
