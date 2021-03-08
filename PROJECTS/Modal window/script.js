'use strict'

const openButtons = document.querySelectorAll('.show-modal')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const closeBtn = document.querySelector('.close-modal')

const closeModal = function () {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}

const openModal = function () {
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}

openButtons.forEach((button) => {
  button.addEventListener('click', openModal)
})

closeBtn.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal()
  }
})
