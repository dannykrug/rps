const userScore = 0;
const cpuScore = 0;
const userScore_span = document.getElementById('user-score');
const cpuScore_span = document.getElementById('cpu-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

main();

function getCpuChoice() {
  const choices = ["rock", "paper", "scissors"]
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function game(userChoice) {
  const cpuChoice = getCpuChoice();
  switch (userChoice + cpuChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      console.log("user wins!");
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      console.log("user loses!");
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      console.log("it's a tie!");
      break;
  }
}

function main() {
  rock_div.addEventListener('click', function() {
    game("rock")
  })

  paper_div.addEventListener('click', function() {
    game("paper")
  })

  scissors_div.addEventListener('click', function() {
    game("scissors")
  })
}
