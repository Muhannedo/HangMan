/*-------------- Constants -------------*/
const wordDisplay = document.querySelector(".word-display");
const keyboardDiv = document.querySelector(".keyboard");

/*---------- Variables (state) ---------*/
let currentWord;

/*----- Cached Element References  -----*/

/*-------------- Functions -------------*/

//getting the random word
const getRandomWord = () => {
  const words = wordList[Math.floor(Math.random() * wordList.length)];

  console.log(words);
  let wordLength = words.toString();
  currentWord = wordLength;

  wordDisplay.innerHTML = wordLength
    .split("")
    .map(() => `<li class="letter"> </li>`)
    .join("");
};

const initGame = (button, clickedLetter) => {
  if (currentWord.includes(clickedLetter)) {
    console.log("letter is exist in the word");
  } else {
    console.log(" letter is not exist in the word ");
  }
};

// looping the keyboard
for (let index = 65; index <= 90; index++) {
  const button = document.createElement("button");
  button.innerText = String.fromCharCode(index);
  keyboardDiv.appendChild(button);
  button.addEventListener("click" , Element => initGame(Element.target, String.fromCharCode(index)));
}

/*----------- Event Listeners ----------*/

getRandomWord();
