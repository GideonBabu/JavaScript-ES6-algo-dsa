
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  /**
   * function to find oribial period for passed altitude
   * axis can be calcuted by adding earthRadius and alt
   */
  function findOrbPeriod(alt) {
  const axis = alt + earthRadius;
  return Math.round(2 * Math.PI * (Math.sqrt(Math.pow(axis, 3) / GM)));
}

  arr.forEach(obj => {
    obj.orbitalPeriod = findOrbPeriod(obj.avgAlt);
    delete obj.avgAlt;   
  });

  return arr;
}


orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
