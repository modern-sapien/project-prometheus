// Arrays & Methods

const numbers = [55, 23, 378, 51, 4, 99]
const numbers2 = new Array(12, 12312, 4545, 123, 96)
const fruit = [ "apple", "banana", "orange", "peach" ]
const mixed = [ 22, "apple", false, "banana", "orange", {a:1, b:1}, new Date(), "peach" ]

let val;

// Get array length
val = numbers.length

// Check if is array
val = Array.isArray(numbers)

// Get single value
val = numbers[3]
val = numbers[0]

// Insert into array
numbers[2] = 100

// Find index of value
// val = numbers.indexOf(51)


// Mutate Arrays
// Add on to end
numbers.push(245)

// Add on to front
numbers.unshift(4)

// Take off from end
numbers.pop();

// Take off from front
numbers.shift()

// Splice values
numbers.splice(1, 3)

// Reverse
numbers.reverse()

// Finding the index based on a given value
val = numbers.indexOf(36)

// Concat // joins the two arrays together
val = fruit.concat(numbers)

// Sorting arrays
val = fruit.sort()
val = numbers.sort()

// Use the "compare function"
val = numbers.sort(function(x,y)    {
    return x- y
})

// Reverse sort
val = numbers.sort(function(x,y)    {
    return y- x
})

// Find 
function under50(num)   {
    return num < 50
}
val = numbers.find(under50)

// Join lets you make an array into a string and choose the separator
val = numbers.join(" ")


console.log(numbers)
console.log(val)