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

//objects can be copied with SPREAD operator

const original = {
  name: 'first',
  nums: [1, 2, 3],
  colors: { warm: ['red', 'orange'], cold: ['blue', 'green'] },
};

//also items can be added to the copy
const copy = { ...original, year: 2021 };

//and keys can be reassigned
copy.name = 'second';

//The REST operator works the opposite way
// Use it to wrap elements into an array
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // 1 2 , 3 4 5

// The REST element must be the last element
// const [c, d, , ...rest, e] = [1, 2, 3, 4, 5, 6, 7] // Uncaught SyntaxError: Rest element must be last element

// REST also works with objects
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}!`
    );
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// With REST we can set up the number of parameters dinamically
const add = function (...numbers) {
  let sum = 0;
  // This way the params would become an array
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(8, 2, 5, 7, 9, 8);

//On the other side with SPREAD we can destructure array, to pass items as parameters
const x = [23, 5, 7];
add(...x);

//with REST we can group function parameters
(orderPizza = function (mainIngredient, ...otherIngredients) {
  console.log(
    `main ingredient is: ${mainIngredient}, others are: ${otherIngredients}`
  );
}),
  restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach'); //main ingredient is: mushrooms, others are: onion,olives,spinach

// IN GENERAL:
//use SPRED where values are separated by commas
//use REST where variables are separated by commas
