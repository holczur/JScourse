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

// The SET items are unique, so no duplication will be included
// This type of data structure is best for entries, that will be handled togeather without the need of accesing them separately
// SETs don't have indexes, the order of entries doesn't matter
// SETs' entries will be unique
//SETs are iterable

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pizza',
  'Pasta',
]);
console.log(ordersSet); //Set(3) {"Pasta", "Pizza", "Risotto"}

// We can check te size of the SET
console.log(ordersSet.size); //3

// We can check if a certain element exists or not
console.log(ordersSet.has('Pizza')); //true
console.log(ordersSet.has('Bread')); //false

// We can add new el. to SET
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet); //Set(4) {"Pasta", "Pizza", "Risotto", "Garlic Bread"} //WILL BE UNIQUE

// We can delet an el. from the SET
ordersSet.delete('Risotto');
console.log(ordersSet); //Set(3) {"Pasta", "Pizza", "Garlic Bread"} //WILL BE UNIQUE

// We can delet all el. from the SET
// ordersSet.clear();
// console.log(ordersSet); //Set(0) {}

//SETs are iterable
for (const order of ordersSet) console.log(order);

// EXAMPLE
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)]; // SETs can be transformed into arrays, bec they are iterable, so the spread operator will work
console.log(staffUnique);

//If we only wanted to know ho many unique elements are in an array, we simply can do this:
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('holcznorbert').size);
