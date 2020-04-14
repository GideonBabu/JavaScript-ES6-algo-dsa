function uniteUnique(arr) {
  var result = [];  
  for (let i = 0; i < arguments.length; i++) {
    let argument = arguments[i];
    argument.forEach(element => {
      if (result.includes(element) === false) {
        result.push(element);
      }      
    });
  }  
  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
