var firstName = 'John';
var lastName = 'Doe';
var age = 23;
var isMinor = false;
var isStudent = true;

if (age < 18) {
  isMinor = true
}

// js uses type coercion so variable types are changed on the go
// thus, in the code below age can be concatenated to a str
var profile = firstName + ' ' + lastName + ' is ' + age;

console.log(profile);
console.log('Is ' + firstName + ' ' + lastName + ' a minor?')
console.log(isMinor)

if(isMinor && isStudent) {
  console.log('A minor eligible for school lunch');
} else if(isMinor && !isStudent) {
    console.log('A minor not eligible for school lunch');
} else if(!isMinor && isStudent) {
    console.log('Not a minor but eligible for school lunch');
}
else {
  console.log('Not a minor and not eligible for school lunch');
}
