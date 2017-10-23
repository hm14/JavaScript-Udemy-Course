currentYear = 2017;

// function constructor

var john = {
  name: 'John',
  yearOfBirth: 1999,
  job: 'Teacher'
};

var Person = function(name, yearOfBirth, job) {
  this.name = name,
  this.yearOfBirth = yearOfBirth,
  this.job = job
};

// attached function calculateAge to the Person's prototype property
Person.prototype.calculateAge = function() {
    console.log(currentYear - this.yearOfBirth);
}

// new creates a new empty object
// then the constructor function is called
// this in the constructor points to the new empty object
var john = new Person('John', 1999, 'teacher');
var jane = new Person('Jane', 1988, 'manager');
var mark = new Person('Mark', 2001, 'student');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();
