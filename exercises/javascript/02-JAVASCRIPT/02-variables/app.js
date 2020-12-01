/*
 var, let, const
 ES6 is now widely distributed and adapted in the browser all browsers
 let and const are more powerful and specific than var
*/

// var name = "John Doe"
// console.log(name)

// name = "Steve Smith";
// console.log(name)

/* Same variable two different console logs, 
with let & var value reassignment is possible
*/

// Our first log will be undefined as we have assigned no value
var greeting;
console.log(greeting)

greeting = "hello"
console.log(greeting)

// Variables can container or have letters, numbers, __, $
// Can not start with a number

// var 1name = "John"

// multi word vars
var firstName = "John"; // Camel case
var first_name = "Sara"; // Underscore
var FirstName = "Tom"; // Pascal case
var firstname


// LET
// Let and Var act the same with being to change the value of variables after they have been created.

let letName = "John Dole";
console.log(letName);
letName = "Steve Smith";
console.log(letName);

// CONST
const constName = "John";
console.log(constName)
// cannot reassign value
// name = "Steve"

// cannot declare without assigning a value
// const goodbye;

// CONST with OBJECTS
const person = {
    name: "Lewis",
    age: 400
}

person.name = "James"
// We can change the values of the keys in an object
console.log(person)
// But we cannot reassign the object itself
// person = true

// CONST with ARRAYS
// we can change the arrays values, but we cannnot REASSIGN the array
const numbers = [3, 234, 10, 6, 15]
numbers.push(7)
console.log(numbers)