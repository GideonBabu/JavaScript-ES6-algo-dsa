function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  for (let i = 0; i < collection.length; i++) {    
    var addThis = true;
    for (let key in source) {
      if (collection[i].hasOwnProperty(key) === false || collection[i][key] !== source[key]) {
        addThis = false;
        continue;
        }        
      }
      if (addThis) {
        arr.push(collection[i]);
      }
    }  
  console.log(arr);
  // Only change code above this line
  return arr;
}
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })
//whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
