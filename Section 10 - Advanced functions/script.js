'use strict';

//Default parameters

const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //old way:
  // numPassengers = numPassengers || 1;
  // price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000); // to keep passengers default value

//Passing values vs. reference
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 254856485,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 254856485) {
    console.log('Checked in!');
  } else {
    console.log('Wrong passport!');
  }
};

checkIn(flight, jonas);
console.log(flight); //LH234 --> FLIGHT IS A PRIMITIVE AND WITH FLIGHTNUMBER WE CREATE A COPY, SO IT IS NOT THE SAME OBJECT IN THE MEMORY HEAP, THAT'S WHY FLIGHT KEPT UNCHANGED
console.log(jonas); //{name: Mr. Jaons Schmedtmann, passport: 254856485} --> THE FUNCTION ACCES TO THE SAME OBJECT IN MEMORY HEAP

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

//using functions this way can cause unforeseen issues in large codebase especially where multiple developer works. So PAY ATTENTION!
newPassport(jonas);
checkIn(flight, jonas);
console.log(jonas.passport); // random number

//first-class and higher-order functions
/* first-class function is a feature that means that functionas are values.
        - We can store them in variables // const add = (a, b) => a + b;
        - or inside an object // methods
        - and we can pass functions to other functions, // addEventlistener
        - even return functions from other ones
        - and we can call methods on functions // exampleObject.item.bind(someOtherObject)

        A coding language may has or has not these utility (for example c++ has not, javaScript has)
        So this is just a concept.
        */

// Callback functions
const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  // HIGHER-ORDER FUNCTION --> THIS FUNCTION ACCEPTS ANOTHER FUNCTION AS A PARAMETER
  //These kind of functions are called: CALLBACK FUNCTIONS
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

//other example: event listener as higher-order function, its parameter is the CALLBACK function
const high5 = function () {
  console.log('🖐');
};

document.body.addEventListener('click', high5);
