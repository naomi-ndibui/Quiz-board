var answers = ["Storing numbers,dates or other values", "Accept parameters", "script tag", "Hyper Text Markup Language"];
var pointPerCorrect = 25;


function percentage(score) {
  return "Your score is " + parseInt((score / 100) * 100) + "%";
}

$(document).ready(function() {
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
    }
    $('.well').hide();
$('#footer').hide();
$('#results').html('<p><strong>Your score is:</strong></p>').show();
    event.preventDefault();
  });
});
