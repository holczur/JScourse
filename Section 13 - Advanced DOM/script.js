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

//Style attributes
//these will shown as inline styles
message.style.backgroundColor = '#37383d';
message.style.width = '106%';

//inline style values can be reached
console.log(message.style.width); //'106%'
//but values from stylsheet cannot reached the way like above
console.log(message.style.color); //int he consol we will see an empty line

//to reach stylsheet values use getComputedStyle()
console.log(getComputedStyle(message).height); //'50px'

//to get a number from '50px' use Number.parseFloat() or .parseInt()
//after that we can add 30 and 'px' that will cause the value to be a string again
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

console.log(getComputedStyle(message).height); //'80px'

//We have acces to the CSS root values as well
//:root values are stored in the document object
document.documentElement.style.setProperty('--color-primary', 'orangered');

//Attributes with standard values
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);
console.log(logo.designer); // undefined -> It is not a standard attribute

logo.alt = 'I changed this from JS';

//Non-standard values
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist'); //new attribute will be created in HTML element

//relative vs absolute path
console.log(logo.getAttribute('src')); //relative path
console.log(logo.src); //absolute path

//Data attributes
//defined attributes in HTML that starts with data-something-optional-...
console.log(logo.dataset.versionNumber); //3.0

//Classes
logo.classList.add('c', 'j');
logo.classList.remove('j');
logo.classList.toggle('c');
logo.classList.contains('c');
//Dont use -> will overwrite all classes
// logo.className = 'something'

//Smooth Scroll
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  //to get info about elements position and dimensions
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords); // DOMRect {x: 0, y: 689, width: 1103, height: 1398, top: 689, …}

  console.log(e.target.getBoundingClientRect());

  //see the actual scroll position
  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  //se the actual width and height of viewport
  console.log(
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //set the destionation: current position + current scroll
  //to set up a smooth scroll, we have to set these parameters as object values
  /*
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });
  */

  //THE MODERN WAY
  section1.scrollIntoView({ behavior: 'smooth' });
});

//Events
//Delet eventlistener after first use, or after defined conditions
const h1 = document.querySelector('h1');
const alertH1 = function (e) {
  alert('addEventListener: :D');
  setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 5000);
};

h1.addEventListener('mouseenter', alertH1);

/*
//Event Propagation
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Target:', e.target, e.currentTarget);
});

//this" refers to the element on which the event had happend. If we click on the child
//both the child and the parent will change its background color
//if we click on parent, outside of the child, only the parent will change.
//the target will be that elemenet on which the event had happend.
document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Target:', e.target, e.currentTarget);
});
document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Target:', e.target, e.currentTarget);

  //Stop propagation -> e.stopPropagation()
});
*/
//Event delegation

//This code is working, but not efficient, bec. it uses three event listener
//If there would be thousands of links that could cause performance issues
// const navLinks = document.querySelectorAll('.nav__link');
// navLinks.forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//To delegate event:
//1. Add eventListener to common parent element
//2. Determine what element originated the event

//We set up only one event listener on the parent, from where we will know
//that which child was clicked -> e.target
//If the target element meets the matching requirements
//we can implement the function that we want.
//By this way all child element will have the functionality, but only the parent element will listen to the event.
document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target);
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
