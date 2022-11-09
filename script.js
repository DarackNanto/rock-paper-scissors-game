function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  let i = Math.floor(Math.random() * 3);
  let choice = choices[i];
  return choice;
}

console.log(getComputerChoice());
