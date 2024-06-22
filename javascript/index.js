let score = 20;
let highscores = 0;

let randomNumber = 1 + Math.floor(Math.random() * 20);
document.querySelector(".check").addEventListener("click", function () {
  if (score > 1) {
    const guessedNumber = Number(
      document.querySelector(".guessed-number").value
    );
    if (!guessedNumber) {
      document.querySelector(".message").textContent =
        "❌ No number is written!";
      return -1;
    }
    if (guessedNumber > 20 || guessedNumber < 0) {
      document.querySelector(".message").textContent =
        "❌ Only enter numbers between 1 to 20";
      return -1;
    }
    if (guessedNumber < randomNumber) {
      document.querySelector(".message").textContent = "You'r guess is low";
      score--;
      document.querySelector(".score").textContent = score;
    } else if (guessedNumber > randomNumber) {
      document.querySelector(".message").textContent = "You'r guess is high";
      score--;
      document.querySelector(".score").textContent = score;
    } else if (guessedNumber === randomNumber) {
      document.querySelector(".main-panel").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".number").textContent = randomNumber;
      document.querySelector(".message").textContent =
        "🎉 You've got it right!";
      // document.querySelector(".score").textContent = score;
      if (score > highscores) {
        highscores = score;
        document.querySelector(".highscore").textContent = highscores;
      }
    }
  } else {
    document.querySelector(".message").textContent = "😥 You loose!";
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
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
});
