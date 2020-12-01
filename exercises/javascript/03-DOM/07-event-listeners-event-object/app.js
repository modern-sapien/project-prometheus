// Event Listeners & Event Object

// unnnamed click event
// HREF = "#" is the same as .preventDefault()
// document.querySelector(".clear-tasks").addEventListener("click", function(e) {
//     console.log("hello world")
//     e.preventDefault()
// })

// named click event
document.querySelector(".clear-tasks").addEventListener("click", onClick)

function onClick(e) {
    // console.log("clicked")
    let val;
    val = e;

    // Event target element
    val = e.target
    val = e.target.id
    val = e.target.className
    // DOM TOKEN LIST IS NOT AN ARRAY
    val = e.target.classList;
    
    // Changes inner text to whatever you like based on the event 
    e.target.innerText = "Hello";

    // Event type
    val = e.type;

    // Timestamp
    val = e.timeStamp;

    // Coords event relative to the window
    val = e.clientY;
    val = e.clientX;

    // Coords event relative to the element
    val = e.offsetY;
    val = e.offsetX;

    console.log(val)
}