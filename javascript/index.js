let score = 20;
let highscores = 0;
const displayMessage = function (param) {
  document.querySelector(".message").textContent = param;
};

let randomNumber = 1 + Math.floor(Math.random() * 20);
document.querySelector(".check").addEventListener("click", function () {
  if (score > 1) {
    const guessedNumber = Number(
      document.querySelector(".guessed-number").value
    );
    //////////////////////////////////// there is no input
    if (!guessedNumber) {
      displayMessage("❌ No number is written!");
      return -1;
    }
    if (guessedNumber > 20 || guessedNumber < 1) {
      displayMessage("❌ Only enter numbers between 1 to 20");
      return -1;
    }
    /////////////////////////////////////////
    if (guessedNumber != randomNumber) {
      displayMessage(
        guessedNumber < randomNumber
          ? "You'r guess is low"
          : "You'r guess is high"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else if (guessedNumber === randomNumber) {
      document.querySelector(".main-panel").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".number").textContent = randomNumber;
      displayMessage("🎉 You've got it right!");
      if (score > highscores) {
        highscores = score;
        document.querySelector(".highscore").textContent = highscores;
      }
    }
  } else {
    displayMessage("😥 You loose!");
    document.querySelector(".score").textContent = 0;
  }
});

///////////////////// Again btn
document.querySelector(".again").addEventListener("click", function () {
  randomNumber = 1 + Math.floor(Math.random() * 20);
  score = 20;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".main-panel").style.backgroundColor = "#222";
  document.querySelector(".guessed-number").value = "";
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
});
