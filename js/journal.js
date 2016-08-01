function Journal(title, body, vowels) {
  this.title = title;
  this.body = body;
  this.vowels = "";
}

Journal.vowels = function Vowels (body) {
  var letters = (body.split("")).toLowerCase();
  var vowels = 0;

  for (var i=0; i>=letter.length; i++) {
    if (letters[i] === "a" || letters[i] === "e" || letters[i] === "i" || letters[i] === "o" || letters[i] === "u") {
      vowels ++;
    }
  }
  console.log(vowels);
};

exports.journalModule = Journal;
