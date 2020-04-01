function smallestCommons(arr) {
  let range = [];
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  
  for (let i = min; i <= max; i++)
    range.push(i);
  
  let size = range.length;
  let result = range[0]
  for (let i = 1; i < size; i++) {
    result = lcm(result, range[i]);
  }
  
  return result;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function gcd(a, b) {
  if (a === 0)
    return b;

  return gcd(b % a, a);
}

smallestCommons([23,18]);
