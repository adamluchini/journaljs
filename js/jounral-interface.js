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
