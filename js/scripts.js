var answers = ["1", "c", "y", "8"];
var pointPerCorrect = 25;


function percentage(score) {
  return parseInt((score / 100) * 100) + "%";
}

function goBack(){
location.reload();
}

$(document).ready(function() {
  $('#results-container').hide();
  $("#Questions").submit(function(event) {
    $('#result').text('');
    var score = 0;
    var answer1 = ($("input[name=answer1]:checked").val());
    var answer2 = ($("input[name=answer2]:checked").val());
    var answer3 = ($("input[name=answer3]:checked").val());
    var answer4 = ($("input[name=answer4]:checked").val());

    if (answer1 === undefined || answer2 === undefined || answer3 === undefined || answer4 === undefined) {
      $('#questionsIncomplete').text('Please complete the questions before submitting');
      $('#questionsIncomplete').fadeOut(10000);
    } else {
      if (answer1 === answers[0]) {
        score += pointPerCorrect;
      }
      if (answer2 === answers[1]) {
        score += pointPerCorrect;
      }
      if (answer3 === answers[2]) {
        score += pointPerCorrect;
      }
      if (answer4 === answers[3]) {
        score += pointPerCorrect;
      }
      $('.well').hide();
      $('#footer').hide();
      $('#results-container').fadeIn(500);
      $('#results').html('<p><strong>Your score is:' + percentage(score) + '</strong></p>').show();
    }
    event.preventDefault();
  });
});
