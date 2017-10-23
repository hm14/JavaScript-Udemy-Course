// IIFE: immediately invoked function expession
// not reusable functions
// good for data privacy and code modularity


(function () {
  var score = Math.random() * 10;
  console.log(score);
})();

(function (luck) {
  var score = Math.random() * 10;
  console.log(score + ' ' + score * luck);
})(2);
