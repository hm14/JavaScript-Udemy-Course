// this points to window object
console.log(this);

greet()

function greet() {
  console.log('Hello!')
  // this points to window object
  console.log(this)
}

var john = {
  name: 'John',
  yearOfBirth: 1898,
  getUserId: function() {
    // this points to john object
    console.log(this);
    // prints object john's name
    console.log(this.name);

    function innerFunc() {
      // this points to window object
      console.log(this)
    }
    innerFunc();
  }
};

john.getUserId();

var mike = {
  name: 'Mike',
  yearOfBirth: 1892
};

mike.getUserId = john.getUserId;
mike.getUserId();
