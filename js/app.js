/*-------------- Constants -------------*/
const words = [
  "apple", "banana", "cherry", "grape", "orange", "strawberry", "blueberry", "watermelon", "peach", "apricot",
  "plum", "kiwi", "mango", "pineapple", "lemon", "lime", "coconut", "papaya", "pomegranate", "tangerine",
  "avocado", "blackberry", "cranberry", "grapefruit", "pear", "raspberry", "tomato", "dragonfruit", "fig", "guava",
  "lychee", "nectarine", "passionfruit", "persimmon", "quince", "starfruit", "cantaloupe", "honeydew", "jackfruit",
  "mulberry", "olive", "date", "currant", "gooseberry", "pumpkin", "zucchini", "spinach", "carrot", "broccoli",
  "cauliflower", "celery", "lettuce", "kale", "onion", "garlic", "pepper", "cucumber", "radish", "turnip", "beet",
  "potato", "sweetpotato", "yam", "eggplant", "asparagus", "artichoke", "rhubarb", "parsnip", "squash", "leek",
  "ginger", "turmeric", "wasabi", "horseradish", "brusselsprout", "mushroom", "pea", "corn", "chickpea", "lentil",
  "bean", "soybean", "rice", "barley", "quinoa", "wheat", "oat", "buckwheat", "rye", "millet", "sorghum", "bulgur",
  "amaranth", "spelt", "teff", "chia", "flax", "hemp", "poppy", "sesame", "sunflower", "pumpkinseed", "almond",
  "walnut", "pecan", "hazelnut", "cashew", "pistachio", "macadamia", "brazilnut", "chestnut", "pine", "cacao", "coffee",
  "tea", "clove", "cinnamon", "nutmeg", "allspice", "cardamom", "staranise", "bayleaf", "oregano", "basil", "thyme",
  "rosemary", "parsley", "cilantro", "sage", "tarragon", "dill", "lavender", "marjoram", "mint", "paprika", "peppercorn",
  "salt", "sugar", "honey", "maple", "vanilla", "chocolate", "caramel", "butterscotch", "toffee", "molasses", "marshmallow",
  "nougat", "fudge", "licorice", "gum", "tapioca", "custard", "pudding", "gelatin", "sherbet", "sorbet", "icecream",
  "brownie", "cookie", "muffin", "cake", "pastry", "pie", "tart", "croissant", "biscuit", "donut", "scone", "bagel",
  "toast", "pancake", "waffle", "crepe", "souffle", "omelette", "quiche", "frittata", "sandwich", "wrap", "burger", 
  "taco", "burrito", "pizza", "pasta", "spaghetti", "lasagna", "ravioli", "noodle", "dumpling", "sushi", "sashimi"
];
/*---------- Variables (state) ---------*/
let selectedWord = '';
let guessedLetters = [];  
let guessesLeft = 6;
let displayWords = '';
/*-------------- Functions -------------*/
// start the game function
function startGame() {
  selectedWord = words[Math.floor(Math.random() * words.length)];
  guessedLetters = [];
  guessesLeft = 6;
  for (let index = 0; index < selectedWord.length; index++) {
    displayWords += '_';
    
  }
  document.getElementById('word-display').textContent=displayWords.trim();
  document.getElementById('guesses-left').textContent = guessesLeft;
  document.getElementById('message').textContent = '';
  
  generateKeyboard();
}

// generating the keyboard
function generateKeyboard() {
  const keyboardDiv = document.getElementById('keyboard');
  keyboardDiv.innerHTML = ''; 

  for (let index = 65; index <= 90; index++) {
    const letter = String.fromCharCode(index);
    const button = document.createElement('button');
    button.textContent = letter;
    button.addEventListener('click', () => guessHaldinig(letter));
    keyboardDiv.appendChild(button);
  }
}

// chekc if the letter is inside the word or not
function guessHaldinig(letter) {
  if (guessedLetters.includes(letter)) return;

  guessedLetters.push(letter);
  const buttons = document.querySelectorAll('#keyboard button');
  buttons.forEach(button => {
    if (button.textContent === letter) {
      button.disabled = true;
    }
  });

  if (selectedWord.includes(letter.toLowerCase())) {
    updateWordDisplay();
  } else {
    guessesLeft--;
    document.getElementById('guesses-left').textContent = guessesLeft;
  }

  checkGameStatus();
}

// if the letter inside the word display it 
function updateWordDisplay() {
  let displayWord = '';
  for (const letter of selectedWord) {
    if (guessedLetters.includes(letter.toUpperCase())) {
      displayWord += letter.toUpperCase() + ' ';
    } else {
      displayWord += '_ ';
    }
  }
  document.getElementById('word-display').textContent = displayWord.trim();
}

// win or lose if the user gets the word before 6 gusses wins else lose
function checkGameStatus() {
  const currentWord = document.getElementById('word-display').textContent.replace(/\s/g, '').toLowerCase();
  if (currentWord === selectedWord) {
    document.getElementById('message').textContent = 'You Win!';
    disableKeyboard();
  } else if (guessesLeft <= 0) {
    document.getElementById('message').textContent = `You Lose! The word was ${selectedWord}`;
    disableKeyboard();
  }
}

// handiling the keyboard buttons so the user cannot repeat the same letter
function disableKeyboard() {
  const buttons = document.querySelectorAll('#keyboard button');
  buttons.forEach(button => {
    button.disabled = true;
  });
}
/*----------- Event Listeners ----------*/
document.getElementById('reset-button').addEventListener('click', startGame);
startGame();