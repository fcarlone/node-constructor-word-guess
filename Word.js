// Requre Letter.js
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
    // console.log(userGuess)
    // console.log(this.wordArray.this.checkGuess(userGuess))
    this.wordArray.forEach((char) => {

      char.checkGuess(userGuess)
      char.toString()
    })
    // checkGuess(userGuess)

    // console.log(this.wordArray)

  }
};

module.exports = Word

// let testWord = new Word('test');
// testWord.addChars('test')

// console.log(testWord.wordArray)
// testWord.checkLetter('e')
// testWord.checkLetter('t')
// console.log(testWord.wordArray)

// console.log(testWord)

