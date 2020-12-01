// Event Bubbling & Event Delegation

// Event Bubbling
// an event will bubble up the dom through its parents
// in this example we see how for one click event on card title, it actually activates the parent click events as well.
// document.querySelector(".card-title").addEventListener("click", function(){
//     console.log("card title")
// })

// document.querySelector(".card-content").addEventListener("click", function(){
//     console.log("card-content")
// })

// document.querySelector(".card").addEventListener("click", function(){
//     console.log("card")
// })

// document.querySelector(".col").addEventListener("click", function(){
//     console.log("col")
// })

// NEED FOR EVENT DELEGATION
// const delItem = document.querySelector(".delete-item")
// delItem.addEventListener("click", deleteItem)

// Event Delegation
// putting an event listener on a parent and going down the DOM

document.body.addEventListener("click", deleteItem)

function deleteItem(e){
    
    // if (e.target.className === "fa fa-remove") {
    //     console.log("delete item")
    // }

    // this will not work as you have to match all the classes in what you are targetting
    // if (e.target.parentElement.className === "delete-item") {
    //     console.log("delete item")
    // }

    // Checks if what you are targetting's classList contains a class
    if (e.target.parentElement.classList.contains("delete-item")) {
        console.log("delete item")
        e.target.parentElement.parentElement.remove()
    }
}