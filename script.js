var speaker = 'Tom';

// console.log(speaker + ': ' + greeting + ' ' + question)
// this gives an error because the local variables are out of scope globally

greet()

function greet() {
  var greeting = 'Hello!';
  ask();
  function ask() {
      var question = 'How are you?';
      // this does not give an error because global variables are accessible locally
      console.log(speaker + ': ' + greeting + ' ' + question)
  }
}
