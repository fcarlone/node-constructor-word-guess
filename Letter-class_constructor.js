// Constructor function (I'm using Class Constructor)
class Letter {
  constructor(char) {
    this.char = char;
    this.correctGuess = false;
  };

  // Functions
  toString() {
    this.correctGuess ? console.log(this.char) : console.log('_');
  };

  checkGuess(userGuess) {
    if (userGuess === this.char) {
      this.correctGuess = true;
    }
  }
};

// Letter.prototype.toString = function () {
//   this.correctGuess ? console.log(this.char) : console.log('_');
// };

// Test contructor function
let testChar = new Letter('m')
console.log(testChar)
testChar.checkGuess('l')
testChar.toString();
testChar.checkGuess('m')
console.log(testChar)
testChar.toString();


module.exports = Letter;
