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
        Reset game

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

const dice = document.querySelector('.dice')
let p0ScoreEl = document.querySelector('#score--0')
let p1ScoreEl = document.querySelector('#score--1')
let p0CurrentScoreEl = document.querySelector('#current--0')
let p1CurrentScoreEl = document.querySelector('#current--1')
let p0Score, p1Score

const reset = function () {
  dice.classList.add('hide')
  p0Score = 0
  p1Score = 0
  p0ScoreEl.textContent = 0
  p1ScoreEl.textContent = 0
}

reset()
