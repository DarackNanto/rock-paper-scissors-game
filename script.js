//Function generates random computer choice between Rock, paper and scissor
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  let i = Math.floor(Math.random() * 3);
  let choice = choices[i];
  return choice;
}

//Function compares player vs computer input. Then return string result.
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie! Try again!";
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return "You Win! Rock beats Scissors";
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return "You Win! Paper beats Rock";
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return "You Win! Scissors beats Paper";
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    return "You Lose! Rock beats Scissors";
  } else {
    return "Error in selection. Try Again!";
  }
}

//Prompt to get player input choice
const playerInputChoice = prompt("Enter Rock, Paper or Scissors", "rock");

//Makes player input case insensitive. Capitalize first letter and lowercase remaining letters
const playerSelection =
  playerInputChoice[0].toUpperCase() + playerInputChoice.slice(1).toLowerCase();
console.log(playerSelection);

//Assign random computer choice to ComputerSelection variable
const computerSelection = getComputerChoice();
console.log(computerSelection);

console.log(playRound(playerSelection, computerSelection));
