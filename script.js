// Closures
// An inner function can access the variables and parameters of its outer function
// even after the outer function has returned

var currentYear = 2017;

function retirement(retirementAge) {
  return function(yearOfBirth) {
    var str = ' years left until retirement!'
    var age = currentYear - yearOfBirth;
    console.log(retirementAge - age + str);
  }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1969);
retirementGermany(1969);
retirementIceland(1969);

retirement(65)(1959);
