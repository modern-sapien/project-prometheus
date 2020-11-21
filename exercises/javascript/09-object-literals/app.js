// Object Literals

const person = {
    firstName: "Johan",
    lastName: "Brohan",
    age: 45,
    email: "jbrohan@gmail.com",
    hobbies: ["music", "cooking", "birdwatching"],
    address: {
        city: "Atlanta",
        state: "Ga"
    },
    getBirthYear: function()    {
        return 2020 - this.age
    }
}

let val;

val = person;

// get specific value
val = person.firstName
val = person["firstName"]
val = person.age
val = person.address.city
val = person.getBirthYear()

console.log(val);


const people = [
    {name: "Margot", age: 23},
    {name: "Julie", age: 28},
    {name: "Nancy", age: 32}
]

for (let i = 0; i < people.length; i++) {
    console.log(people[i].name)
}