'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
//Getting an element by ID which is equal to the above example as well
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btm--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

//Rolling dice functionality
btnRoll.addEventListener('click', () => {
  //Generates a random dice roll between 1 through 6
  const dice = Math.trunc(Math.random() * 6) + 1;

  // Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //Checks for a dice roll of 1
  if (dice !== 1) {
    //Adds the dice to current score
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
    //Switches to the next player if dice rolls a 1
  }
});
