var scores = []

function getScore() {
    return Math.floor(Math.random() * 10);
}

for (var i=1; i<=10; i++) {
  score = getScore()
  console.log('On turn ' + i + ' you scored: ' + score)
}
