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


//FUNCTIONS RETURNING FUNCTIONS
const greet = function(greeting) {
  return function(name) {
    console.log(`${greeting} ${name}`)
  }
}
//with arrow functions
const greetArr = greeting => name =>
  console.log(`${greeting} ${name}`)
greetArr('Yo')('Ma')

const greeterHey = greet('Hey'); //greeterHey is equal with the returned greet fn
greeterHey('Jonas')
greeterHey('Steven')

//There's no need to save the returned function as a variable
greet('Hello')('Jonas') //greet(first fn parameter)(returned fn parameter)



//THE CALL AND APPLY METHODS
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
// enhancede object literal
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
      );
    this.bookings.push(
      {flight: `${this.iataCode}${flightNum}`, name})

    }  
}

lufthansa.book(239, 'Jonas Schmedtmann') //bookings: [{flight: "LH239", name: "Jonas Schmedtmann"}]
lufthansa.book(635, 'Marta Blumwerk')
/*
lufthansa.bookings = [{flight: "LH239", name: "Jonas Schmedtmann"},
{flight: "LH635", name: "Marta Blaumwerk"}]
*/
console.log(lufthansa.bookings)

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],

}

const book = lufthansa.book; // we want to use the method for another airline. Instead copying the whole method and paste into eurowings object (which is clearly not a best practice) we can store the method in a variable

//This way the book function is a regular fn expression, not a method. So the 'this' keyword will point to undefined: "Cannot read property 'airline' of undefined"
//book(23, 'Sarah Williams')

//The CALL METHOD will call the book method and set the THIS keyword to point to the defined object's property
book.call(eurowings, 23, 'Sarah Williams')
book.call(lufthansa, 239, 'Mary Clearwater')

const swiss = {
  airline: 'Swiss Lines',
  iataCode: 'LX',
  bookings: [],  
}
book.call(swiss, 19, 'Mary Clearwater')
console.log(eurowings)
console.log(lufthansa)
console.log(swiss)

// APPLY METHOD - not used nowdays
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData)

book.call(swiss, ...flightData) //is the same

// BIND METHOD - doesn't call the function immediately, instead it returns a new function, where THIS keyword is bound to whatever we passed
const bookEW = book.bind(eurowings)
const bookLH = book.bind(lufthansa)
const bookLX = book.bind(swiss)
bookEW(57, 'Steve Williams')

//this method can define not only the THIS keyword, but also the parameters
const bookEW23 = book.bind(eurowings, 23)
bookEW23('Peter Mann') //This is a common pattern, called: PARTIAL APLICATION

// With EVENTLISTENERS
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
  console.log(this);
  this.planes++
  console.log(this.planes);
}

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane) // "this" will point to the button, bec. this keyword in an event handler allways referrs the element that handles the event. Result: NaN

// So we need BIND METHOD to return a new function, where referrencce of THIS is defined:
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa))

//BIND METHOD for PARTIAL APPLICATION
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200))

const addVAT = addTax.bind(null, 0.27) // THIS keyword is not present so there's no need to define its reference
console.log(addVAT(1000))

// mini-challenge
const adddTextRate = function(rate) {
  return function(value) {
    return value + value * rate
  }
}
const addVAT2 = adddTextRate(0.27)
console.log(addVAT2(100))
console.log(addVAT2(4526))