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
