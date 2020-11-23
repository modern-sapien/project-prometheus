// Local Storage && Session Storage
// same commands for local storage and session storage

// SET LOCAL STORAGE ITEM
localStorage.setItem("name", "Maria")
localStorage.setItem("age", "66")

// SET SESSION STORAGE ITEM
// session storage does not persist if the browser is reloaded
sessionStorage.setItem("name", "Julia")

// REMOVE FROM STORAGE
// targets the key and subsequent values you want to remove
// localStorage.removeItem("name")
// sessionStorage.removeItem("name")

// GET FROM STORAGE
const name = localStorage.getItem("name")
const age = localStorage.getItem("age")

// CLEAR LOCAL STORAGE
// localStorage.clear()

document.querySelector("form").addEventListener("submit", function(e){
    // Target the input
    const task = document.getElementById("task").value;
    // Declare the array we will be using
    let tasks;
    // Check if local storage has anything in it
    if(localStorage.getItem("tasks") === null)  {
        tasks = [];
    } else {
    // If yes, then parse it from JSON and return it to the array
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    // Add the current task to the array
    tasks.push(task);
    // Stringify the array and set into local storage
    localStorage.setItem('tasks', JSON.stringify(tasks))

    console.log(task)

    e.preventDefault()
})

// We need to get the item from local storage and parse it so that we can use it as an array
const tasks = JSON.parse(localStorage.getItem("tasks"))

tasks.forEach(function(task)    {
    console.log(task)
})