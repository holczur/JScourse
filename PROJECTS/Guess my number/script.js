'use strict'

const random = function () {
  return Math.trunc(Math.random() * 20) + 1
}

const decreaseScore = function () {
  if (score > 1) {
    score--
    scoreDisplay.textContent = score
  } else {
    displayMesseage('😣 Game Over!')
    displayNumber('😣')
    scoreDisplay.textContent = 0
    body.style.backgroundColor = 'rgb(100 0 0)'
  }
}

const winner = function () {
  displayMesseage('🎉 Correct Number!')
  displayNumber(secretNumber)
  body.style.backgroundColor = 'green'
  number.style.width = '30rem'
  if (score > highscore) {
    highscore = score
    highscoreDisplay.textContent = highscore
  }
}

const reset = function () {
  displayMesseage('Start guessing...')
  displayNumber('?')
  score = 20
  scoreDisplay.textContent = score
  secretNumber = random()
  body.style.backgroundColor = '#222'
  number.style.width = '15rem'
  document.querySelector('.guess').value = ''
}

const displayMesseage = function (msg) {
  message.textContent = msg
}

const displayNumber = function (msg) {
  number.textContent = msg
}

const check = document.querySelector('.check')
const again = document.querySelector('.again')
const message = document.querySelector('.message')
const number = document.querySelector('.number')
const scoreDisplay = document.querySelector('.score')
const highscoreDisplay = document.querySelector('.highscore')
const body = document.querySelector('body')
let secretNumber = random()
let score = 20
let highscore = 0
let guess

check.addEventListener('click', () => {
  guess = Number(document.querySelector('.guess').value)
  if (guess <= 0 || guess > 20) {
    displayMesseage('⛔Only numbers between 1-20')
  } else if (guess === secretNumber) {
    winner()
  } else {
    decreaseScore()
    guess > secretNumber
      ? displayMesseage('📈Too high...')
      : displayMesseage('📉Too low...')
  }
})

again.addEventListener('click', () => {
  reset()
})
