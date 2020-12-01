// REPLACE ELEMENT

// Create element
const newHeading = document.createElement("h2")
// Add id
newHeading.id = "task-title"
// New text node
newHeading.appendChild(document.createTextNode("Task List"))
// Get old heading
const oldHeading = document.getElementById("task-title")
// Parent
const cardAction = document.querySelector(".card-action")
// Replace
cardAction.replaceChild(newHeading, oldHeading)


// REMOVE ELEMENT
const lis = document.querySelectorAll("li");
const list = document.querySelector("ul")
// Remove list item
lis[0].remove()
// Remove child element
list.removeChild(lis[3])

// CLASSES & ATTR
const firstLi = document.querySelector("li:first-child")
const link = firstLi.children[0]
let val;
// CLASSES
// gives us available classes in a string
val = link.className
// gives us a list of classes in a DOM token list, not an array
val = link.classList[1]
// add a class using classList
link.classList.add("test", "balloon")
val = link
// remove a class using classList
link.classList.remove("test")
val = link

// ATTRIBUTES
// get attribute // gives us the hash
val = link.getAttribute("href")
// sets attributes
val = link.setAttribute("href", "http://google.com")
link.setAttribute("title", "Google")
// checks for attribute - true or false
val = link.hasAttribute("title")
// removes an attribute
val = link.removeAttribute("title")

val = link

console.log(val)