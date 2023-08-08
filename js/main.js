// Limit and number to guess
var maximum = 50;
var numberToGuess;
var result;
var arrowUp;
var arrowDown;
var input;

function start(max) {
  maximum = max;
  numberToGuess = Math.floor(Math.random() * (maximum+1));
  console.log(numberToGuess)

  var label = document.querySelector('#label_number_user');
  label.innerText = `Votre nombre (0-${maximum}):`;

  input = document.querySelector('#number_user');
  input.max = maximum;

  // Element to display or not according to events
  result = document.querySelector('#result');
  arrowUp = document.querySelector('#arrow_up');
  arrowDown = document.querySelector('#arrow_down');
}


function verification() {
  // Manages input without selection of the game range
  if (!numberToGuess) {
    prompt("Vous devez d'abord sélectionner un des choix à gauche.");
    return null;
  }

  let numberPlayer = input.value;
  console.log(numberPlayer, numberToGuess);

  // Handles out-of-bounds values 
  if (numberPlayer > maximum) {
    numberPlayer = maximum;
    input.value = maximum;
  } else if (numberPlayer < 0) {
    numberPlayer = 0;
    input.value = 0;
  }

  // Check if the user's number is or is not the number to guess
  if (numberPlayer == numberToGuess) {
    console.log(`Félicitation ! Le nombre a deviner était bien ${numberToGuess}.`);
  }
  else if (numberPlayer > numberToGuess) {
    console.log('Le nombre a deviner est plus petit.');
    arrowUp.style.visibility = 'hidden';
    arrowDown.style.visibility = 'visible';
  }
  else {
    console.log('Le nombre a deviner est plus grand.');
    arrowDown.style.visibility = 'hidden';
    arrowUp.style.visibility = 'visible';
  }
}