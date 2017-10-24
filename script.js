(function() {
  function Question(question, answerChoices, correctAnswer) {
    this.question = question;
    this.answerChoices = answerChoices;
    this.correctAnswer = correctAnswer;
  }

  Question.prototype.showQuestion = function() {
    console.log(this.question);

    for (var i=0; i<this.answerChoices.length; i++) {
      console.log('Choice ' + i + ': ' + this.answerChoices[i]);
    }
  }

  Question.prototype.checkAnswer = function(answer, keepScore) {
    var score;
    if(answer === this.correctAnswer) {
      console.log('You scored a point!');
      score = keepScore(true);
    } else {
      console.log('You missed this one. Try another!')
      score = keepScore();
    }
    this.showScore(score);
  }

  Question.prototype.showScore = function(score) {
    console.log('Your current score is: ' + score);
    console.log('* * * * * * * * * * * * * * ');
  }

  var question1 = new Question('What is 1 + 2?', [1,2,3,4], 2);
  var question2 = new Question('What is 3 + 0?', [1,2,3,4], 2);
  var question3 = new Question('What is 0 + 2?', [1,2,3,4], 1);
  var question4 = new Question('What is 2 + 2?', [1,2,3,4], 3);

  var questions = [
    question1,
    question2,
    question3,
    question4
  ];

  function getScore() {
    var score = 0;
    return function(correct) {
      if (correct) {
        score++;
      }
      return score;
    }
  }

  var keepScore = getScore();
  
  function nextQuestion() {
    var index = Math.floor(Math.random() * questions.length);

    questions[index].showQuestion();

    var answer = prompt('Enter your answer choice number: (press q to quit)');

    if(answer != 'q') {
      answer = parseInt(answer);
      questions[index].checkAnswer(answer, keepScore);
      nextQuestion();
    } else {
      console.log('quitting game...');
      console.log('Your current score is: ' + keepScore());
      console.log('* * * * * * * * * * * * * * ');
    }
  };

  nextQuestion();

 }) ();
