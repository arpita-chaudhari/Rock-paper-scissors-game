let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  //rock,paper,scissors math.random Returns a pseudorandom number between 0 and 1.
  //Math.random()*3 in console
  //Math.floor erase decimal values
  //so type Math.floor(Math.random()*3) to check in console window
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};
const drawGame = () => {
  //   console.log("Game was Draw");
  msg.innerText = "It was a draw!";
  msg.style.backgroundColor = "rgb(13, 13, 54)";
};
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    //console.log("You won!");
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `Yay!You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    //console.log("You lose");
    msg.innerText = `Oh no!You lose. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("user choice=", userChoice);
  //generate computer choice
  const compChoice = genCompChoice();
  console.log("Computer choice=", compChoice);

  if (userChoice === compChoice) {
    //draw game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors,paper
      userWin = compChoice === "paper" ? false : true; //user loses
    } else if (userChoice === "paper") {
      //rock,scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  // console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("Choice was clicked",userChoice);
    playGame(userChoice);
  });
});
