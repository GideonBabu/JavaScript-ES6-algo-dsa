function myReplace(str, before, after) {
  let splitStr = str.split(' ');  
  splitStr.forEach((word, index) => {
    if (word === before) {
      if (before.charAt(0) === before.charAt(0).toUpperCase()) {
        splitStr[index] = after.charAt(0).toUpperCase() + after.slice(1);
      } else {
        splitStr[index] = after;
      }
      
    }
  });  
  console.log(splitStr.join(' '));
  return splitStr.join(' ');
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
