// primitives vs. objects

// Prmitive
// primitives are accessed as values
var a = 1;
var b = a;
console.log('a = ' + a);
console.log('b = ' + b);
a = 11;
console.log('new a = ' + a);

// Objects

// objects are accessed by reference
// objects are accessed as place in memory

var obj1 = {
  name: 'John',
  age: 26
};

var obj2 = obj1;

console.log('obj1.age is ' + obj1.age);
console.log('obj2.age is ' + obj2.age);

obj1.age = 32;

console.log('obj1.age is ' + obj1.age);
console.log('obj2.age is ' + obj2.age);

// Functions

var age = 44;
var obj = {
  name: 'Gina',
  city: 'Garden'
}

// when primitives are passed to functions, a copy is created
// when objects are passed to functions, no copy is made
// the object is not really passed to the function
// but a reference that points to the object

function change(a, b) {
  a = 33;
  b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);
