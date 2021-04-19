'use strict';

//Numbers are allways stores in binary form
//In binary there are some circumstances that give us weried results
//That's because with base 2 some fregmentation is infinite, just like in base 10 (3/10 = 3.33333...)
console.log(0.1 + 0.2); //0.300000000000000004
console.log(0.1 + 0.2 === 0.3); //false

console.log(Number('23')); //23
console.log(+'23'); // 23 //JS makes type conversion if it sees the + operator before a string
