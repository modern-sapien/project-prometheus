console.log("hello world")

console.log(1)

console.log(true)

const greeting = "hello"

console.log(greeting)

console.log([1, 2, 3, 4])

console.log({a: 1, b:2})

//  logs the object as a table
console.table({a: 1, b:2})

// displays information in the console as an error
console.error("This is an error.")

// clears the console
// console.clear()

// displays information in the console as a warning
console.warn("This is a warning")

// .time lets us time how long something takes to execute in the console
console.time("Hello")
    console.log("hello world")
    console.log("hello world")
    console.log("hello world")
    console.log("hello world")
console.timeEnd("Hello")