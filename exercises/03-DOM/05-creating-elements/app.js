// Traversing the DOM

let val; 

const list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection-item:first-child");

val = listItem;
val = list;

// Node Properties

// .childNodes
    // returns a node list
    // the li item itself is a childNode
    // as well as the text content within it
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;
    // 1 - Element
    // 2 - Attribute (deprecated)
    // 3 - Text node
    // 8 - Comment
    // 9 - Document itself
    // 10 - Doctype
    // 11 - Document Fragment Node

// .children element nodes
    // returns an HTML collection
val = list.children;
val = list.children[0];
val = list.children[2].textContent = "hello";

// children of children
list.children[3].children[0].id = "test-link";
val = list.children[3].children[0];

// first child
val = list.firstChild;
val = list.firstElementChild;
// last child
val = list.lastChild;
val = list.lastElementChild;
// count number of child elements
val = list.childElementCount;

// .parentNode
val = listItem.parentNode;
//  get parentElement
val = listItem.parentElement;
// get parentElement of parentElement
val = listItem.parentElement.parentElement;

// get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;
// moves down the list of children
val = listItem.nextElementSibling.nextElementSibling;

// get previous sibling
val = listItem.previousSibling
// previous sibling chaining
val = listItem.nextElementSibling.nextElementSibling.previousSibling


console.log(val)