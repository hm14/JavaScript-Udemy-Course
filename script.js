var john = {
  firstName: 'John',
  lastName: 'Doe',
  score: getScore(),
  nickname: function() {
    return this.lastName + this.firstName
  }
};

function getScore() {
    return Math.floor(Math.random() * 10);
}

console.log(john)
console.log(john.score)
john.score = getScore()
console.log(john['score'])

console.log(john.nickname())

var jane = new Object();
jane.firstName = 'Jane';
jane.lastName = 'Doe'
jane.score = getScore()

console.log(jane);
