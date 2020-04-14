var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly  
  let firstName = firstAndLast.split(' ')[0];
  let lastName = firstAndLast.split(' ')[1];

  this.getFullName = function() {
    return this.getFirstName() + ' ' + this.getLastName();
  };

  this.setFullName = function(firstAndLast) {
    this.setFirstName(firstAndLast.split(' ')[0]);
    this.setLastName(firstAndLast.split(' ')[1]);
  };

  this.getFirstName = function() {
    return firstName;
  };

  this.getLastName = function() {
    return lastName;
  };

  this.setFirstName = function(fN) {
    firstName = fN;
  };

  this.setLastName = function(lN) {
    lastName = lN;
  };

  return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
