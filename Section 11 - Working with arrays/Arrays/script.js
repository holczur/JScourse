'use strict';

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
/////////////////////////////////////////////////////////////////////////

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
// loops an array and applie operation for it and gives a naew array as a result
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

const balance = movements.reduce((acc, cur, i, arr) => cur + acc, 100); //i and arr are not needed, 100 is the base(not required)
//[200, 450, -400, 3000, -650, -130, 70, 1300];
//1.) acc = 0, cur = 200 -> (0 + 200)
//2.) acc = 200, cur = 450 -> (200 + 450)
//3.) acc = 650, curr = -400 -> (650 + (-400))
// and so on

console.log(balance);

//Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]);
console.log(max);

//array methods can be chained togeather as long, as the result is an array
const totalDepositsUSD = movements
  .filter(mov => mov > 0) //return all elements that are > 0
  .map(mov => mov * eurToUsd) //multiply filtered array elements with eurToUsd and return result as a new array
  .reduce((acc, mov) => acc + mov, 0); //sum up the multiplied array and return the amount.
console.log(totalDepositsUSD);

console.log('---------------- FIND METHOD -------------------');
//return the first element of the array for which the statement is true

const firstWithDrawal = movements.find(mov => mov < 0);
console.log(firstWithDrawal);

//Find one element
console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

console.log('---------------------SOME AND EVERY----------------------');
console.log(movements);
//returns a boolean if the condition is true for at least one elemenet
const anyDeposits = movements.some(mov => mov > 5000);
console.log(anyDeposits);

//returns a boolean if the condition is true for all elemenets
console.log(account4.movements.every(mov => mov > 0)); //true

//separate callback
const deposit = mov => mov > 0; //we can save the argument as a variable to reuse it in several methods. This way, if we have to change the condition it could be done by changing the variable.
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

console.log('-------------------FLAT and FLATMAP-------------------------');
const arr3 = [[1, 2, 3], [4, 5, 6], 7, 8];
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arr3.flat());
console.log(arrDeep.flat(2)); //this method's argument defines how many levels would be flat

/*
const accMov = accounts.map(acc => acc.movements);
const allMov = accMov.flat();
console.log(allMov);
const overallBalance = allMov.reduce((acc, mov) => acc + mov);
*/

// faltmap manually
const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov);

console.log(overallBalance);

//.flatMap()
const overallBalance2 = accounts
  .flatMap(acc => acc.movements) // This can be used only for one level deep arrays
  .reduce((acc, mov) => acc + mov);

console.log(overallBalance);

console.log('--------------------------SORT--------------------------');
//WARNING: THIS METHOD MUTATES ARRAY AND CONVERTS NUMBERS TO STRING!!!

//strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha', 'Julia'];
console.log(owners.sort());

//numbers
console.log(movements);
console.log(movements.sort());

/*
    //return < 0       A, B -> ascending
    //return > 0       B, A -> decreasing
    movements.sort((a, b) => {
      if (a > b) return 1;
      if (b > a) return -1;
    });
    console.log(movements);

    movements.sort((a, b) => {
      if (a > b) return -1;
      if (a < b) return 1;
    });
    console.log(movements);
*/

movements.sort((a, b) => a - b);
console.log(movements);

movements.sort((a, b) => b - a);
console.log(movements);

console.log('----more ways of creating and filling arrays----');
console.log([1, 2, 3, 4, 5, 6, 7]);
console.log(new Array(1, 2, 3, 4, 5, 6, 7));
const x = new Array(7); //creates a 7 length empty array
console.log(x); //[empty x 7]
console.log(x.map(() => 5)); //[empty x 7] :(

//.fill() MUTATES THE ORIGINAL ARRAY
console.log(x.fill(1)); // [1, 1, 1, 1, 1, 1, 1]
console.log(x.fill(23, 2, 5)); // [1, 1, 23, 23, 23, 1, 1]

const y = Array.from({ length: 7 }, () => 1); //creates a user defined legth array, filld up with user defined values
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1); //fn arguments: 1st place: current value, 2nd place: index. Unused arg. can be named: _
console.log(z); //[1, 2, 3, 4, 5, 6, 7]

//Practice: fill up an array with 100 random dice rolls
const randomDices = Array.from(
  { length: 100 },
  () => Math.floor(Math.random() * 6) + 1
);
console.log(randomDices);

//fill up array from DOM elements
const values = Array.from(document.querySelectorAll('.value'), el =>
  Number(el.textContent.replace('$', ''))
); //Take all elemets with class 'value' -> get its text content, delete $ signs, and convert them to numbers
console.log(values); // [454, 1522, 300, -155, -320]

const valuesDOM = [...document.querySelectorAll('.value')]; // spread operator also can be used to get DOM elements
console.log(valuesDOM);

console.log('----Which Method and When to Use---------');
/*
I want...
  to mutate original array
    add to original:
      .push (end)
      .unshift (start)
    remove from original
      .pop (end)
      .shift (start)
      .splice (any)
    others:
      .reverse
      .sort
      .fill
  
  a new array
    computed from original:
      .map
    filtered using condition:
      .filter
    position of original:
      .slice()
    adding original to other:
      .concat
    flattening the original:
      .flat
      .flatMap
  
  an array index
    based on value:
      .indexOf
    based on test condition:
      .findIndex
  
  an array element:
    based on test condition:
      .find
  
  know if array includes
    based on value:
      .includes
    based on test condition:
      .some
      .every
  
  a new string
    based on a separator operator:
      .join
  
  transform to value
    based on accumulator:
      .reduce
  
  to just loop array
    based on callback:
      .foreach
*/
console.log('---PRACTICE---');

