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

Person.prototype.lastName = 'Smith';

// attached function calculateAge to the Person's prototype property
Person.prototype.showAge = function() {
    var age = currentYear - this.yearOfBirth;
    var fullName = this.name + ' ' + this.lastName;
    console.log(fullName + ' is ' + age);
}

// new creates a new empty object
// then the constructor function is called
// this in the constructor points to the new empty object
var john = new Person('John', 1988, 'teacher');
var jane = new Person('Jane', 1992, 'manager');
var mark = new Person('Mark', 2001, 'student');

// due to inheritance, all 3 now have the last name 'Smith'
john.showAge();
jane.showAge();
mark.showAge();
