function pairElement(str) {
  let pairs = [];
  let splitStr = str.split('');  
  splitStr.forEach(char => {
    switch (char) {
      case 'A':
        pairs.push(['A', 'T']);
        break;
      case 'T':
        pairs.push(['T', 'A']);
        break;
      case 'C':
        pairs.push(['C', 'G']);
        break;
      case 'G':
        pairs.push(['G', 'C']);
        break;
      default:      
      break;
    }
  });
  return pairs;
}

pairElement("TTGAG");
