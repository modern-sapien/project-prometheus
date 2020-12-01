// String Methods

const firstName = "Marcus";
const lastName =  "Aurelius"
const age = 36
const str = "         Hello there I hope you are doing groovy         "
const tags = "cool,funny,hilarious,intelligent,cheese"

let val;

val = firstName + lastName

// Concatenation
val = firstName + " " + lastName

// Append
val = "Brad "
val += "Traversy"

val = "Hello, my name is " + firstName + " " + lastName + " and I am " + age

// Escaping
val = 'That\'s awesome, I can\'t wait'

//Length
val = firstName.length

// concat
val = firstName.concat(' ', lastName)

// Change case 
val = firstName.toUpperCase()
val = firstName.toLowerCase()

val = firstName[0]

// indexOf()
val = firstName.indexOf("c")
val = firstName.lastIndexOf("c")


// charAt()
val = firstName.charAt(2)

// Get last character
val = firstName.charAt(firstName.length - 1)

// substring()
val = firstName.substring(0, 4)

// slice()
val = firstName.slice(0, 4)
val = firstName.slice(-3)

// split()
val = str.split(" ")
val = tags.split(",")

// replace()
val = str. replace("hope", "nope")

// includes()
val = str.includes("hello")

// trim()
val = str.trim()

console.log(val)