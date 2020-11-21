// General Loops

// FOR LOOP
// for (let i = 0; i < 10; i++)    {
//     // console.log(i)
//     if (i === 2)    {
//         console.log(`2 is my favorite number`)
//         // continue replaces the call we normally would have logged
//         continue
//     }
//     if (i === 5)    {
//         console.log("Stop the loop")
//         break
//     }
//     console.log(`Number ${i}`)
// }


// WHILE LOOP
// let i = 0

// while(i < 10)   {
//     console.log(`number ${i}`)
//     i++
// }

// DO WHILE a DO WHILE loop will run no matter even if the condition has already been or cannot be met.
// let i = 0

// do {
//     console.log(`number ${i}`)
//     i++
// }

// while(i < 10)

// Loop through an array
const cars = ["mustang", "camarao", "civic", "taurus"]

// for (let i = 0; i < cars.length; i++)   {
//     console.log(cars[i])
// }

// FOR EACH
// cars.forEach(function(car, index, array){
//     console.log(`${index}: ${car}`)
//     console.log(array)
// })

// MAP
const users = [
    {id: 1, name: "Mary"},
    {id: 2, name: "Barry"},
    {id: 3, name: "Larry"},
    {id: 4, name: "Jerry"},
    {id: 5, name: "Carey"},
]

// const ids = users.map(function(user){
//     return user.id
// })

// console.log(ids)


// FOR IN LOOP
const user = {
    firstName: "Jimmy",
    lastName: "Ballon",
    age: 67
}

for (let x in user) {
    console.log(`${x} : ${user[x]}`)
}