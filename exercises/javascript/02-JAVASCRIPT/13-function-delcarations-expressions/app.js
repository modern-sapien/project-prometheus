// FUNCTION DECLARATIONS

function greet(firstName = "John", lastName = 'Doe'){
    // if(typeof firstName === "undefined"){firstName = "John"}
    // if(typeof lastNae === "undefined"){lastNae = "Doe"}
    // console.log("Hello")
    return "Yo! " + firstName + " " + lastName
}

// console.log(greet("Lando", "Calrissian"))


// FUNCTION EXPRESSIONS
const square = function (x = 3) {
    return x*x
}
// console.log(square())


// IMMEDIATELY INVOCABLE FUNCTION EXPRESSIONS = IIFEs
(function() {
    console.log("Hello world");
}());

// PROPERTY METHODS
const todo = {
    add: function() {
        console.log(`Add todo...`)
    },
    edit: function(id)  {
        console.log(`Edit todo ${id}`)
    }
}

todo.delete = function() {
    console.log("Delete todo..")
}

todo.add();
todo.edit(22);
todo.delete();