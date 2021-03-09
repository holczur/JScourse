'use strict';

const arr = [1, 2, 3];
const arr2 = [4, 5, 6];

// The spread operator gives us back the values of an iterable element
// ITERABLES: arrays, strings, maps, sets. NOT objets
const newArr = [...arr, ...arr2];
console.log(newArr);

const name = 'Norbert';
console.log(...name);

// Spread operators also can pass elements as function argumnents
const orderPasta = function (ing1, ing2, ing3) {
  console.log(`Here's your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
};
/*
 const ingredients = [
   prompt("Let's make pasta! Ingredient 1?"),
   prompt('Ingredient 2?'),
   prompt('Ingredient 3?'),
 ];

 orderPasta(...ingredients);
*/

//objects can be copied with spread operator

const original = {
  name: 'first',
  nums: [1, 2, 3],
  colors: { warm: ['red', 'orange'], cold: ['blue', 'green'] },
};

//also items can be added to the copy
const copy = { ...original, year: 2021 };

//and keys can be reassigned
copy.name = 'second';
