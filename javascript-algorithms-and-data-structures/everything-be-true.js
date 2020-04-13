function truthCheck(collection, pre) {
  let truthy = true;
  // loop over each array of objects
  collection.forEach(obj => {
    // for each array object items check if the property pre is true. If not true, then set truthy as false and return.
    if (!obj[pre]) {
      truthy = false;
      return;
    }
  });
  return truthy;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
