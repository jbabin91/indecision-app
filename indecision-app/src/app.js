// import './utils';
// import subtract, { square, add } from './utils';

// console.log('app.js is running');
// console.log(square(4));
// console.log(add(1, 4));
// console.log(subtract(100, 10));

// person.js
// named export isAdult(18) - true if adult, otherwise false
// named export canDrink(18) - true if 21 and over, otherwise flase

// import isAdult and canDrink
// use both printing result to the console

import isSenior, { isAdult, canDrink } from './person';

console.log(isAdult(18));
console.log(canDrink(18));
console.log(isSenior(64));
