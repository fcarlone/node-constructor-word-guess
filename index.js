const Word = require('./Word.js');
const inquirer = require('inquirer');

const wordsArray = ['one', 'second', 'three', 'number four'];
let newWord = '';

const selectWord = (arr) => {
  let randomNumber = Math.floor(Math.random() * arr.length);
  console.log(randomNumber)
  newWord = arr[randomNumber];
};

// TEST Word
selectWord(wordsArray)
console.log('Word to guess:', newWord)
let testWord = new Word(newWord);
testWord.addChars(newWord)
console.log(testWord)



// Inquirer
inquirer
  .prompt([
    {
      type: "input",
      message: "Guess a letter",
      name: "userLetter"
    }
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
    let userQuess = answers.userLetter;
    console.log('Letter Guessed', userQuess)
    testWord.checkLetter(userQuess)
    console.log(testWord.wordArray)

  });






// let checkWord = new Word();

// console.log(checkWord.addChars(newWord))



// checkWord.checkLetter('e')
// console.log('-----------')
// checkWord.checkLetter('r')
// console.log('-----------')
// checkWord.checkLetter('n')
