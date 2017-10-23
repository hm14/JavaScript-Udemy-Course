var currentYear = 2017;

// First class functions

var birthYear = [1989, 1978, 1987, 2006, 1969];

function arrayCalc(birthYear, fn) {
  var resultArray = [];
  for(var i=0; i<birthYear.length; i++) {
    resultArray.push(fn(birthYear[i]));
  }
  return resultArray;
}

function calculateAge(birthYear) {
  return currentYear - birthYear;
}

function isMinor(age) {
  return age >= 18;
}

function maxHeartRate(age) {
  if (age >= 18 && age <= 81) {
    return Math.round(206.9 - (0.67 * age));    
  }
  else {
    return -1;
  }
}

// pass calculateArray as a callback function
// to do this: skip () after function
var ages = arrayCalc(birthYear, calculateAge);
var minors = arrayCalc(ages, isMinor);
var maxHeartRates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(minors);
console.log(maxHeartRates);
