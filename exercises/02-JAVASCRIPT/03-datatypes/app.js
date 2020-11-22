
/* 
DATA TYPES
Primitive and Reference

Primitive Data Types:   
    *   Stored directly in the location the variable accesses
    *   Stored on the stack
    *   You access it by its actual value
    *   SIX
        *   String
        *   Number (decimals and floats count here)
        *   Boolean
        *   Null
        *   Undefined (variable that has not been assigned a value)
        *   Symbols (ES6)

Reference Data Types:
    *   Accessed by the reference
    *   Objects that are stored on the heap
    *   A pointer to a location in memory
        *   Arrays
        *   Object Literals
        *   Functions
        *   Dates
        *   Anything else you can store will be a reference type

*/

//STRING
const name = "John Doe"

// Number
const age = 23

// Boolean
const hasKids = true

// Null // null typeof will come back as object due to an inherent error in javascript
const car = null

// Undefined
let test;

// Symbol
const sym = Symbol()

console.log(typeof name)
console.log(typeof age)
console.log(typeof hasKids)
console.log(typeof car)
console.log(typeof test)
console.log(typeof sym)

/*
Javascript is a Dynmically Typed Language
    *   Types are associated with values NOT the variables
    *   Same variables can hold multiple types unlike "statically typed" languages like Java, C#, C++
    *   There are superset
*/

// Array
const hobbies = ["movies", "music"]

// Object Literal
const address = {
    city: "Atlanta",
    state: "Georgia",
    zipcode: 30310
}

const today = new Date();
console.log(today);

console.log(hobbies);
console.log(address);
console.log( typeof today);