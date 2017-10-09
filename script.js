var players = ['John', 'Jane', 'Joanne'];
var scores = new Array()

function getScore() {
    return Math.floor(Math.random() * 10);
}

function addScores() {
  scores.push(getScore());
  scores.unshift(getScore());
}

function removeScores() {
  scores.pop()
  scores.shift()
}

console.log(scores);
addScores();
console.log(scores);
addScores();
console.log(scores);
removeScores();
console.log(scores);

if (scores.indexOf(1) === -1) {
  console.log('1 is not a score')
} else {
  console.log('1 is a score')
}
