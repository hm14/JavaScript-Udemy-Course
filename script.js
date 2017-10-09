var firstPlayer = 'John';
var secondPlayer = 'Jane';
var thirdPlayer = 'Joanne'
var firstScore = Math.floor(Math.random() * 10);
var secondScore = Math.floor(Math.random() * 10);
var thirdScore = Math.floor(Math.random() * 10);

if (firstScore > secondScore && firstScore > thirdScore) {
  console.log(firstPlayer + ' won with ' + firstScore + ' points!')
  console.log(secondPlayer + ' scored ' + secondScore + ' points.')
  console.log(thirdPlayer + ' scored ' + thirdScore + ' points.')
} else if (secondScore > firstScore && secondScore > thirdScore) {
  console.log(secondPlayer + ' won with ' + secondScore + ' points!')
  console.log(firstPlayer + ' scored ' + firstScore + ' points.')
  console.log(thirdPlayer + ' scored ' + thirdScore + ' points.')
} else if (thirdScore > firstScore && thirdScore > secondScore){
  console.log(thirdPlayer + ' won with ' + thirdScore + ' points!')
  console.log(firstPlayer + ' scored ' + firstScore + ' points.')
  console.log(secondPlayer + ' scored ' + secondScore + ' points.')
} else {
  console.log("It's a tie!")
  console.log("The players scored " + firstScore + ', ' + secondScore + ', ' + thirdScore + ' points!')
}
