const Word = require('./Word.js');
const inquirer = require('inquirer');

const wordsArray = ['one', 'second', 'three', 'number four', 'the number is five'];
let newWord = '';
let testWord = '';
let questionNumber = 1;
let quessesRemaining = 10;

console.log("Answer Three Questions")


const selectWord = (arr) => {
  if (questionNumber > 3) {
    console.log('ALL DONE. SHOW SCORE')
  } else {
    quessesRemaining = 10;
    let randomNumber = Math.floor(Math.random() * arr.length);
    // console.log(randomNumber)
    console.log(`Question Number ${questionNumber}`)
    newWord = arr[randomNumber];
    testWord = new Word(newWord);
    // console.log('Word to guess:', newWord)


    testWord.addChars(newWord)
    testWord.checkLetter(" ")
    // console.log(testWord)
    console.log('Invoke handleInquirer function');

    handleInquirer()
  }
};

const handleQuestion = () => {
  console.log('handleQuestion function')
  correctGuessArray = [];
  let testArray = testWord.wordArray
  // console.log('testarray', testArray)
  testArray.forEach((obj) => {
    correctGuessArray.push(obj.correctGuess)
  });
  console.log(correctGuessArray)
  if (correctGuessArray.includes(false)) {
    console.log('run inquirer again')
    handleInquirer()
  } else {
    console.log('all true... do something');
    questionNumber += 1;
    // console.log('Question:', questionNumber)
    console.log('Select new word')
    selectWord(wordsArray);
  }
};


// Inquirer
const handleInquirer = () => {
  console.log(`Number of wrong guesses remaining: ${quessesRemaining}`)
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
      // Use user feedback for... whatever!!
      let userQuess = answers.userLetter;
      console.log('Letter Guessed', userQuess)
      console.log('NewWord', newWord)
      if (newWord.includes(userQuess)) {
        console.log('CORRECT')
      } else {
        quessesRemaining--
        console.log('INCORRECT')
      }

      testWord.checkLetter(userQuess)


      // console.log(testWord.wordArray)
      // console.log('Check response')
      return handleQuestion()
    });

}


// TEST Word
selectWord(wordsArray)






// let checkWord = new Word();

// console.log(checkWord.addChars(newWord))



// checkWord.checkLetter('e')
// console.log('-----------')
// checkWord.checkLetter('r')
// console.log('-----------')
// checkWord.checkLetter('n')
