var Journal = require("./../js/journal.js").journalModule;

$(document).ready(function () {
  $("#journal-form").submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newJournal = new Journal (title, body);
    $('.output').prepend("<h2>" + newJournal.title + "</h2>" + "<p>" + newJournal.body + "</p>" + "<h3>" + newJournal.vowels + "</h3>");


  });
});
