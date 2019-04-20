const Word = require('./Word.js');
const inquirer = require('inquirer');
const colors = require('colors/safe');

const wordsArray = ['one', 'second', 'three', 'number four', 'the number is five'];
let usedWordsArray = [];
let newWord = '';
let testWord = '';
let correctRepsonses = 0;
let wrongResponses = 0;
let questionNumber = 1;
let quessesRemaining = 10;

console.log(colors.bold("\n\n**** Answer Three Questions ****"));

// Select a word from the wordsArray
const selectWord = (arr) => {
  // Check questions count 
  if (questionNumber > 3) {
    // Three questions was submitted - tally results;
    console.log('\nALL DONE. HERE IS YOUR FINAL SCORE.\n');
    finalScore();
  } else {
    // Select random word from wordsArray
    let randomNumber = Math.floor(Math.random() * arr.length);
    newWord = arr[randomNumber];
    // Check if word was already used
    if (usedWordsArray.includes(newWord)) {
      // Word was already used - call the selectWord function again
      selectWord(wordsArray);
    } else {
      // Ok to use the word
      // Reset the number of wrong guesses allowed
      quessesRemaining = 10;
      console.log(colors.bold.underline(`\nQuestion Number ${questionNumber}\n\n`));
      // Push the word into the usedWordsArray
      usedWordsArray.push(newWord);
      // Word constructor
      testWord = new Word(newWord);
      // Run Word constructor functions
      testWord.addChars(newWord);
      testWord.checkLetter(" ");
      // Invoke Inquirer - ask user to select a letter
      handleInquirer()
    }
  }
};

// Inquirer
const handleInquirer = () => {
  // Check the number of guesses left
  console.log('guess count in Inquirer', quessesRemaining);
  if (quessesRemaining <= 0) {
    console.log("Message to user - no more guesses remaining");
    // Increase wrongResponses count by one
    wrongResponses += 1;
    // Increase questions count by one
    questionNumber += 1;
    // Select new word;
    selectWord(wordsArray);
  } else {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Guess a letter",
          name: "userLetter",
          validate: function validateUserLetter(name) {
            return name !== '';
          },
          validate: function validateLength(name) {
            return name.length === 1;
          }
        }
      ])
      .then(answers => {
        let userQuess = answers.userLetter;
        // Check user input against word
        if (newWord.includes(userQuess)) {
          console.log(colors.green.bold('\nCORRECT'));
          console.log(colors.bold(`Number of wrong guesses remaining: ${quessesRemaining}\n`))
        } else {
          // decrement the number of remaining guesses
          quessesRemaining--
          console.log('')
          console.log(colors.red.bold('\nINCORRECT'));
          console.log(colors.bold(`Number of wrong guesses remaining: ${quessesRemaining}\n`))
        }
        // Word constructor funcion checkLetter to display letter/underscore 
        // and invoke Letter constructor function checkGuess to flip correctGuess property to "True"
        testWord.checkLetter(userQuess)
        // Invoke Inquirer - ask user to select a letter
        return handleQuestion()
      });
  }
}

const handleQuestion = () => {
  // Array to store True/False value for each letter
  correctGuessArray = [];
  let testArray = testWord.wordArray
  // Loop through word and store True/False value for each letter
  testArray.forEach((obj) => {
    correctGuessArray.push(obj.correctGuess)
  });
  // Check values of correctGuesses Array
  // if array contains a "False" value - keep going
  if (correctGuessArray.includes(false)) {
    // Invoke Inquirer - ask user to select a letter
    handleInquirer()
  } else {
    // If array contains all "True" values - increase question count 
    // and move to the next word by invoking selectWord()
    questionNumber += 1;
    // Increase correctRepsonses count by one
    correctRepsonses += 1;
    // Select a new word
    selectWord(wordsArray);
  };
};

// Tally final score
const finalScore = () => {
  console.log('invoke final score');
  console.log('correctRepsonses count', correctRepsonses)
  console.log('wrongRepsonses count', wrongResponses)
};

// Start application
selectWord(wordsArray)


// let checkWord = new Word();

// console.log(checkWord.addChars(newWord))


// checkWord.checkLetter('e')
// console.log('-----------')
// checkWord.checkLetter('r')
// console.log('-----------')
// checkWord.checkLetter('n')
