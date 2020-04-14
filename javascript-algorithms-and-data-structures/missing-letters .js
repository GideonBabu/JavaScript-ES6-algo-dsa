function fearNotLetter(str) {
  let alphabets = ['a', 'b', 'c', 'd', 'e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let splitStr = str.split('');
  var startIndex = alphabets.indexOf(splitStr[0]);
  var missingLetter;
  for (let i = alphabets.indexOf(splitStr[0]); i < splitStr.length; i++) {

  }
  splitStr.some((letter) => {    
    if (letter === alphabets[startIndex]) { 
      startIndex++; 
      return;
    } else {
      missingLetter = alphabets[startIndex];
      return true;
    }
    startIndex++;
  });
  if (missingLetter !== undefined) {
    return missingLetter;
  }
  return undefined;
}
fearNotLetter("abce");
