var names = ['John', 'Jane', 'Joan', 'Jean', 'Jolo'];
var birthYears = [1990, 1995, 2000, 2005, 2009];
var ages = [];
var minors = [];
var currentYear = 2017;

function getAge(birthYear) {
  return currentYear - birthYear;
};

function isMinor(age) {
    if (age < 18) {
      return true;
    } else {
      return false;
    }
};

function show() {
  for (var i=0; i<names.length; i++) {
    ages.push(getAge(birthYears[i]));
    minors.push(isMinor(ages[i]));
    if (minors[i] == true) {
      console.log(names[i] + ' is a minor with age ' + ages[i])
    } else {
      console.log(names[i] + ' is not a minor with age ' + ages[i])
    }
  }
}

show();
