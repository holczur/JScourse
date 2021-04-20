'use strict';

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

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

console.log('-----------reminder operator----------------');
console.log(5 % 2); //1

//even or odd & divisibility
const isEven = n => (n % 2 === 0 ? `${n} is even` : `${n} is odd`);
console.log(isEven(75));

console.log('--------------BigInt------------------');

//BigInt
//Tough numbers are stored in a binary system there are 64 bits for them
//from these 53 are for digits and 9 for storing the position of the decimal point and the sign.

console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 - 1); //numbers above this value ar not safe tu use
console.log(2 ** 53 + 3); //

console.log(45487655859847656549878695654987869464n); //...n creates BigInt number (new primitve in ES6)

//operations work the same way, but there is one condition: BigInt nums cannot be mixed with regular nums

console.log(454654564764678987646434n * 10000n);

const huge = 5454687453126346556n;
const num = 23;
console.log(huge * BigInt(num));

console.log(20 < 20n); // false
console.log(20 > 20n); // false
console.log(20 === 20n); // false
console.log(20 >= 20n); // true
console.log(20 <= 20n); // true
console.log(20 == 20n); // true - type coercion

//Math. functions cannot be used on BigInt
// console.log(Math.sqrt(20n));

//BigInt is a whole number
// console.log(20.5n);
console.log(10n / 3n); //3n -> decimal part is cut off

console.log('------------DATES AND TIMES---------------');
const now = new Date();
console.log(now);

console.log(account1.movementsDates[0]);
console.log(new Date(2037, 0, 19, 15, 23, 5)); //months are zero based
console.log(new Date(2037, 10, 31)); //autocorrect non existing dates 11.31 -> 12.01
console.log(new Date(2037, 10, 32)); //autocorrect non existing dates 11.32 -> 12.02

console.log(new Date(0)); // Unix time: January 1, 1970
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // Unix time + 3 days (add in milliseconds)
console.log(3 * 24 * 60 * 60 * 1000); // Timestamp of day three

//Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future.getFullYear());
console.log(future.getMonth()); // ZERO BASED!!! EG.: 10 MEANS NOVEMBER
console.log(future.getDate()); // WHICH DAY OF MONTH
console.log(future.getDay()); // WHICH DAY OF WEEK (0 = SUNDAY)
console.log(future.getHours()); // WHICH DAY OF WEEK (0 = SUNDAY)
console.log(future.getMinutes()); // WHICH DAY OF WEEK (0 = SUNDAY)
console.log(future.getSeconds()); // WHICH DAY OF WEEK (0 = SUNDAY)

console.log(future.toISOString()); //international standard
console.log(future.getTime()); // // timestamp (How many millisecond had passed since 01.01.1970.)
console.log(new Date(2142253380000)); // timestamp can be used to create new date

console.log(Date.now()); // timestamp of this moment

future.setFullYear(2040); // all date properties can be set individually
console.log(future);

//all dates can be convert into numbers, so we can make operations with them
//a date's value is its timestamp
const future2 = new Date(2057, 10, 19, 15, 23);
console.log(+future2);
console.log(Number(future2));

const calcDaysPassed = (date1, date2) =>
  Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));
const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));
console.log(days1);

console.log('-----------Intl Nums---------------');
const num2 = 594664456.45;
console.log('Hungary: ', new Intl.NumberFormat('hu-HU').format(num2));
console.log('Great-Britain: ', new Intl.NumberFormat('en-GB').format(num2));
console.log('Germany: ', new Intl.NumberFormat('de-DE').format(num2));
console.log('Syria: ', new Intl.NumberFormat('ar-SY').format(num2));
console.log(navigator.language);
console.log(navigator);

const options = {
  style: 'unit',
  unit: 'mile-per-hour',
};
console.log(
  'Hungary: ',
  new Intl.NumberFormat(navigator.language, options).format(num2)
);
console.log(
  'Great-Britain: ',
  new Intl.NumberFormat('en-GB', options).format(num2)
);
console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num2));

const options2 = {
  style: 'currency',
  currency: 'EUR',
  useGrouping: false,
};

console.log('Hungary: ');
console.log(
  'Great-Britain: ',
  new Intl.NumberFormat('en-GB', options2).format(num2)
);
console.log('Germany: ', new Intl.NumberFormat('de-DE', options2).format(num2));
