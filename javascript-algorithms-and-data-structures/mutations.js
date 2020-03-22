function mutation(arr) {
  let splitArr = arr[1].split('');
  let arr0UC = arr[0].toUpperCase();
  for (let i = 0; i < splitArr.length; i++) {
    if (arr0UC.includes(splitArr[i].toUpperCase()) === false) {
      return false;
    }
  }  
  return true;
}

mutation(["hello", "hey"]);