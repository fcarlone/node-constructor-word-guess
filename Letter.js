// Function constructor
function Letter(char) {
  this.char = char;
  this.correctGuess = false;
};

Letter.prototype.toString = function () {
  return this.correctGuess ? this.char : '_';
};

Letter.prototype.checkGuess = function (userGuess) {
  if (userGuess === this.char.toLowerCase()) {
    this.correctGuess = true;
  }
};

// TEST
// let testChar = new Letter('m')
// console.log(testChar)
// testChar.checkGuess('l')
// testChar.toString();
// testChar.checkGuess('m')
// console.log(testChar)
// testChar.toString();


module.exports = Letter;
