'use strict';

///////////////////////////////////////
//Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections); // NodeList(4)

console.log(document.getElementById('section--1'));
const allButtons = document.getElementsByTagName('button');
console.log(allButtons); //HTMLCollection(9)

//NodeList is static, but HTMLCollection shows us the updated item list
//for eg.:

//Creating and inserting elements
//.insertAdjacentHTML

const message = document.createElement('div'); //a div elemenet was created, but it does not show up in the DOM yet.
message.classList.add('cookie-message'); // message is an object that represents a DOM element
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

//We can select an element in the DOM before which we can insert our message
header.prepend(message);
//or we can insert message after the selected DOM element
header.append(message);
//This doesnot create a duplicate from message, instead the normal flow is applied.
//message is a living DOM element ao it only exist in one place at a time.

//to create a duplicate we can use cloneNode(true)
//header.prepend(message.cloneNode(true));

//elements can be inserted by .before() and .after()

//Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

//the older way:
//message.parentElement.removeChild(message)
