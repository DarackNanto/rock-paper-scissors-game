//Function generates random computer choice between Rock, paper and scissors
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  let i = Math.floor(Math.random() * 3);
  let choice = choices[i];
  return choice;
}

//Function compares player vs computer input, compares value case sensitive. Then return string result.
//Increment winner score by 1. Loser current score remain the same.
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

//Event listener retrieve player choice base on button clicked or choice
// we use the .forEach method to iterate through each button
// we attach an event listener to each button, and trigger a playRound func
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    //Call  func getComputerChoice and assign choice to ComputerSelection variable
    let computerSelection = getComputerChoice();
    //Player selection is assigned choice user clicked
    let playerSelection = button.id;

    //Empty final result DOM
    const final = document.querySelector("#final-score");
    final.textContent = "";

    //Adding HTML content to the DOM. Winner or loose statement base on player selection per round
    const result = document.querySelector("#result");
    const player = document.querySelector("#player");
    const computer = document.querySelector("#computer");

    //Call playRound func and assign plyer and computer choice and return result
    result.textContent = playRound(playerSelection, computerSelection);
    //Update score per round
    player.textContent = playerScore;
    computer.textContent = computerScore;

    //Empty player selection after each round.
    playerSelection = "";
    computerSelection = "";

    //Plays until a player score reaches 5 points total, and print the overall winner through DOM.
    //Reset score to 0
    if (computerScore == 5 || playerScore == 5) {
      if (playerScore > computerScore) {
        computerScore = 0;
        playerScore = 0;
        final.textContent = "Congratulation! You won!";
      } else if (playerScore < computerScore) {
        computerScore = 0;
        playerScore = 0;
        final.textContent = "The Computer Won. Try again!";
      }
    }
  });
});
