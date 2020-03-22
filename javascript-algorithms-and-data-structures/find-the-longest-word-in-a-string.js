function findLongestWordLength(str) {
  let findLongestWordLength = Number.MIN_VALUE;
  let wordsArr = str.split(' ');
  for (let i = 0; i < wordsArr.length; i++) {
    if (findLongestWordLength < wordsArr[i].length) {
      findLongestWordLength = wordsArr[i].length;
    }
  }
  return findLongestWordLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
