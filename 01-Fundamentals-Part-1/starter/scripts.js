/* 
let country = "USA";
let continent = "N. America";
let population = "350 Million";

console.log(country);
console.log(continent);
console.log(population);

// line break
let myFirstJob = 'Auto Tech';
let myCurrentJob = 'Programmer';

console.log(myFirstJob);
console.log(myCurrentJob);

let kids;
console.log(kids);

let quote = "My name is David and I will succeed"
console.log(quote);

*/

/* 
let JavascriptIsFun = true;
console.log(JavascriptIsFun);
console.log(typeof JavascriptIsFun);

// let affirmation = 'you are awesome!'
// console.log(affirmation);

// console.log(typeof true);
// console.log(typeof 11);
// console.log(typeof affirmation);

// NOTE: you only need to use the 'let" when declaring the value of a variable the first time. When you call it again to 
// change it's value, you don't need to use 'let' again.
JavascriptIsFun = 'Yes!';
console.log(JavascriptIsFun);
console.log(typeof JavascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2002;
console.log(year);
console.log(typeof year);

console.log(typeof null);

*/

/*
let age = 30;
age = 40;
// const is used for variables whos values don't change.  Once a const vairable is assigned a value, it can't be reassigned later
// and trying to do so will trigger an error message in console.  Const variables also can't be empty.
const birthYear = 1983;
birthYear = 1997;
*/

// 9-26-23
const currentYear = 2037
const ageJonas = currentYear - 1991;
const ageSarah = currentYear - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 which = 2*2*2

const firstName = 'Jonas';
const lastName = "Pollan";
console.log(firstName + lastName);
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // answer is 15
console.log(x);
x += 10; // this means x = x + 10 (answer is 25)
console.log(x);
x *= 4; // this means x = x * 4 (answer should be 100)
console.log(x);
x++; // this means x = x + 1 (answer should be 101)
console.log(x);
x-- // this means x = x - 1 (answer hear should 100)
console.log(x);

// comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18;
console.log(currentYear - 1991 > currentYear - 2018);