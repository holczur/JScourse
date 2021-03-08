'use strict'

/* BRICKS
    - Display:
        sum of current rolls
        scores for each player
        rolled dice
    
    - Functions:
        Switch active player
        Roll dice
        Count score
        Display score
        Holding
    ✔  Reset game

    -The Rule:
        When active player rolls the dice
            Generate random number (1-6)
            Display dice
            Is it a 1? -> NO: Add dice roll to current score
                              Display updated current score
                      -> YES: Switch player
        When active player holds
            Add current score to total score
            Display total score
            Set current score to 0
            Is the total score >= 100? -> NO: Switch Player
                                       -> YES: ACTIVE PLAYER WINS!!!

        When a player resets the game:
            Set all scores to 0
            Update display
            Set player 1 as active
*/

const display0 = document.querySelector('#score--0')
const display1 = document.querySelector('#score--1')
const displayCurrent0 = document.querySelector('#current--0')
const displayCurrent1 = document.querySelector('#current--1')
const dice = document.querySelector('.dice')
const roll = document.querySelector('.btn--roll')
const hold = document.querySelector('.btn--hold')
const newGame = document.querySelector('.btn--new')
const player0 = document.querySelector('.player--0')
const player1 = document.querySelector('.player--1')
let random
let currentScore = 0
let activePlayer = 0
const scores = [0, 0]
const players = document.querySelectorAll('.player')

const reset = function () {
  dice.classList.add('hide')
  display0.textContent = 0
  display1.textContent = 0
  displayCurrent0.textContent = 0
  displayCurrent1.textContent = 0
  scores[0] = 0
  scores[1] = 0
  currentScore = 0
  activePlayer = 0
  player0.classList.add('player--active')
  player1.classList.remove('player--active')
  player0.classList.remove('player--winner')
  player1.classList.remove('player--winner')
  roll.classList.remove('hide')
  hold.classList.remove('hide')
}

const switchActive = function () {
  currentScore = 0
  document.getElementById(`current--${activePlayer}`).textContent = currentScore
  activePlayer = activePlayer === 0 ? 1 : 0
  players.forEach((player) => {
    player.classList.toggle('player--active')
  })
}

reset()

roll.addEventListener('click', () => {
  dice.classList.remove('hide')
  random = Math.trunc(Math.random() * 6) + 1
  console.log(random)
  dice.src = `./dice-${random}.png`

  if (random !== 1) {
    currentScore += random
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore
  } else {
    switchActive()
  }
})

hold.addEventListener('click', () => {
  scores[activePlayer] += currentScore
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer]
  currentScore = 0
  if (scores[activePlayer] >= 10) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner')
    roll.classList.add('hide')
    hold.classList.add('hide')
  } else {
    switchActive()
  }
})

newGame.addEventListener('click', reset)
