function convertHTML(str) {
  // split the str into array by each character
  let splitStr = str.split('');
  // go over each element in the array
  let markup = splitStr.map(e => {
    // use regex to check if it matches any of the html markup keys
    let match = e.match(/&|<|>|"|'/);

    // if regex not match it returns null. so here check if it's not null
    if (match !== null) {
      // use switch case to change to appropriate HTML markup
      switch (match[0]) {
        case '&':
          return '&amp;'
        case '<':
          return '&lt;';
        case '>':
          return '&gt;';
        case '"':
          return '&quot;';
        case "'":
          return '&apos;';  
      }      
    }
    // if no match return the character as it is
    return e;    
  });  
  // return the markup array by joining as a str
  return str = markup.join('');
}

convertHTML("Hamburgers < Pizza < Tacos");
