// Class constructor
class Letter {
  constructor(char) {
    this.char = char;
    this.correctGuess = false;
  }
  toString() {
    return this.correctGuess ? this.char : '_';
  };
  checkGuess(userGuess) {
    if (userGuess === this.char.toLowerCase()) {
      this.correctGuess = true;
    }
  };
};

module.exports = Letter;
