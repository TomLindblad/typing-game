// Variables for the DOM elements
let score = 0;
const wordText = document.getElementById("word");
const scoreText = document.getElementById("score");
let inputText = document.getElementById("text")




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

addWordToDOM();

function addWordToDOM(){
  newWord = Math.floor(Math.random() * words.length); 
  newWord = words[newWord];
  wordText.textContent = newWord; 
}

function updateScore(){
  score++;
  scoreText.textContent = score;
}

function resetText(){
  inputText.value = "";  
}

inputText.addEventListener("input", function( e) {
  let myText = e.target.value;

  if (myText == newWord){
    updateScore();
    addWordToDOM();
    resetText();
  }

});