function Journal(title, body, vowels, constanants) {
  this.title = title;
  this.body = body;
  this.vowels = 0;
  this.constanants = 0;
}

Journal.prototype.numOfVowels = function (body) {
  var letters = body.replace(/\s+/g, '').split("");
  for (i=0; i<letters.length; i++) {
    if (letters[i] === "a" || letters[i] === "e" || letters[i] === "i" || letters[i] === "o" || letters[i] === "u") {
      this.vowels ++;
    } else {
      this.constanants ++;
    }
  }
  return this.vowels;

};
exports.journalModule = Journal;
