'use strict';

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

///////////////////MAP, FILTER, REDUCE METHODS//////////////////////

//MAP
// loops an array and appliee operation for it and gives a naew array as a result
console.log('---------------MAP METHOD-------------------');

const eurToUsd = 1.1;
const movementsUsd = movements.map(function (mov) {
  return mov * eurToUsd;
});

console.log(movements);
console.log(movementsUsd);

//Same with arrow function
const movementsUsdArrow = movements.map(mov => mov * eurToUsd);
console.log(movements);
console.log(movementsUsd);

//(current item, index, array) syntax also works here

/* THIS IS NOT "DRY" - refactored version under this
const movementsDescriptions = movements.map((mov, i) => {
  if (mov > 0) {
    return `Movement ${i + 1}: You deposited ${mov}.`;
  } else {
    return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
  }
});
*/

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);

console.log(movementsDescriptions);

//FILTER
// It returns a new array containing the array elements that passed a specified condition
console.log('-----------------FILTER METHOD------------------');
const deposites = movements.filter(mov => mov > 0);
const withdrawals = movements.filter(mov => mov < 0);

console.log(deposites);
console.log(withdrawals);

//REDUCE
// It reduces all elements down to one single value (e.g.: adding all elements together)
console.log('-----------REDUCE METHOD--------------');
console.log(movements);
//const balance = movements.reduce(function (acc, cur, i) {
//console.log(`Iteration no${i}: ${acc}`);
//return acc + cur;
//}, 100); //Iteration star from base 100 (initial accumulator value)

const balance = movements.reduce((acc, cur, i, arr) => cur + acc, 100);
//[200, 450, -400, 3000, -650, -130, 70, 1300];
//1.) acc = 0, cur = 200 -> (0 + 200)
//2.) acc = 200, cur = 450 -> (200 + 450)
//3.) acc = 650, curr = -400 -> (650 + (-400))
// and so on

console.log(balance);
