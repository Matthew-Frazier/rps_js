var options = ["rock", "paper", "scissors"];

var wins = []
var loses = []

var userChoice;
var compChoice;

var choices = document.getElementsByClassName("choice");
console.log(choices);
for(var i = 0; i < choices.length; i++) {
  choices[i].addEventListener("click", function() {
    userChoice = this.id;
    // get the comp choice
    // display choices
    // figure out winner
  });  
}