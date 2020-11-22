// Window Object
// Window is the global object in client side javascript

// Methods // Objects // Properties
console.log(window)

// Alert
// alert("Hello world")

//Prompt // returns a string
// const input = prompt()
// alert(input)

// Confirm // returns a boolean
// if(confirm("Are you sure?"))    {
//     console.log("Yes")
// } else {
//     console.log("No way!")
// }


let val;

// Outer Height & Width
val = window.outerHeight
val = window.outerWidth

// Inner Height & Width
val = window.innerHeight
val = window.innerWidth

// Scroll points
val = window.scrollY
val = window.scrollX

// Location object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
// Reveals query parameters in URL
val = window.location.search;

// Redirect
function redirect() {
    window.location.href = "http://www.google.com"
}


// Reload
function reload()  { 
    window.location.reload() 
}

// History Object
val = window.history
val = window.history.length

// Run this when you have history and then enter in the URL of the site being served up
// window.history.go(-3)

// Navigator Object
val = window.navigator

val = window.navigator.appName

val = window.navigator.appVersion

val = window.navigator.userAgent

val = window.navigator.platform

val = window.navigator.vendor

val = window.navigator.language


console.log(val)