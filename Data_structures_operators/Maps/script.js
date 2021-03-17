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

// MAPs have keys and values, like objects have, but the keys can be any type of data, not only string

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');

console.log(rest);

//calling the set() method, returns the updated map, so chaining can be made.
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');
console.log(rest);

//to retrieve data use get() method
console.log(rest.get('name'));
console.log(rest.get(1));
console.log(rest.get(true));

//keys can be booleans so we can define a condition as well
const time = 10;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

//to delete an entry
rest.delete(2); //map.delete(key);
console.log(rest);

// to check if a key is present use the have() method
console.log(rest.has('categories')); //true

// to check size
console.log(rest.size); // 7

//to delete map
// rest.clear()

//set arrays as keys
const arr = [1, 2]; //Have to save the array to a variable. If we simply just set an array as key, we couldn't retrieve its value, because we cannot acces to the original array in the heap if we dont know its code of place
rest.set(arr, 'Test');
console.log(rest);
console.log(rest.arr);

//objects also can be keys
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);

// If there are lots of elements to create for map we can do this instead of set()
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct! 🎉'],
  [false, 'Try again! 😣'],
]);
console.log(question);

//We can simply create new MAP from an object
// Object.entries() return the same data structure that we need for creating a MAP
const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);

//MAPs are iterable
console.log(question.get('question')); // Print question
for (const [key, value] of question) {
  //detructure each item of question into key and value variables
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`); // If the key is a number print it
}

const answer = Number(prompt('Your answer')); //Ask user for value of answer
console.log(question.get(question.get('correct') === answer)); // We have the correct or wrong messages as values of a boolean key --> question.get('correct') === answer // true or false depends on asnwer value

/* MY SOLUTION
console.log(question.get(answer === question.get('correct')) || question.get(false)); //if the value is correct print value of true, else print value of false
*/

//convert MAP to array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);
