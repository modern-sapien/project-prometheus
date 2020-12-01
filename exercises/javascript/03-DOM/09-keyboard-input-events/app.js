// Keyboard & Input Events
const form =  document.querySelector("form")
const taskInput =  document.getElementById("task")
const heading = document.querySelector("h5")
const select = document.querySelector("select")
// Clear input
taskInput.value = " "

// on submit
// form.addEventListener("submit", runEvent);

// keydown // tracks as you press a key down, will stay "one behind"
// form.addEventListener("keydown", runEvent);

// keyup // tracks as keys come up from being pressed
// form.addEventListener("keyup", runEvent);

// keypress // tracks as keys are pressed
// form.addEventListener("keypress", runEvent);

// focus // tracks as you click within a given input
// taskInput.addEventListener("focus", runEvent);

// blur // tracks as you click outside of a given input, after you have clicked within
// taskInput.addEventListener("blur", runEvent);

// cut // tracks as you cut from within an input
// taskInput.addEventListener("cut", runEvent);

// paste // tracks as you cut from within an input
// taskInput.addEventListener("paste", runEvent);

// input // any actions you make that are considered inputs will be tracked; typing, pasting, cutting
// taskInput.addEventListener("input", runEvent);

// Change // only works on selects aka dropdowns // to see this work in this example comment out Materialize CSS
select.addEventListener("change", runEvent)

function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`)

    console.log(taskInput.value)
    console.log(e.target.value)
    heading.innerText = e.target.value

    // e.preventDefault()
}