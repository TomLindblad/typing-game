// Variables for the DOM elements
const wordText = document.getElementById("word"); // new word display.
const scoreText = document.getElementById("score"); // scoretext element.
let inputText = document.getElementById("text"); //input element.
let timerText = document.getElementById("time"); //timetext element.
const settingsbtn = document.getElementById("settings-btn"); //settingsbutton.
const settings = document.getElementById("settings"); //settings menu.
const restartScreen = document.getElementById("end-game-container"); // Game over screen.
const difficulty = document.getElementById("difficulty"); //difficulty input.

let score = 0; //current score
let scoreGain = 1; //score gained when right word is written. 
let time = 10; //starttime.
let timeGain = 5; // extra time gained when right word is written.
let countSpeed = 1000; // speed of the countdown in milliseconds. 
let ishidden = false; // bool if settingsmenu is or is not hidden. 
let countdown;
let newWord = "start"; //first word for starting the game. 
let currentDifficulty; 

// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];

wordText.textContent = newWord;
text.focus();  //focus on the inputfield after pressing the restart-button/reloading page. 

function startGame(){
  countdown = setInterval(timer, countSpeed);
  resetText();
  addWordToDOM();
}

//adds a new word when correct spelling.
function addWordToDOM(){
  newWord = Math.floor(Math.random() * words.length); 
  newWord = words[newWord];
  wordText.textContent = newWord; 
  wordText.style.color = "#ffde17"; //changes the color back yellow if you play on medium difficulty. 
}

//updates the score and adds the extra seconds.
function updateScore(){
  score = score + scoreGain;
  scoreText.textContent = score;
  time = time + timeGain;
  timerText.textContent = `${time}s`;
}

//resets the input when a correct word is writen. 
function resetText(){
  inputText.value = "";  
}

function changeDifficulty(value){
  switch (value) {
    case "easy": // ON EASY = EVERYTING BASIC
      //countSpeed = 1000;
      currentDifficulty = "easy" 
      wordText.style.transform = "rotateY(0deg)"
      inputText.style.color = "black";
      scoreGain = 1;
      timeGain = 5;
      break;
    case "medium": // ON NORMAL = NEW WORD DISAPPERS WHEN YOU START TO WRITE. 
      //countSpeed = 600;
      currentDifficulty = "medium";
      wordText.style.transform = "rotateY(0deg)"
      inputText.style.color = "black";
      scoreGain = 1;
      timeGain = 3;
      break;
    case "hard": // ON HARD = NEW WORD IS MIRRORED AND THE INPUT IS TRANSPARENT. 
      //countSpeed = 300;
      currentDifficulty = "hard"
      wordText.style.transform = "rotateY(180deg)"
      inputText.style.color = "white";
      scoreGain = 1;
      timeGain = 3;
      break;
}
  //clearInterval(countdown);
  //countdown = setInterval(timer, countSpeed);
};

function gameOver(){
  clearInterval(countdown);
  text.disabled = true;

  //Gameover screen create stuff. 
  restartScreen.style.display = "flex";
  let btn = document.createElement("button");
  btn.innerHTML = "Restart";
  let h2 = document.createElement("h2");
  h2.textContent = "GAMEOVER";
  let h1 = document.createElement("h1");
  h1.textContent = `Your score: ${score}`;

  restartScreen.appendChild(h2);
  restartScreen.appendChild(h1);
  restartScreen.appendChild(btn);

  btn.addEventListener("click", function(){
    location.reload();;
  });
}

// Eventlistener checking if the input = the word
inputText.addEventListener("input", function(e) {
  let myText = e.target.value;

  //checking if current difficulty is medium. If medium only shows the new word if the inputfield is empty. 
  if(currentDifficulty == "medium" && inputText.value !== ""){
    wordText.style.color = "#6026ff";
  }

  else if (currentDifficulty == "medium"){
    wordText.style.color = "#ffde17";
  }

  if (myText == newWord){

    if (newWord == "start"){
    startGame();}

    else{
    updateScore();
    addWordToDOM();
    resetText();
    }}
});

//hides the settingsbar.
settingsbtn.addEventListener("click", function() {
  ishidden = !ishidden;
  
  if (ishidden){
    settings.style.transform = "translateY(-100%)";
  }

  else{
    settings.style.transform = "translateY(0%)";
  }
});

  difficulty.addEventListener("change", function(e){
    let value = e.target.value;
    changeDifficulty(value);
});

//the countdown timer. 
function timer(){
  time--;
  timerText.textContent = `${time}s`;

  //if timer is 0 or less, stop the timer and disable the inputfield. 
  if(time <= 0){
    gameOver();
  }

  else {return;}
}