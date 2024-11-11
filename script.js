// Variables for the DOM elements
let score = 0;



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
  console.log(newWord);
}

function updateScore(){
  score++;
  document.getElementById("score").textContent = score;
}