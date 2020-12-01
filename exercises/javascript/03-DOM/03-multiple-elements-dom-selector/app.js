/*
DOM Selectors
Single Element Selectors
    Will allow you to grab an element by its class or ID, and will return the first one it finds. 
    Only stores one thing.
Multiple Element Selectors
     Will return all of the elements with that class and return an element collection or node list.
*/

// Class Name targetting
// RECEIVES all elements by the class name globally
const items = document.getElementsByClassName("collection-item")
// console.log(items)
// console.log(items[0])
items[0].style.color = "white"
items[3].textContent = "Goodbye!"

// users query selector to hone the search in to not return all elements globally.
const listItems = document.querySelector("ul").getElementsByClassName("collection-item")

// Tag Name Targetting
let lis = document.getElementsByTagName("li")

lis[0].style.background = "red";
lis[3].style.background = "purple";

// Convert HTML collection into an array
lis = Array.from(lis)
lis.reverse()

lis.forEach(function(li, index) {
    // console.log(li.className)
    li.textContent = `${index}: Hello`
})


// querySelectorAll returns a Node List, and has inherent array methods on it
let sameItems = document.querySelectorAll("ul.collection li.collection-item")
sameItems = document.querySelectorAll("li.collection-item")

sameItems.forEach(function(item, index) {
    item.textContent = `${index}: Hello Hello`
});

const liOdd = document.querySelectorAll("li:nth-child(odd)")
const liEven = document.querySelectorAll("li:nth-child(even)")

liOdd.forEach(function(item, index) {
    item.style.background = `grey`
});

for (let i = 0; i< liEven.length; i++)  {
    liEven[i].style.background = "yellow"
}

console.log(sameItems)
