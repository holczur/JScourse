'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];

//SLICE - CREATES NEW, LET THE ORIGINAL UNCHANGED
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());

//SPLICE - MUTATES THE ORIGINAL
// console.log(arr.splice(2));
// console.log(arr.splice(-1));
console.log(arr.splice(1, 2)); // arr.splice(from which element, how many elements)
console.log(arr);

//REVERSE - MUTATES THE ORIGINAL
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];

console.log(arr2.reverse());
console.log(arr2);

//CONCAT - CREATES NEW, LET THE ORIGINAL UNCHANGED
const letters = arr.concat(arr2); // same as [...arr, ...arr2]
console.log(letters);

//JOIN - CREATES NEW, LET THE ORIGINAL UNCHANGED
console.log(letters.join('-'));
console.log(letters);

/////////////////////////////////////////////////////////////////////////////////////
//FOREACH LOOP

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log('-----------------FOROF--------------------');
for (const [i, movement] of movements.entries()) {
  // [index, current element]
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}
console.log('-----------------FOREACH--------------------');
//foreach loop always will iterate throug the entire array, there's no way to break.
movements.forEach(function (mov, i, arr) {
  //parameter names do not matter at all, but the order is important: 1st - current element, 2nd - index, 3rd - whole array
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

console.log('-----------------FOREACH WITH MAPS--------------------');
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

console.log('-----------------FOREACH WITH SETS--------------------');
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, map) {
  //Sets do not have keys nor indexes, so the second parameter will be equal with the first (bec.of technical reasons). Underscore for a variable name means that the variable is totally useless.
  console.log(`${value}: ${value}`);
});
