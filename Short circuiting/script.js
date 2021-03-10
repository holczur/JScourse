'use strict';

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

// With SHORT CIRCUITING we can check that an item is exists or not
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1); // WRONG WAY

//Short Circuiting with OR operator
// HOW IT WORKS: It skips the fals and falsy values and returns the first true WARNING! IT ALSO SKIPS 0
const guest2 = restaurant.numGuests || 10;
console.log(guest2); // CORRECT WAY

//To exclude 0 value from short circuiting
restaurant.numGuests = 0;
const guest3 = restaurant.numGuests || 10;
console.log('3', guest3); // null : zero is also skipped

const guest4 = restaurant.numGuests ?? 10; // The Nullish Coalescing Operator
console.log(guest4); // 0 : Skips only nullish values (undefined, null)

//Short Circuiting with AND operator
// HOW IT WORKS: It skips the true and truthy values and returns the first fals
console.log('Hello' && 23 && null && 'jonas'); // jonas

//I asked the reason to use this (bec. same error with and without this ----- waiting for response)
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
