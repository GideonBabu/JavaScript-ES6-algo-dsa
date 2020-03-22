function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  if (str.slice(str.length - target.length) === target) {
    return true;
  }
  return false;
}

confirmEnding("Bastian", "n");
