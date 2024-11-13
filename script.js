// Variables for the DOM elements
const wordText = document.getElementById("word"); // new word display.
const scoreText = document.getElementById("score"); // scoretext element.
let inputText = document.getElementById("text"); //input element.
let timerText = document.getElementById("time"); //timetext element.
const settingsbtn = document.getElementById("settings-btn"); //settingsbutton.
const settings = document.getElementById("settings"); //settings menu.
const restartScreen = document.getElementById("end-game-container"); // Game over screen.

let score = 0;
let time = 5; //starttime.
let countSpeed = 1000; // speed of the countdown in milliseconds. 
let ishidden = false; // bool if settingsmenu is or is not hidden. 

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

const countdown = setInterval(timer, countSpeed);
addWordToDOM();

function addWordToDOM(){
  newWord = Math.floor(Math.random() * words.length); 
  newWord = words[newWord];
  wordText.textContent = newWord; 
  text.focus(); // makes the input activ after pushing restart button. 
}

//updates the score and adds the extra seconds.
function updateScore(){
  score++;
  scoreText.textContent = score;
  time = time+5;
  timerText.textContent = `${time}s`;
}

//resets the input when a correct word is writen. 
function resetText(){
  inputText.value = "";  
}

function gameOver(){
  clearInterval(countdown);
  text.disabled = true;

  //Gameover screen stuff. 
  restartScreen.style.display = "block";
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

  if (myText == newWord){
    updateScore();
    addWordToDOM();
    resetText();
  }
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

//the countdown timer. 
function timer(){
  time--;
  console.log(time);
  timerText.textContent = `${time}s`;

  //if timer is 0 or less, stop the timer and disable the inputfield. 
  if(time <= 0){
    gameOver();
  }

  else {return;}
}