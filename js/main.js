// Limit and number to guess
var maximum = 50;
var numberToGuess;
var arrowUp;
var arrowDown;
var congratulation;
var input;

function start(max) {
  maximum = max;
  numberToGuess = Math.floor(Math.random() * (maximum+1));

  var label = document.querySelector('#label_number_user');
  label.innerText = `Votre nombre (0-${maximum}):`;

  input = document.querySelector('#number_user');
  input.max = maximum;
  input.value = null;

  // Element to display or not according to events
  arrowUp = document.querySelector('#arrow_up');
  arrowDown = document.querySelector('#arrow_down');
  congratulation = document.querySelector('#congratulation');
  arrowUp.style.visibility = 'hidden';
  arrowDown.style.visibility = 'hidden';
  congratulation.style.visibility = 'hidden';
}


function verification() {
  // Manages input without selection of the game range
  if (!numberToGuess) {
    alert("Vous devez d'abord sélectionner un des choix à gauche.");
    return null;
  }

  let numberPlayer = input.value;

  arrowUp.style.visibility = 'hidden';
  arrowDown.style.visibility = 'hidden';

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
    congratulation.style.fontSize = '2rem';
    congratulation.innerText = `Félicitation ! Le nombre à deviner était bien ${numberToGuess}.`;
    congratulation.style.visibility = 'visible';
  }
  else if (numberPlayer > numberToGuess) {
    // If the result is the same (smaller twice in a row) the arrow must disappear and reappear
    setTimeout(() => {
      arrowDown.style.visibility = 'visible';
    }, "100");
  }
  else {
    setTimeout(() => {
      arrowUp.style.visibility = 'visible';
    }, "100");
  }
}