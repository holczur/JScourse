'use strict';

//CLOSURES
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

/*
All function have acces to their variable environmet and that acces has more priority than the scope.
So "booker" fn can acces "passengerCount" even after "secureBooking" runs and returns a new function (after that "secureBooking" fn popps out from the call stack = appr. it no longer exist).
That's because in this case a CLOSURE was born to grant acces for the variable environment, and JS will automatically try to find variables in CLOSURE if they are not found in the global scope.
Closures are not created by us manually. This is a JS feature that happens automatically. We cannot acces closed-over variables explicitly. A closure is not a tangiable JS object.

With other words:
  - A CLOSURE GIVES ACCESS TO ALL THE VARIABLES OF ITS PARENT FUNCTION, EVEN AFTER THAT PARENT FUNCTION HAS RETURNED. THE FUNCTION KEEPS A REFERENCE TO ITS OUTER SCOPE, WHICH PRESERVES THE SCOPE CHAIN THROUGHOUT TIME.
  - A CLOSURE IS LIKE A BACKPACK THAT A FUNCTION CARRIES AROUND WHEREVER IT GOES. THIS BACKPACK HAS ALL THE VARIABLES THAT WERE PRESENT IN THE ENVIRONMENT WHERE THE FUNCTION WAS CREATED
  - ONLY THE FUNCTION HAS ACCES TO ITS BACKPACK, WE 
*/

// We can look into the backpack
console.dir(booker); // under [[Scopes]]: Scopes[3] we will find "0: Closure (SecureBooking)" and "passengerCount: 3" (variable and its value)
// Double brackets means that it is an internal property, that we cannot acces trough our code.

// EXAMPLE 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

g(); // creates "a" variable with value 23, and assign function to "f" variable, defined in the global scope
f(); // "f" will access to "a" even if "f" was defined outside of the fn.

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

h(); // reassigning "f" function
f();
g(); // reassigning "f" function
f();

//EXAMPLE 2 - CLOSURE also includes function parameters
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000; // JS will look for "perGroup" in the CLOSURE first, so this variable will be not taken into account
boardPassengers(210, 3);
/*
      Will start boarding in 3 seconds
      We are now boarding all 210 passengers
      There are 3 groups, each with 70 passengers
      */
