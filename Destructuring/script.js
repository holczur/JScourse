'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
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

// DESTRUCTURING OBJECTS
// Works like destructuring arrays, except that order doesn't mean anything with objects. So instead of indexes, we simply use keys

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// If we want else variable name than the key:
const { location: place } = restaurant;
console.log(place);

//Mutating variables
let g = 111;
let h = 456;
let i = 6;
const obj = { g: 23, h: 7, i: 445 };

// We cannot creat again g, h, i variables and cannot start a line with curly braces {code block}
// Solution: wrap into parentheses
({ g, h } = obj);
console.log(g, h);

// Nested objects
const {
  fri: { open, close },
} = openingHours;

// const {parentObject: {nestedObjectKey1, nestedObjectKey2},} = sourceObject

console.log(open, close);

//orderDelivery function was created on line 17
// Deconstructing this object to pass its keys as function arguments
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Mare, 21',
  mainIndex: 2,
  starterIndex: 0,
});

// DESTRACTURING ARRAYS
// Without destructuring
let arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// With destructuring
let [x, y, z] = arr;
console.log(x, y, z);

//Save the main and the secondary category to a variable from restaurant object's categories array
//The main category is the first and the secondary is the third element of the array
let [mainCat, , secondaryCat] = restaurant.categories;
console.log(mainCat, secondaryCat);

//If we'd like to change the order later, we can simply reassigne the values like this:
[mainCat, secondaryCat] = [secondaryCat, mainCat];
console.log(mainCat, secondaryCat);

// At line 10 order method was created. It returns an array with index of starter and main menu
restaurant.order(2, 0); //returns "Garlic bread" and "Pizza"

//We can immediately destructure it while calling the function
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

// Destructuring works with nested arrays as well
const nested = [2, 4, [5, 6]];
const [d, , [e, f]] = nested;
// destucture main array
// save the first elemenet as "i"
// skip second element
// destructure nested array
// save first element of nested array as "j"
// save second elemenet of nested array as "k"
console.log(d, e, f);
