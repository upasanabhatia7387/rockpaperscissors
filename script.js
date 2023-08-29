let winMsg = "You Won";
let loseMsg = "You Lost";
let tieMsg = "The Game was a Tie";

let moveList = ["Rock", "Paper", "Scissors"];

let statusDisplay = document.querySelector("#status-head");
let moveDisplays = document.querySelectorAll(".move-display h2");
let buttons = document.querySelectorAll("button");

let winSound = new Audio("victory.mp3");
let loseSound = new Audio("failure.mp3");
let tieSound = new Audio("tie.mp3");

function calcResult(move1, move2) {
  var result = move1 - move2;

  if (result == 1 || result + 3 == 1) {
    return winMsg;
  } else if (result == 2 || result + 3 == 2) {
    return loseMsg;
  } else {
    return tieMsg;
  }
}

function randomMove() {
  return Math.floor(Math.random() * 3);
}

function startGame() {
  statusDisplay.textContent = "Choose!";
  buttons.forEach((button, index) => {
    button.textContent = moveList[index];
    button.style.display = "inline-block";

    buttons[index].removeEventListener("click", startGame);
    buttons[index].addEventListener("click", endGame);
  });
  moveDisplays.forEach((moveDisplay) => (moveDisplay.style.display = "none"));
}

function endGame(event) {
  let playerMove = moveList.indexOf(event.target.textContent);
  let computerMove = randomMove();

  let result = calcResult(playerMove, computerMove);
  statusDisplay.textContent = result;

  // Pause any currently playing sound before playing a new one
  winSound.pause();
  loseSound.pause();
  tieSound.pause();

  if (result === winMsg) {
    winSound.currentTime = 0; // Reset sound to the beginning
    winSound.play();
    // Add winning effects here
  } else if (result === loseMsg) {
    loseSound.currentTime = 0; // Reset sound to the beginning
    loseSound.play();
    // Add losing effects here
  } else {
    tieSound.currentTime = 0; // Reset sound to the beginning
    tieSound.play();
    // Add tie effects here
  }

  moveDisplays.forEach(
    (moveDisplay) => (moveDisplay.style.display = "inline-block")
  );
  moveDisplays[0].textContent = `You played ${moveList[playerMove]}`;
  moveDisplays[1].textContent = `Computer played ${moveList[computerMove]}`;

  buttons.forEach((button, index) => {
    if (index == 1) {
      button.textContent = "Play Again";
      button.removeEventListener("click", endGame);
      button.addEventListener("click", () => {
        startGame();
        winSound.pause(); // Stop sound on play again
        loseSound.pause();
        tieSound.pause();
      });
    } else {
      button.style.display = "none";
    }
  });
}

startGame();



// let winMsg = "You Won";
// let loseMsg = "You Lost";
// let tieMsg = "The Game was a Tie";

// let moveList = ["Rock", "Paper", "Scissors"];

// let statusDisplay = document.querySelector("#status-head");
// let moveDisplays = document.querySelectorAll(".move-display h2");
// let buttons = document.querySelectorAll("button");

// // New sound effects
// let winSound = new Audio("victory.mp3");
// let loseSound = new Audio("failure.mp3");
// let tieSound = new Audio("tie.mp3");


// /**
//  * Computes result of the game. returns victory message if move 1 wins.
//  * @param  {Number}   move1  move 1
//  * @param  {Number}   move2  move 2
//  * @return {String}   result result of the game
//  */

// function calcResult(move1, move2) {
//   var result = move1 - move2;

//   if (result == 1 || result + 3 == 1) {
//     return winMsg;
//   } else if (result == 2 || result + 3 == 2) {
//     return loseMsg;
//   } else {
//     return tieMsg;
//   }
// }

// /**
//  * @return {Number}   random number between 0 and 2
//  */

// function randomMove() {
//   return Math.floor(Math.random() * 3);
// }

// /**
//  * Displays start state of game
//  */

// function startGame() {
//   statusDisplay.textContent = "Choose!";
//   buttons.forEach((button, index) => {
//     button.textContent = moveList[index];
//     button.style.display = "inline-block";

//     buttons[index].removeEventListener("click", startGame);
//     buttons[index].addEventListener("click", endGame);
//   });
//   moveDisplays.forEach((moveDisplay) => (moveDisplay.style.display = "none"));
// }

// /**
//  * Displays end state of game
//  * @param {Event} event event containing information of users input.
//  */

// function endGame(event) {
//   let playerMove = moveList.indexOf(event.target.textContent);
//   let computerMove = randomMove();

//   statusDisplay.textContent = calcResult(playerMove, computerMove);
//   moveDisplays.forEach(
//     (moveDisplay) => (moveDisplay.style.display = "inline-block")
//   );
//   moveDisplays[0].textContent = `You played ${moveList[playerMove]}`;
//   moveDisplays[1].textContent = `Computer played ${moveList[computerMove]}`;

//   buttons.forEach((button, index) => {
//     if (index == 1) {
//       button.textContent = "Play Again";
//       button.removeEventListener("click", endGame);
//       button.addEventListener("click", startGame);
//     } else {
//       button.style.display = "none";
//     }
//   });
// }

// startGame();