const human = document.getElementById("human");
const winlose = document.getElementById("winlose");
const computer = document.getElementById("computer");
const playerScoreElement = document.getElementById("playerScore");
const highScoreElement = document.getElementById("highScore");
let playerScore = 0;
let highScore = 0;
let choices = ["Rock", "Paper", "Scissors"];
function startGame(option) {
  // find elements and set them
  // calculate computer move
  // 0 - rock || 1- paper || 2- scissors
  const rng = Math.floor(Math.random() * 3);
  var decision;
  // check what user picked and determine the 'decision'/outcome of the game
  switch (option) {
    case "Rock":
      if (rng == 0) {
        decision = "ties with";
      } else if (rng == 1) {
        decision = "loses to";
      } else {
        decision = "beats";
      }
      break;
    case "Paper":
      if (rng == 0) {
        decision = "beats";
      } else if (rng == 1) {
        decision = "ties with";
      } else {
        decision = "loses to";
      }
      break;
    case "Scissors":
      if (rng == 0) {
        decision = "loses to";
      } else if (rng == 1) {
        decision = "beats";
      } else {
        decision = "ties with";
      }
      break;
    default:
      decision = "ties with";
  }
  // set player and computer choice text components
  human.textContent = option;
  computer.textContent = choices[rng];

  // reset the winlose attr and set the new decision
  winlose.textContent = decision;
  winlose.classList.remove("win");
  winlose.classList.remove("lose");
  winlose.classList.remove("tie");
  if (decision == "beats") {
    winlose.classList.add("win");
    playerScore++;
    if (playerScore > highScore) {
      highScore++;
    }
  } else if (decision == "loses to") {
    winlose.classList.add("lose");
    playerScore = 0;
  } else {
    winlose.classList.add("tie");
  }

  // set score
  playerScoreElement.textContent = `Player: ${playerScore}`;
  highScoreElement.textContent = `High Score: ${highScore}`;
}
