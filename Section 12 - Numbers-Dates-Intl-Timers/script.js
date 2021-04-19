'use strict';

//Numbers are allways stores in binary form
//In binary there are some circumstances that give us weried results
//That's because with base 2 some fregmentation is infinite, just like in base 10 (3/10 = 3.33333...)
console.log(0.1 + 0.2); //0.300000000000000004
console.log(0.1 + 0.2 === 0.3); //false

console.log(
  '----------------- conversion and type checking -------------------'
);

//Convert
console.log(Number('23')); //23
console.log(+'23'); // 23 //JS makes type coercion if it sees the + operator before a string

//Parsing - string must start with number
console.log(Number.parseInt('30px')); //30
console.log(Number.parseInt('e23')); //30
console.log(Number.parseInt('10', 2)); //2 //the 2nd parameter is the regex, where you can defune the base of the num-system

console.log(Number.parseInt('2.5rem')); // 2 // stops before the decimal
console.log(Number.parseFloat('2.5rem')); // 2.5 // recognizes decimal

//isNaN
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN(+'20x')); // true
console.log(+'23x'); //NaN

console.log(Number.isNaN(23 / 0)); // false
console.log(23 / 0); // Infinity

//CHECKING IF VALUE IS A NUMBER
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite(20 / 0)); // false
console.log(Number.isFinite('20')); //false
console.log(Number.isFinite(+'20x')); //false

console.log('------------Math functions--------------');
//Root
console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5
console.log(8 ** (1 / 3)); // 2

//Minimum and maximum values
console.log(Math.max(5, 18, 64, 78, '122')); // 122 -> makes type coercion
console.log(Math.max(5, 18, 64, 78, '122px')); // NaN -> it does not make parsing
console.log(Math.min(5, 18, 64, 78, '122')); // 5

//PI
console.log(Math.PI * Number.parseFloat('10px') ** 2); // to calculate the area of a circle

//Random
console.log(Math.random()); // create random number between 0-1
console.log(Math.random() * 6); // create random number between 0-5
console.log(Math.trunc(Math.random() * 6)); // remove decimal part
console.log(Math.trunc(Math.random() * 6) + 1); // create random number between 1-6

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
console.log(randomInt(10, 20));

//Rounding integers - fn makes type coercion
console.log(Math.trunc(23.3)); //23 ->removes decimal
console.log(Math.trunc('23.9')); //23 ->removes decimal

console.log(Math.round(23.4)); //23 - round down if decimal < 5
console.log(Math.round('23.5')); //24 -> round up if decimal >= 5

console.log(Math.ceil('23.1')); //24 - round up
console.log(Math.ceil(23.9)); //24 -> round up

console.log(Math.floor(23.1)); //23 - round down
console.log(Math.floor('23.9')); //23 -> round down

//floor vs trunc
//they seemingly do the same, but only when we work with positive numbers
console.log(`-23.3 with trunc becomes: ${Math.trunc(-23.3)}`); //23
console.log(`-23.3 with floor becomes: ${Math.floor(-23.3)}`); //24

//Rounding decimals
console.log((2.7).toFixed(0)); //'3' -> returns a string
console.log((2.7).toFixed(3)); //'2.700' -> the parameter defines the fragmentation's length
console.log((2.345).toFixed(2)); //'2.35' -> it rounds like Math.round()
console.log(+(2.345).toFixed(2)); // + operator does the type coercion
