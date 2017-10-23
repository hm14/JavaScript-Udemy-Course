var currentYear = 2017;

// Object.create

var personProto = {
  calculateAge: function() {
    console.log(currentYear - this.yearOfBirth);
  }
};

var john = Object.create(personProto);
john.firstName = 'John';
john.lastName = 'Smith';
john.yearOfBirth = 1974;
john.calculateAge();

var jane = Object.create(personProto, {
  name: {value: 'Jane'},
  yearOfBirth: {value: 1978},
  job: {value: 'Manager'}
});

jane.calculateAge();
