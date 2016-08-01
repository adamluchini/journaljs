(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Journal(title, body, vowels, constanants) {
  this.title = title;
  this.body = body;
  this.vowels = 0;
  this.constanants = 0;
}

Journal.prototype.numOfVowels = function (body) {
  body = body.replace(/\s/g, "");
  var letters = body.split("");
  console.log(letters);
  for (i=0; i<=letters.length; i++) {
    if (letters[i] === "a" || letters[i] === "e" || letters[i] === "i" || letters[i] === "o" || letters[i] === "u") {
      this.vowels ++;
    } else {
      this.constanants ++;
    }
  }
  return this.vowels;

};
exports.journalModule = Journal;

},{}],2:[function(require,module,exports){
var Journal = require("./../js/journal.js").journalModule;

$(document).ready(function () {
  $("#journal-form").submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newJournal = new Journal (title, body);
    var vowels = newJournal.numOfVowels(body);
    $('.output').prepend("<h2>" + newJournal.title + "</h2>" + "<p>" + newJournal.body + "</p>" + "<h3>" + "Vowels: " +  vowels + "</h3>" + "<h3>" + "Constanants: " + newJournal.constanants + "</h3>" );

  });
});

},{"./../js/journal.js":1}]},{},[2]);
