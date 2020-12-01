// Mouse Events

const clearBtn = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");
const heading = document.querySelector("h5");

// Click *on release of click
clearBtn.addEventListener("click", runEvent)
// DoubleClick *on second release of click
clearBtn.addEventListener("dblclick", runEvent)
// Mousedown  *click & hold
clearBtn.addEventListener("mousedown", runEvent)
// Mouseup  *click & hold & on release is mouse up
clearBtn.addEventListener("mouseup", runEvent)
// // Mouseenter *tracks when mouse enters area of targetted item, only fires on initial parent element
// card.addEventListener("mouseenter", runEvent)
// // Mouseleave *tracks when mouse leaves area of targetted item, only fires on initial parent element
// card.addEventListener("mouseleave", runEvent)
// // Mouseover *tracks when mouse enters area of targetted item, but will trigger again when entering from an element within itself.
// card.addEventListener("mouseover", runEvent)
// // Mouseout *tracks when mouse leaves area of targetted item
// card.addEventListener("mouseout", runEvent)
// // Mousemove
card.addEventListener("mousemove", runEvent)

// Event Handler
function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`)

    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`
    document.body.style.background = `rgb(${e.offsetX}, ${e.offsetY}, ${e.offsetY})`
}