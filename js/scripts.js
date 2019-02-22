var answers = ["Storing numbers,dates or other values","Accept parameters","script tag"];
var pointPerCorrect = 33.3;


function percentage(score) {
return "Your score is " + parseInt((score / 66.6) * 100) + "%";
}

$(document).ready(function(){
   $("#questions").submit(function (event) {


      $('#result').text('');
      var score = 0;
      var answerOne = ($("input[type=radio][name=questionOneAnswer]:checked").val());
      var answerTwo = ($("input[type=radio][name=questionTwoAnswer]:checked").val());
      var answerThree = ($("input[type=radio][name=questionThreeAnswer]:checked").val());
