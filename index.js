
var readlineSync = require("readline-sync");

var score = 0;
// array of objects
var questions = [{
  question: "Who owns MARVEL?  ",
  answer: "Disney"
}, {
  question: "Thor is son of? ",
  answer: "Odin"
},
{
  question: "How many Infinity Stones are there? ",
  answer: "six"
},
{
  question: "Where is captain america from? ",
  answer: "Brooklyn"
},
{
  question: "Director of SHIELD? ",
  answer: "Nick Fury"
},
{
  question: "Which movie made MARVEL popular? ",
  answer: "Ironman"
},
{
  question: "Black Panther is from? ",
  answer: "Wakanda"
},
{
  question: "Hawkeye has how many children? ",
  answer: "three"
},
{
  question: "Who did Captain America give his shield to in Endgame? ",
  answer: "Sam"
},
{
  question: "StanLee made his final cameo in which movie? ",
  answer: "Endgame"
},


];

function welcome() {
  var userName = readlineSync.question("What's your name? ");

  console.log("Welcome! " + userName + ", Are you a real MARVEL fan?");
  console.log("-------------------------------------------------")
  console.log("This is a quiz related to MARVEL, check if you can answer them all correctly or not.")
  console.log("-------------------------------------------------")
  console.log("If a question has integer as an answer, write it in character, don't write the integer value.")

  console.log("-------------------------------------------------")
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;

  } else {
    console.log("wrong!");
    score = score - 1;
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}
welcome();
game();

console.log("Your final score is: ", score)
console.log("THANKYOU FOR PLAYING!")
