function chunkArrayInGroups(arr, size) {
  // Break it up.
  let chunky = [];
  for (let i = 0; i < arr.length; i += size) {
    chunky.push(arr.slice(i, i+ size));
  }
  return chunky;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
