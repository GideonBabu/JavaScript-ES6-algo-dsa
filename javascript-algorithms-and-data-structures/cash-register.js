/**
 * @description function to calculate the total cash in the drawer
 */
function total_cid(cid) {
    // declare and define the total as 0
    let total = 0;

    // go over each value provide in the drawer and add it to the total variable
    cid.forEach(cash => {
      total += cash[1];
    });

    // return the result by parse and with max of 2 decimal values
    return parseFloat(total).toFixed(2);
}
  
  function checkCashRegister(price, cash, cid) {
    /**@var change array */  
    var change = [];
    // declare and define the denomination object with values
    let denomination = {
    'PENNY': 0.01,
    'NICKEL': 0.05,
    'DIME': 0.1,
    'QUARTER': 0.25,
    'ONE': 1,
    'FIVE': 5,
    'TEN': 10,
    'TWENTY': 20,
    'ONE HUNDRED': 100
  };
    // declare the balance variable and define it with calculating cash - price
    let balance = cash - price;
    
    // return immediately with insufficient funds if the toal cash in drawe is
    // lesser than what we need to give back
    if (balance > total_cid(cid, denomination)) {    
      return ({status: "INSUFFICIENT_FUNDS", change: change});
    }
    
    // process the balance until the balance becomes 0.00
    while (parseFloat(balance).toFixed(2) > 0.00) {
      // process for hundreds
      // check if balance is greater than 100 and we have some hundreds in the drawer
      if (balance >= 100 && cid[8][1] > 0) {
        // calculate how much we can pick from the drawer
        // divide the balance by 100 gives how many hundred bills we can pick and then check if the drawer has that many bills 
        // otherwise pick as many as we have in the drawer
        let pick = (cid[8][1] >= (balance / 100) * 100) ? parseInt(balance / 100) : cid[8][1];
        // redefine the balance
        balance = (cid[8][1] >= (balance / 100) * 100) ? balance % 100 : (balance % 100) + parseInt(balance / 100) - cid[8][1] * 100;    
        // add the value to the change array
        change.push(['ONE HUNDRED', count]);
        // decrease the cash in the drawer we picked
        cid[8][1] -= pick;
      }
      
      // similar process of twenty
      if (balance >= 20 && cid[7][1] > 0) {
        let pick = (cid[7][1] >= (balance / 20) * 20) ? parseInt(balance / 20) * 20 : cid[7][1];
        balance = (cid[7][1] >= (balance / 20) * 20) ? balance % 20 : (balance % 20) + parseInt(balance / 20) * 20 - cid[7][1];
        change.push(['TWENTY', pick]);
        cid[7][1] -= pick;
      }
  
      // similar process of tens
      if (balance >= 10 && cid[6][1] > 0) {
        let pick = (cid[6][1] >= (balance / 10) * 10) ? parseInt(balance / 10) * 10 : cid[6][1];
        balance = (cid[6][1] >= (balance / 10) * 10) ? balance % 10 : (balance % 10) + parseInt(balance/10) * 10 - cid[6][1];
        change.push(['TEN', pick]);
        cid[6][1] -= pick;
      }
      
      // similar process of five
      if (balance >= 5 && cid[5][1] > 0) {
        let pick = (cid[5][1] >= (balance / 5) * 5) ? parseInt(balance / 5) * 5 : cid[5][1];
        balance = (cid[5][1] >= (balance / 5) * 5) ? balance % 5 : (balance % 5) + parseInt(balance/5) * 5- cid[5][1];
        change.push(['FIVE', pick]);
        cid[5][1] -= pick;
      }
      
      // similar process of ones
      if (balance >= 1 && cid[4][1] > 0) {
        let pick = (cid[4][1] >= (balance / 1) * 1) ? parseInt(balance / 1) * 1 : cid[4][1];
        balance = (cid[4][1] >= (balance / 1) * 1) ? balance % 1 : (balance % 1) + parseInt(balance /1) * 1 - cid[4][1];
        change.push(['ONE', pick]);
        cid[4][1] -= pick;
        balance = parseFloat(balance).toFixed(2);
      }
      
      // similar process of 0.25
      if (balance >= 0.25 && cid[3][1] > 0) {
        let pick = (cid[3][1] >= parseInt(balance / 0.25) * 0.25) ? parseInt(balance / 0.25) * 0.25 : cid[3][1];
        balance = (cid[3][1] >= parseInt(balance / 0.25) * 0.25) ? balance % 0.25 : (balance % 0.25) + (balance / 0.25) * 0.25 - cid[3][1];
        change.push(['QUARTER', pick]);
        cid[3][1] -= pick;
        balance = parseFloat(balance).toFixed(2);
      }
      
      // similar process for 0.1
      if (balance >= 0.1 && cid[2][1] > 0) {
        let pick = (cid[2][1] >= parseInt(balance / 0.1) * 0.1) ? parseInt(balance / 0.1) * 0.1 : cid[2][1];
        balance = (cid[2][1] >= parseInt(balance / 0.1) * 0.1) ? balance % 0.1 : (balance % 0.1) + (balance / 0.1) * 0.1 - cid[2][1];
        change.push(['DIME', pick]);
        cid[2][1] -= pick;
        balance = parseFloat(balance).toFixed(2);
      }  
  
      // similar process for 0.05
      if (balance >= 0.05 && cid[1][1] > 0) {
        let pick = (cid[1][1] >= (balance / 0.05) * 0.05) ? (balance / 0.05) * 0.05 : cid[1][1];
        balance = (cid[1][1] >= (balance / 0.05) * 0.05) ? balance % 0.05 : (balance % 0.05) + (balance / 0.05) * 0.05 - cid[1][1];
        change.push(['NICKEL', pick]);
        cid[1][1] -= pick;
        balance = parseFloat(balance).toFixed(2);
      }
  
      // similar process for 0.01
      if (balance >= 0.01 && cid[0][1] > 0) {
        let pick = (cid[0][1] >= parseInt(balance / 0.01) * 0.01) ? parseInt(balance / 0.01) * 0.01 : cid[0][1];        
        balance = (cid[0][1] >= parseInt(balance / 0.01) * 0.01) ? Math.floor(balance % 0.01) : (balance % 0.01) + (balance / 0.01) * 0.01 - cid[0][1];
        change.push(['PENNY', pick]);
        cid[0][1] -= pick;
        balance = parseFloat(balance).toFixed(2);
        break;
      }
    }
  
    // if the balance is still greater than 0.00 which means we do not have sufficient
    // cash in the drawer to give back
    // return insufficient funds
    if (balance > 0.00) {
      return ({status: "INSUFFICIENT_FUNDS", change: []});
    }
    
    // if the remaining value in the cash in drawer is 0.00, set the status as CLOSED
    if(total_cid(cid, denomination) === '0.00') {
      for(let key of Object.keys(denomination)) {
        let is_there = change.some(function(item) {
          return item[0] === key
        });
        if (!is_there) {
          change.push([key, 0]);
        }
      }
      return ({status: "CLOSED", change: change});
    }

    // return the status as OPEN and change array
    return ({status: "OPEN", change: change});
  }
   checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])