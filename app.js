var options = ["Rock", "Paper", "Scissors"];

var result = document.getElementById("result")
var results_div = document.getElementById("results")

var wins = 0;
var loses = 0;
var ties = 0;

var userScore = document.getElementById("user_score");
var compScore = document.getElementById("comp_score");
var tieScore = document.getElementById("tie_score");

var userChoice;
var compChoice;

var choices = document.getElementsByClassName("choice");

for(var i = 0; i < choices.length; i++) {
  choices[i].addEventListener("click", function() {
    userChoice = this.id;
    compChoice = options[Math.floor(Math.random() * options.length)]
    document.getElementById("comp_choice").innerHTML = "The Computer Picked " + compChoice;
    if (userChoice === "Rock") {
      if (compChoice === "Paper") {
        result.innerHTML = "Paper Beats Rock, You Lose!";
        loses ++;
        compScore.innerHTML = loses;
        results_div.classList.remove('lose_results', 'win_results', 'tie_results');
        results_div.classList.add('lose_results');  
      } 
      else if (compChoice === "Rock") {
        result.innerHTML = "Rock Vs Rock, There Can Be No Victor!";
        ties ++;
        tieScore.innerHTML = ties;
        results_div.classList.remove('lose_results', 'win_results', 'tie_results');
        results_div.classList.add('tie_results'); 
      } 
      else {
        result.innerHTML = "Rock Beats Scissors, You Win!";
        wins ++;
        userScore.innerHTML = wins;
        results_div.classList.remove('lose_results', 'win_results', 'tie_results');
        results_div.classList.add('win_results');
      }
    }
    if (userChoice === "Paper") {
      if (compChoice === "Scissors") {
        result.innerHTML = "Scissors Beats Paper, You Lose!";
        loses ++;
        compScore.innerHTML = loses;
        results_div.classList.remove('lose_results', 'win_results', 'tie_results');
        results_div.classList.add('lose_results'); 
      } 
      else if (compChoice === "Paper") {
        result.innerHTML = "Paper Vs Paper, There Can Be No Victor!";
        ties ++;
        tieScore.innerHTML = ties;
        results_div.classList.remove('lose_results', 'win_results', 'tie_results');
        results_div.classList.add('tie_results');
      } 
      else {
        result.innerHTML = "Paper Beats Rock, You Win!";
        wins ++;
        userScore.innerHTML = wins;
        results_div.classList.remove('lose_results', 'win_results', 'tie_results');
        results_div.classList.add('win_results');
      }
    }
    if (userChoice === "Scissors") {
      if (compChoice === "Rock") {
        result.innerHTML = "Rock Beats Scissors, You Lose!";
        loses ++;
        compScore.innerHTML = loses;
        results_div.classList.remove('lose_results', 'win_results', 'tie_results');
        results_div.classList.add('lose_results'); 
      } 
      else if (compChoice === "Scissors") {
        result.innerHTML = "Scissors Vs Scissors, There Can Be No Victor!";
        ties ++;
        tieScore.innerHTML = ties;
        results_div.classList.remove('lose_results', 'win_results', 'tie_results');
        results_div.classList.add('tie_results');
      } 
      else {
        result.innerHTML = "Scissors Beats Paper, You Win!";
        wins ++;
        userScore.innerHTML = wins;
        results_div.classList.remove('lose_results', 'win_results', 'tie_results');
        results_div.classList.add('win_results');
      }
    }
  }); 
}

// var reset = document.getElementsById("reset");
// reset.addEventListener("click", function() {
//   wins = 0;
//   loses = 0;
//   ties = 0;
//   userScore.innerHTML = wins;
//   compScore.innerHTML = loses;
//   tieScore.innerHTML = ties;
// })