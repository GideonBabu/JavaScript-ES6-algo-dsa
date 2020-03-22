function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  if (arr.length === 0) return 0;
  arr.sort(function(a, b) {
    if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  // a must be equal to b
  return 0;
  });
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return i;    
  }
  return i;
}

getIndexToIns([40, 60], 50);
getIndexToIns([10, 20, 30, 40, 50], 35);
