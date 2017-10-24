// Call and Bind

//  CALL

var john = {
  name: 'John',
  age: 22,
  job: 'teacher',
  greeting: function(style, time) {
    if(style === 'formal') {
      console.log('Good ' + time + ', ladies and gentlemen! I\'m ' + this.name + '. I\'m a ' + this.age + ' year old ' + this.job +'.');
    } else if (style === 'friendly') {
      console.log('Hey! What\'s up? I\'m ' + this.name + '. I\'m a ' + this.age + ' year old ' + this.job +'. Have a nice ' + time +'!');
    }
  }
};

var emily = {
  name: 'Emily',
  age: 23,
  job: 'developer'
};

john.greeting('formal', 'morning');
john.greeting('friendly', 'afternoon');

// method borrowing
john.greeting.call(emily, 'formal', 'afternoon');

// BIND

// preset an argument for a function
var johnFriendly = john.greeting.bind(john, 'friendly');
johnFriendly('morning');

var emilyFormal = john.greeting.bind(emily, 'formal');
emilyFormal('evening');
