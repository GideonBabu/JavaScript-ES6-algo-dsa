function addTogether() {

  let args = arguments;
  let a = arguments[0];
  let b = arguments[1];
  let len = args.length;

  function isNum(a) {
    return Number.isInteger(a);
  }

  if (len > 2)
    return undefined;

  if (len === 2) {
    if (!isNum(a) || !isNum(b)) {
      return undefined;
    }
    return a + b;
  }

  if (len === 1) {
    if (!isNum(a))
      return undefined;

    return function(b) {
      if (isNum(b)) {
        return a + b;
      } 
    };
  }
}

addTogether(2)(3);
