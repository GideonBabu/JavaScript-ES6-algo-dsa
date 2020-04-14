function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins  
let result = str.split(/(?=[A-Z])|[_\s]/).map(s => s.toLowerCase()).join('-');
//console.log(result);
  return result;
}

spinalCase('The_Andy_Griffith_Show');
