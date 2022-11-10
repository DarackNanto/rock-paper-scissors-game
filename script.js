//Function generates random computer choice between Rock, paper and scissor
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  let i = Math.floor(Math.random() * 3);
  let choice = choices[i];
  return choice;
}

//Function compares player vs computer input. Then return string result.
let playerScore = 0;
let computerScore = 0;
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie! Try again!";
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    computerScore += 1;
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    playerScore += 1;
    return "You Win! Rock beats Scissors";
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    computerScore += 1;
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    playerScore += 1;
    return "You Win! Paper beats Rock";
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    playerScore += 1;
    return "You Win! Scissors beats Paper";
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    computerScore += 1;
    return "You Lose! Rock beats Scissors";
  } else {
    return "Error in selection. Try Again!";
  }
}

function playerChoice() {
  //Prompt to get player input choice
  const playerInputChoice = prompt("Enter Rock, Paper or Scissors", "rock");
  //Makes player input case insensitive. Capitalize first letter and lowercase remaining letters
  const choice =
    playerInputChoice[0].toUpperCase() +
    playerInputChoice.slice(1).toLowerCase();
  return choice;
}

//Plays 5 rounds of stop
function game() {
  for (let i = 0; i < 5; i++) {
    //Assign random player choice to playerSelection variable
    const playerSelection = playerChoice();
    //Assign random computer choice to ComputerSelection variable
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log(playerScore, computerScore);
  }
  //Report winner or loser after 5 round base on scores.
  if (playerScore > computerScore) {
    alert("Congratulation! You won!");
  } else if (playerScore < computerScore) {
    alert("The Computer Won. Try again!");
  } else {
    alert("It was a tie!");
  }
}
game();
