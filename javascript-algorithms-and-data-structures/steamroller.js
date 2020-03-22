function steamrollArray(arr) {
  // define new array to store only the flatted elements
  var flatted = [];

  // function to retrieve only elements from nested array
  var flatThis = (nestedArr) => {
    // check if the passed is not array then add this to flatted array
    if (Array.isArray(nestedArr) === false) {
      return flatted.push(nestedArr);
    }
    // if not an array go through each element and call this same flatThis function recursively
    nestedArr.forEach(ele => {
      flatThis(ele)
    });
  };
  // function call of flatThis of given param
  flatThis(arr);
  // return the final flatted array
  return flatted;  
}

steamrollArray([1, [2], [3, [[4]]]]);
