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

// LOOPING OBJECT PROPERTY NAMES (KEYS)
const properties = Object.keys(restaurant.openingHours); // save openingHours object's property names into a variable, that will be an array
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `; //add each elemenet of the array to the end of the string
}
console.log(openStr);

// PROPERTY VALUES
const values = Object.values(restaurant.openingHours);
console.log(values);

// ENTIRE OBJECT
const entries = Object.entries(restaurant.openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  // immediately destructure variable: The entry is an array that contains an object, that has two properties --> [key, value] but we know, that value will be an object, so we can destructure it right there: [key, {open, close}]
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
