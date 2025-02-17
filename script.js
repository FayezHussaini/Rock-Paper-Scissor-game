const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtn = document.querySelectorAll(".choiceBtn");

let player;
let computer;
let result;

function start() {
  document.getElementById("gameDiv").style.display = "block";
  document.getElementById("playBtn").style.display = "none";
  choiceBtn.forEach((button) =>
    button.addEventListener("click", () => {
      player = button.textContent;
      computerTurn();
      document.getElementById("playerText").innerText = "Player:" + player;
      document.getElementById("computerText").innerText =
        "Computer:" + computer;
      document.getElementById("resultText").innerText =
        "Result:" + checkWinner();
    })
  );
}

function computerTurn() {
  const randNum = Math.floor(Math.random() * 3) + 1;

  switch (randNum) {
    case 1:
      computer = "ROCK";
      break;
    case 2:
      computer = "PAPER";
      break;
    case 3:
      computer = "SCISSOR";
      break;
  }
}

function checkWinner() {
  if (player == computer) {
    return "Draw!";
  } else if (computer == "ROCK") {
    return player == "PAPER" ? "You Win" : "You lose";
  } else if (computer == "PAPER") {
    return player == "SCISSOR" ? "You Win" : "You lose";
  } else if (computer == "SCISSOR") {
    return player == "ROCK" ? "You Win" : "You lose";
  }
}
