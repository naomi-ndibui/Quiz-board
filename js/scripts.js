var answers = ["Storing numbers,dates or other values", "Accept parameters", "script tag", "Hyper Text Markup Language"];
var pointPerCorrect = 25;


function percentage(score) {
return "Your score is " + parseInt((score / 75) * 100) + "%";
}

$(document).ready(function(){
   $("#questions").submit(function (event) {


      $('#result').text('');
      var score = 0;
      var answerOne = ($("input[type=radio][name=questionOneAnswer]:checked").val());
      var answerTwo = ($("input[type=radio][name=questionTwoAnswer]:checked").val());
      var answerThree = ($("input[type=radio][name=questionThreeAnswer]:checked").val());
      var answerFour = ($("input[type=radio][name=questionFourAnswer]:checked").val());

      if (answerOne === undefined || answerTwo === undefined || answerThree === undefined || answerFour === undefined) {
       $('#questionsIncomplete').text('Please complete the questions before submitting');
       $('#questionsIncomplete').fadeOut(10000);
     } else {
              if (answerOne === answers[0]) {
         score += pointPerCorrect;
       }
              if (answerTwo === answers[1]) {
         score += pointPerCorrect;
       }
              if (answerThree === answers[2]) {
         score += pointPerCorrect;
       }
             if (answerFour === answers[3]) {
         score += pointPerCorrect;
       }


             $("input[type=radio][name=questionOneChoice]:checked").prop('checked', false);
             $("input[type=radio][name=questionTwoChoice]:checked").prop('checked', false);
             $("input[type=radio][name=questionThreeChoice]:checked").prop('checked', false);
             $("input[type=radio][name=questionFourChoice]:checked").prop('checked', false);
             $('#questionsIncomplete').text('');
             $('#result').text(percentage(score));
     }
               event.preventDefault();
      });
     });
