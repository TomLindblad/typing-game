// Variables for the DOM elements
let score = 0;
let time = 10; //starttime.
let countSpeed = 1000; // speed of the countdown in milliseconds. 
const wordText = document.getElementById("word"); // new word display.
const scoreText = document.getElementById("score"); // scoretext element.
let inputText = document.getElementById("text"); //input element.
let timerText = document.getElementById("time"); //timetext element.
const settingsbtn = document.getElementById("settings-btn"); //settingsbutton.
const settings = document.getElementById("settings"); //settings menu.
let ishidden = false;

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
}

//updates the score and the extra seconds.
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

function hideSettings(){
  settings.classList.toggle(".settings.hide");
}


inputText.addEventListener("input", function( e) {
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
    clearInterval(countdown);
    text.disabled = true;
    document.getElementById("end-game-container").style.display = "block";
  }

  else {return;}
}