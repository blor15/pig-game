'use strict';

// Selecting elements
const player0el = document.querySelector('.player--1');
const player1el = document.querySelector('.player--0');
const score0El = document.querySelector('#score--0');
//Getting an element by ID which is equal to the above example as well
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0el.classList.remove('player--winner');
  player1el.classList.remove('player--winner');
  player0el.classList.add('player--active');
  player1el.classList.remove('player--active');
};
init();

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0el.classList.toggle('player--active');
  player1el.classList.toggle('player--active');
};

//Rolling dice functionality
btnRoll.addEventListener('click', () => {
  if (playing) {
    //Generates a random dice roll between 1 through 6
    const dice = Math.trunc(Math.random() * 6) + 1;

    // Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //Checks for a dice roll of 1
    if (dice !== 1) {
      //Adds the dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //Switches to the next player if dice rolls a 1
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', () => {
  if (playing) {
    // Adds current score to the activate player's total score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // Checks if a player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});
//Reset the game
btnNew.addEventListener('click', init);
