var timeWork = 25;
var timeRest = 5;
var time = 0;
var work = true;
var started = false;

$(document).ready(function() {
  
  // show chosen times for break and work
  function displaySetTime(id, input) {
    var inputHtml = "<p"> + input + "</p>";
    var idString = "#".concat(id);
    $(idString).html(inputHtml);
  }
  
  // actual time for work or rest
  function displayTimer(id, input) {
    var seconds = input % 60;
    var minutes = (input - seconds) / 60;
    if (seconds >= 0 && seconds <= 9) {
      seconds = "0".concat(seconds);
    }
    var inputHtml = "<p>" + minutes + ":" + seconds + "</p>";
    var idString = "#".concat(idString);
    $(idString).html(inputHtml);
  }
});