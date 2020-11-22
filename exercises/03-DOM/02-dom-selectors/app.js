/*
DOM Selectors
Single Element Selectors
    Will allow you to grab an element by its class or ID, and will return the first one it finds. 
    Only stores one thing.
Multiple Element Selectors
     Will return all of the elements with that class and return an element collection or node list.
*/

// document.getElementById()
console.log(document.getElementById("task-title"))

// Retrieve data from element
console.log(document.getElementById("task-title").id)
console.log(document.getElementById("task-title").className)

// Change styling
document.getElementById("task-title").style.background = "black"
document.getElementById("task-title").style.color = "white"
document.getElementById("task-title").style.padding = "10px"
// document.getElementById("task-title").style.display = "none"

// Change Content
document.getElementById("task-title").textContent = "Task List Dude"
document.getElementById("task-title").innerText = "My Inner Text Task"
document.getElementById("task-title").innerHTML = `<span style="color:red">Task List</span>`

// Assigning a targetted element into a variable for dryer manipulation
const taskTitle = document.getElementById("task-title")
// Change Content
taskTitle.style.background = "white";

// document.querySelector()
console.log(document.querySelector("#card-main-title"))
console.log(document.querySelector(".card-content"))
// will only return the first one it finds
console.log(document.querySelector("h5"))


document.querySelector("li").style.color = "red"
// can also target nested elements
document.querySelector("ul li").style.color = "purple"

document.querySelector("li:last-child").style.color = "red"
document.querySelector("li:nth-child(3)").style.color = "maroon"
document.querySelector("li:nth-child(3)").textContent = "Hello! Hello!"


// document.getElementById()