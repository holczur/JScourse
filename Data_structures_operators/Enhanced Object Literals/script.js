'use strict';

/*
These are OBJECT LITERALs. We can include an outer object by two ways:
    way #1: set up a key that has the outer object as a value
        openingHours: openingHours
    
    Way #2: We can refer for the outer object as a variable inside our object. we write only the variable name without a key.
      const restaurant = {
        name: 'Classico Italiano',
        openingHours,
      };

With ES6 we can leave ": function" ffrom methods, like this:
      const restaurant = {
        name: 'Classico Italiano',
        openingHours,
        order(starterIndex, mainIndex) {
          return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
        },
      };

With ES6 object keys can be calculated. For this we use []
      const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
      const str = 'sun'
      const openingHours = {
        [`day ${2+2}`]: {
          open: 12,
          close: 22,
        },
        [weekdays[5]]: {
          open: 11,
          close: 23,
        },
         [weekdays[2+4]]: {
          open: 0,
          close: 24,
        },
    };



*/

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};

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
};
