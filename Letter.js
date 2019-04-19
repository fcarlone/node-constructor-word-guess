

// Function constructor
function Letter(char) {
  this.char = char;
  this.correctGuess = false;
};

Letter.prototype.toString = function () {

  this.correctGuess ? console.log(this.char) : console.log('_');
  // this.correctGuess ? wordDisplay += this.char + ' ' : wordDisplay += '_ ';
  // console.log(wordDisplay)
};

Letter.prototype.checkGuess = function (userGuess) {
  if (userGuess === this.char) {
    this.correctGuess = true;
  }
}

// Test contructor function
// let testChar = new Letter('m')
// console.log(testChar)
// testChar.checkGuess('l')
// testChar.toString();
// testChar.checkGuess('m')
// console.log(testChar)
// testChar.toString();


module.exports = Letter;
