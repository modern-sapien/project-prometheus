// Conditions && Comparisons

const id = 100

// EQUAL TO
// if (id == 101 ) {
//     console.log("correct")
// } else {
//     console.log("incorrect")
// }

// console.log("===================")

// // NOT EQUAL TO
// if (id != 101 ) {
//     console.log("correct")
// } else {
//     console.log("incorrect")
// }

// == is value // === is type && value

// != is not value // !== is not type && value


// Test if undefined
if (typeof id !== "undefined") {
    console.log(`The id is ${id}`)
} else {console.log("No Id")}

// GREATER or LESS than
// if (id > 101 ) {
//     console.log("correct")
// } else {
//     console.log("incorrect")
// }

// IF ELSE
const color = "purple"

// if (color === "red")    {
//     console.log("Color is red")
// } else if (color === "blue")    {
//     console.log("Color is blue")
// } else {
//     console.log("Color is not red or blue")
// }

// LOGICAL OPERATORS

const name = "Linda"
const age = 15

// AND &&
if (age > 0 && age < 12)    {
    console.log(`${name} is a kid`)
} else if (age >= 13 && age <= 19) {
    console.log(`${name} is a teen`)
} else {
    console.log(`${name} is an adult`)
}

// OR || 
if (age < 16 || age > 65)    {
    console.log(`${name} can not get a license`)
} else {
        console.log(`${name} is registered for the test`)
}

// TERNARY OPERATOR
console.log(id === 100 ? "Correct" : "Incorrect")

// If statements do not NEED curly brackets
if (age < 16 || age > 65)  
    console.log(`${name} can not get a license`)
else 
    console.log(`${name} is registered for the test`)
