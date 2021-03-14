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

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// OPTIONAL CHAINING simplifies the way we have checkd that even a property exists or not (SHORT CIRCUITING)

//console.log(restaurant.openingHours.mon.open); //Error --> If the 'mon' property doesn't exist we'll get an error bec of we want to use a property of undefined
console.log(restaurant.openingHours.mon?.open); //undefined --> Putting a '?' befor the '.'  results in that ES6 will check, if property exist, and returns undefined, if not.
console.log(restaurant.openingHours?.mon?.open); // It can be nested as well.
