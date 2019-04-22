const colors = require('colors/safe');
const Letter = require("./Letter.js");

// Class Constructor
class Word {
  constructor() {
    this.wordArray = [];
  }
  // Functions
  addChars(convertWord) {
    // convert string to array
    convertWord.split('').forEach((char) => {
      this.wordArray.push(new Letter(char))
    })
  }
  checkLetter(userGuess) {
    let display = [];
    this.wordArray.forEach((char) => {
      char.checkGuess(userGuess)
      display.push(char.toString());
    })
    console.log(colors.black.bgWhite(' ' + (display.join(' ') + ' \n')));
  }
};

module.exports = Word;
