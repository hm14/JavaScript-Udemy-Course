console.log(getAge(2017, 1999));

// console.log(ageInYears(23, 32));
// this gves an error

function getAge(currentYear, birthYear) {
  return currentYear - birthYear;
};

var ageInYears = function(currentAge, years) {
  return currentAge + years;
}

console.log(ageInYears(23, 32));
