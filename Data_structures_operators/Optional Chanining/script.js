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

// EXAMPLE
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// on METHODES: Is the method exist in the object? Y: call it. N: do stg else
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist'); // ["Focaccia", "Pasta"]
console.log(restaurant.orderStg?.(0, 1) ?? 'Method does not exist'); // "Method doees not exist"

//on ARRAYS: We can chack if an array is empty or not.
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
console.log(users[0]?.name ?? 'user array is empty'); //Does users array 1st element exist? Y: return name property. N: 'user array is empty'
