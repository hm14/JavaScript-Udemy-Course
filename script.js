var players = ['John', 'Jane', 'Joan', 'Jean', 'Jolo']
var scores = []

function getScore() {
    return Math.floor(Math.random() * 10);
}

function playGame() {
  scores = []
  for (var j=0; j<players.length; j++){
    scores.push(0)
    for (var i=1; i<=3; i++) {
      score = getScore()
      scores[j] += score
      console.log('On turn ' + i + ' ' + players[j] + ' scored: ' + score)
    }
    console.log(players[j] + ' scored a total of ' + scores[j] + ' points!')
  }
}

function showWinner() {
  playGame()
  var max = scores.reduce(function(a, b) {
      return Math.max(a, b);
  });
  var index = scores.indexOf(max);
  scores.sort();
  if (scores[0] == scores[1]) {
    console.log(" * * * * * It's a tie >< * * * * * ")
  } else {
    console.log('*********************************************')
    console.log('*** ' + players[index] + ' won with the highest score of ' + max + ' ***');
    console.log('*********************************************')
  }
}

showWinner()
