var firstName = 'John';
var lastName = 'Doe';
var age = 23;

// js uses type coercion so variable types are changed on the go
// thus, in the code below age can be concatenated to a str
var profile = firstName + ' ' + lastName + ' is ' + age;

console.log(profile);

var isMinor = false;
console.log('Is ' + firstName + ' ' + lastName + ' a minor?')
console.log(isMinor)

var noValue;
console.log('Initially, noValue = ' + noValue)
noValue = 'valuable'
console.log('Then, noValue = ' + noValue)

// variable mutation
noValue = 'no longer valuable'
console.log('Later, noValue = ' + noValue)
