function dropElements(arr, func) {
  let size = arr.length;
  let undropped = [];
  for (let i = 0; i < size; i++) {
    if (func(arr[i]) === true) {
      undropped = arr.slice(i);
      break;
    } else {
      continue;
    }
  }
  return undropped;
}
dropElements([0, 1, 0, 1], function(n) {return n === 1;});