var firstName = 'John';
var lastName = 'Doe';
var age = 23;
var isMinor = false;
var isStudent = false;
var profession = 'administrator'

if (age < 18) {
  isMinor = true
}

// js uses type coercion so variable types are changed on the go
// thus, in the code below age can be concatenated to a str
var profile = firstName + ' ' + lastName + ' is ' + age;

console.log(profile);
console.log('Is ' + firstName + ' ' + lastName + ' a minor?')
console.log(isMinor)

switch(profession) {
  case 'teacher':
    console.log('teacher');
  case 'painter':
    console.log('painter');
  case 'marketeer':
    console.log('marketeer');
  default:
    console.log('other');
}