//1. Sum up all deposites from all accounts
const bankDepositSums = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((mov, acc) => mov + acc, 0);
console.log(bankDepositSums);

//2. How many deposites are at least 1000€
// const numDeposites1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;
// console.log(numDeposites1000);
const numDeposites1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
console.log(numDeposites1000);

/*
++ operator cannot be used in this case, because altough it does the job and icrease the counter by one, but it returns the old value
for example:
let a = 10
console.log(a++) // 10
console.log(a) // 11
console.log(++a) // 12

in this type of usage we can use the prefixed ++ operator
*/

//3. create a new object for sum of all deposits and withdrawals
const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      //cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur; //bracket notation instead of dot notation lets us to calculate property name.
      return sums; // in code bodies we have to return value manually
    },
    { deposits: 0, withdrawals: 0 } //starting value -> we have defined here the object
  );
console.log(sums);

//4. convert a string to title case
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
  const tiltleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');
  return capitalize(tiltleCase);
};
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('this is the final title in this EXAMPLE'));
console.log(convertTitleCase('and this is the last one'));
console.log(convertTitleCase('or maybe not'));

//codewars practice
//The main idea is to count all the occurring
//characters in a string. If you have a string like aba, then the result should be
//{'a': 2, 'b': 1}. What if the string is empty? Then the result should be empty object literal, {}.

const countSameLetters = function (str) {
  return str
    .toLowerCase()
    .split('')
    .reduce((obj, el) => {
      if (!obj[el]) {
        obj[el] = 1;
      } else {
        obj[el]++;
      }
      return obj;
    }, {});
};

console.log(countSameLetters('dffdfd  fsg'));

//------------------------------sudoku checker-----------------------------
const sudokuTest1 = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
];

const sudokuTest2 = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 0, 3, 4, 9],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9],
];

const doneOrNot = function (board) {
  const tmp = [];
  const count = () => (tmp.reduce((acc, cur) => acc + cur) > 0 ? 1 : 0);
  const check = function (row) {
    if (new Set(row).size !== row.length) {
      tmp.push(1);
    } else {
      tmp.push(0);
    }
  };
  //check rows
  board.forEach(row => check(row));

  //check columns
  const columns = board[0].map((_, colIndex) =>
    board.map(row => row[colIndex])
  );
  check(columns);

  //check areas
  const areas = Array.from({ length: 3 }).flatMap((_, i) =>
    Array.from({ length: 3 }, (__, j) =>
      Array.from({ length: 3 }).flatMap((___, k) =>
        board[j * 3 + k].slice(i * 3, (i + 1) * 3)
      )
    )
  );
  check(areas);
  console.log(tmp);
  console.log(tmp.reduce((acc, cur) => acc + cur) > 0 ? false : true);

  tmp.reduce((acc, cur) => acc + cur) > 0 ? false : true;
};

doneOrNot(sudokuTest1);
/*
//check rows
const checkRows = function (matrix) {
  const tmp = [];
  matrix.forEach(row => {
    if (new Set(row).size !== row.length) {
      tmp.push(1);
    } else {
      tmp.push(0);
    }
  });
};

//transpose
const checkCols = function (matrix) {
  const columns = matrix[0].map((_, colIndex) =>
    matrix.map(row => row[colIndex])
  );
  checkRows(columns);
};

//area check
const checkAreas = function (matrix) {
  const areas = Array.from({ length: 3 }).flatMap((_, i) =>
    Array.from({ length: 3 }, (__, j) =>
      Array.from({ length: 3 }).flatMap((___, k) =>
        matrix[j * 3 + k].slice(i * 3, (i + 1) * 3)
      )
    )
  );
  checkRows(areas);
};

checkRows(sudokuTest2);
checkCols(sudokuTest2);
checkRows(sudokuTest2);

result > 0 ? 'Try again!' : 'Finished';

/*
areas[0] = sudokuTest2[0]
  .slice(0, 3)
  .concat(sudokuTest2[1].slice(0, 3))
  .concat(sudokuTest2[2].slice(0, 3));
areas[1] = sudokuTest2[3]
  .slice(0, 3)
  .concat(sudokuTest2[4].slice(0, 3))
  .concat(sudokuTest2[5].slice(0, 3));
areas[2] = sudokuTest2[6]
  .slice(0, 3)
  .concat(sudokuTest2[7].slice(0, 3))
  .concat(sudokuTest2[8].slice(0, 3));

areas[3] = sudokuTest2[0]
  .slice(3, 6)
  .concat(sudokuTest2[1].slice(3, 6))
  .concat(sudokuTest2[2].slice(3, 6));
areas[4] = sudokuTest2[3]
  .slice(3, 6)
  .concat(sudokuTest2[4].slice(3, 6))
  .concat(sudokuTest2[5].slice(3, 6));
areas[5] = sudokuTest2[6]
  .slice(3, 6)
  .concat(sudokuTest2[7].slice(3, 6))
  .concat(sudokuTest2[8].slice(3, 6));

areas[6] = sudokuTest2[0]
  .slice(6, 9)
  .concat(sudokuTest2[1].slice(6, 9))
  .concat(sudokuTest2[2].slice(6, 9));
areas[7] = sudokuTest2[3]
  .slice(6, 9)
  .concat(sudokuTest2[4].slice(6, 9))
  .concat(sudokuTest2[5].slice(6, 9));
areas[8] = sudokuTest2[6]
  .slice(6, 9)
  .concat(sudokuTest2[7].slice(6, 9))
  .concat(sudokuTest2[8].slice(6, 9));

console.log(areas);
*/
