let userScore = 0;
let cpuScore = 0;
const userScore_span = document.getElementById('user-score');
const cpuScore_span = document.getElementById('cpu-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result > p');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

main();

function getCpuChoice() {
  const choices = ["Rock", "Paper", "Scissors"]
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win(user, cpu) {
  userScore++;
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
  result_div.innerHTML = `${user} beats ${cpu}. You Win!`
}

function lose(user, cpu) {
  cpuScore++
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
  result_div.innerHTML = `${cpu} beats ${user}. You Lose!`
}

function tie(user, cpu) {
  result_div.innerHTML = `${user} ties ${cpu}. It's a Draw!`
}

function game(userChoice) {
  const cpuChoice = getCpuChoice();
  switch (userChoice + cpuChoice) {
    case "RockScissors":
    case "PaperRock":
    case "ScissorsPaper":
      win(userChoice, cpuChoice);
      break;
    case "RockPaper":
    case "PaperScissors":
    case "ScissorsRock":
      lose(userChoice, cpuChoice);
      break;
    case "RockRock":
    case "PaperPaper":
    case "ScissorsScissors":
      tie(userChoice, cpuChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener('click', function() {
    game("Rock")
  })

  paper_div.addEventListener('click', function() {
    game("Paper")
  })

  scissors_div.addEventListener('click', function() {
    game("Scissors")
  })
}
