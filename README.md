## hangMan
<h3>The Hang Man Game challenges players to guess a randomly selected word from an array within six attempts. Players see all letters of the alphabet displayed on-screen and can click on a letter to make a guess. If the guessed letter is in the word, it is revealed in the current state of the word, and the letter is disabled from further guesses. If the letter is incorrect, it is recorded as a wrong guess, and the number of remaining attempts decreases by one. The game ends when players either reveal all the letters in the word, winning the game, or exhaust their six attempts, resulting in a loss. Additionally, players can view the number of remaining attempts and a list of incorrect guesses throughout the game. </h3>


<h1>user stories</h1>
<ul><strong>
<li>As a user, I want to see a landing page when I arrive at the website to know I'm in the right place.</li>
<li>As a user I should be able to click on the letter I want to chose </li>
<li>As a user I want to be able to see if the letter is correct or wrong </li>
<li>As a user I don’t want to click the letter twice either its correct or wrong </li>
<li>As a user I want to see how many chances I still have for the chosen word </li>
<li>As a user I want to see the correct letter in their correct place </li>
<li>As a user I want to see clear message for winning or losing situation </li>
<li>As a user I want to play again either I win or lose </li>
</strong>
</ul>
<h1>Pseudocode </h1>
<h3>init()</h3>
<li>random word will be picked </li>
<h3>startGame()</h3>
<li>show the length of the choosing letter  </li>
<li>build the keyboard buttons</li>
<h3>Handle Guess</h3>
<li>check id the clicked button "letter" is inside the word or not, add it to guessedLetters</li>
<li>disable the button</li>
<li>if letter inside the word update the display else reduce chances</li>
<h3>check status</h3>
<li>if word guessed correctly show win message </li>
<li>if word guessed wrong or gusses left = 0 show lose message and show correct word </li>
<h3>restart game</h3>
<li>restart the game and reset the gusses and the word </li>
<h3>Start game</h3>







<h1>Markup</h1>
<p>This is the first skitch of the game or how should it be </p>
<img src="/planning/markup.png">

<p>this is the actual game </p>
<img src= "/planning/FinalLook.png">






<h1>Other Resources</h1>
<p>with the help of AI i generated around 200 word  </p>
