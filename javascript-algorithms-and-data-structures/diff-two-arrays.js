  function diffArray(arr1, arr2) {
  //var newArr = [];
  // Same, same; but different.
  if (arr2.length > arr1.length) {
    return diffArray(arr2, arr1);      
  }
  var newArr = arr1.filter(item => {    
    let index = arr2.indexOf(item);
    if (index === -1) {
      arr2.splice()
      return true;
    }
    arr2.splice(index, 1);
  });
  return [...newArr, ...arr2];
}

let a = diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
console.log(a);
