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
localStorage.clear()

document.querySelector("form").addEventListener("submit", function(e){
    
    const task = document.getElementById("task").value;
    let tasks;

    if(localStorage.getItem("tasks") === null)  {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.push(task);
   
    localStorage.setItem('tasks', JSON.stringify(tasks))

    console.log(task)

    e.preventDefault()
})

console.log(name, age)