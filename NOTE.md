This is a NOTE about things to remember when using Javascript

Always declare initial variables at the top of the page

## NOTES TO KEEP IN MIND
AHA - AVOID HASTY ABSTRACTIONS
DRY - DO NOT REPEAT YOURSELF

    Red green, refractor;
    then refractor

Prompts generate strings
Confirms generate booleans

## Variables
    strings - "letters2342!" < almost anything can be in a string also you can access this like an array

    numbers - numbers are numbers, you understand this. sometimes you have to declare it though.

    booleans - true or false, those are your options. it happened or it didn't happen.

    array - ["thing", "123", "billy"] this can store information more effectively than a string, but you will have to translate this information in order to use.

    objects - can store all of the above as well as, functions, very powerful and cool.


## Conditions

true === true
false === false
"4" === 4 *false
4 == "4" *true
(("5" + "5") === "55") *true

if (false) {
        alert("the neighborhood");
      }
      else {
        alert("one direction");  <<< alerts this>>>
      }
 ((6 + "5") === "65") * true


## IF/ELSE statements

if (thisThing) {
    (thisHappens);
} else if {
    (thisOtherHappens);
}
   else {
       (noneOfTheOtherStuffHappened)
   }


## ARRAYS
 itemArray[1]   < 1 indicates item position
 itemArray = ["Zebra", "Rhino", "Giraffe", "Owl"]
                [0]      [1]       [2]      [3]
 itemArray.length = 4 << amount of items in array

 itemArray[5] = undefined, nothing present in the list 

 Lion = -1 < occurs outside of the list somewhere
 
## extended example
accessing an array within an array

      // Rows of Students
      var studentsRow1 = ["Rachelle", "Jacob", "Jerome", "Greg", "Matt", "Walt"];
      var studentsRow2 = ["Jeremiah", "Luis", "Nathan", "Analben"];
      var studentsRow3 = ["Aisha", "Stephen", "John"];

      // Entire Class
      var entireClass = [studentsRow1, studentsRow2, studentsRow3];

      console.log(entireClass[2][1])  
      logs third student, row 2, Stephen



## FOR LOOP!
for (variable = 0; variable < number; variable++ ) {do this thing that number of times}

example:

var coolPeople = ["bruce lee", "arnold schwarzenegger", "will smith", "esther", "marie curie", "joan of arc"];

for (i = 0; i < coolPeople.length; i++) {
    console.log(coolPeople[i]);
}  this will link through the variable ONE time for each item in the array, try it.

A MORE CONCISE EXAMPLE
    for (var i = 0; i < 5; i++) {
    console.log("I am " + i);
    }

## FUNCTIONS
    A function definition consists of the 
        function keyword; a list of parameters to the function, enclosed in parenthesis and separated by commas; and the javascript statements that define the function enclosed in curly brackets
    example-
        function descriptiveLabelForFunction(anythingAsWell) {
            return number + number;
        }

## OBJECTS 
    * An object is a variable with information stored inside of it. 
        example-
        var madmax = {
            "key": "To the left is a key, to the right is a value.",
            "real name": "Max Rockatowski",
            "numer of films": 4,
            "name of films": [
                                "Mad Max",
                                "Mad Max 2",
                                "Mad Max Beyond Thunderdome", 
                                "Mad Max Fury Road" ],
            "location": "Post Apocalyptic Australia",
            "limp walk": true,      
                    "weapons": {
                    "shotgun": "double barreled",
                    "gasoline": "pouring it on enemies",
                    "fists": "for punching"
                    }  };
    * Can acccess properties with bracket notation if the KEY has spaces.
        example-
        console.log(madMax["real name])
    * Or you can use dot notation if there are no spaces
        example-
        console.log(madMax.key)
    * Or a variable that matches name of property
        example-
        console.log(madMax[walkStyle]) 
    * You can access arrays & their properties from an object
        example- 
        alert(madMax.weapons.length)
    * Objects can contain objects. You can access those object by chaining dot or bracket notation
        example-
        console.log(madMax.favoriteSong.artist)
        console.log(madMax["favoriteSong"]["name"])

## METHODS I KNOW LIST

# parseInt() joins strings into numbers

    example-    
    var catAge = 22
    alert(parseInt(catAge)+ 2) = 24
                vs
    alert(catAge + 2) = 222

# indexOf() 
returns the first index at which a given element can be found in the array, or -1 if it is not present.

    example
    bands = ["band1", "band2", "band3"]
    userBand = prompt("Who is your favorite artist?);

    if (bands.indexOf(userBand) !== -1) {   
        alert("this means, if userBand is NOT EQUAL to -1 (outside of the array) then this alert will occur")}

# toLowerCase() 
converts a string to lowercase letters, this method does not change the original string.
    example-
    var drinks = ["Coke", "Pepsi", "Water", "Orange Juice"];
    console.log(drinks[1].toLowerCase())

# toUpperCase() 
converts a string to uppercase letters, this method does not change the original string.

    example-
    var drinks = ["Coke", "Pepsi", "Water", "Orange Juice"];
    console.log(drinks[1].toUpperCase())

# charAt() 
method returns a new string consisting of a single UTF-16 code unit located at the specified offset into the string

    var characterString = "abcdefghi"
    console.log(characterString.charAt(3))
     // console.log = "d"

# Math.floor()
returns a number rounded to the lowest whole number.

    example-
    console.log(Math.floor(2.9999999999))
    logs 2

# Math.random() 
function returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1)
    example-
    console.log(Math.random());
    logs a decimal between 0 & 1

    console.log(Math.floor(Math.random()*10)+1);
    logs a decimal beteween 1 & 10

## .push 
Add a new item to an array

    example-
      var favFruits = [];
      var newFruits;
      newFruits = prompt("Can you suggest a fruit for me?")
      favFruits.push(newFruits);
      console.log(favFruits)

## typeof
returns a string indicating the type value that follows it >
    example-
    var maybeString = "thisIsaString"
    if (typeof x === "string") {
        console.log("That's a string!)
    }

## setTimeOut
will do something for a period of time and then close. 


## ##################################################################################
## DOM & LOCAL STORAGE
## ####################################################################################

## This, The Window, & the DOM
    DOCUMENT OBJECT MODEL

    console.log(this) or typing window directly into the console log
    Opens the window object

    The window object contains a myriad of properties and objects made for gathering and manipualting information with the DOM. We access these properties by using the same skills we learned in earlier stages with functions & arrays. We can do more than access data from the window, we can edit it, create it, & remove it. 

    && This doesn't even include how we use local storage to manipulate data further.

## Traversing
    querySelector
    select

## childNodes vs children targeting
    PAY ATTENTION TO THE DIFFERENCE

    <div id="main">                       THIS ENTIRE CONTENT is childNode[0]
    <h1>Welcome to World News</h1>      children[0] ** childNode[1] ** childNode[2]
    <h2>Here is Your Daily Update</h2>  children[1] ** childNode [3] ** childNode[4]
    </div>


## MANIPULATING THE DOM // when creating an element
    Creating elements, is cool, but you just can't create them you have to follow a THREE step process to make sure they show up on your page. 

    On a blank HTML page with only body tags try this practice
        -example
        << This will create the element
        var h1El = document.createElement("h1); 
        
        << This creates the content inside the h1
        h1El.textContent = "This is the h1 content";
        
        << This adds the new element as a child to the target we set
        document.body.appendChild(newH1El); 
        << this style the element we created.


## MANIPULATING THE DOM // styling an element
setAttribute 
    Adds an attribute to an existing element
    
    example- ** use this with the example above
        newH1El.setAttribute("style", "margin-left: 30%", "width: 50%") 

## DOM Events
     are sent to notify code of interesting things that have taken place. Each event is represented by an object which is based on the Event interface, and may have additional custom fields and/or functions used to get additional information about what happened


    non-exhaustive event list
        - input, any time something changes in our input
        - click         -blur
        - mouseenter    -keyboardEvent
        - mouseleave    -mousedown
        - keydown       -keyup

## ETC.

## FUNCTIONS

setInterval() 
    function is commonly used to set a delay for functions that are executed again and again, such as animations.
    -example
    setInterval(function() {console.log("yo yo");}, 500)
    every half second logs "yo yo"

addEventListener("typeOfEvent", function) { } 
    When you target a element, class or id with an event listener you create a way to activate a function or action that is then performed

clearInterval()
    function that stops the time of a thing.

parseFloat()
    useful in converting from an input (which is usually logged as a string) into a a number

event.preventDefault()
    prevents resetting of a user agent or page's information 


## DOM MANIPULATION

DYNAMICALLY creating elements

Step 1. target element with an id
            run get elementById

Step 2. create child
            add content

Step 3. append to existing element
    targetDiv.appendChild(newDiv);

## LOOP example of creating a list 
## ///////////////////////////////
   Using a loop example to create a list based on an array
     for (var i = 0; i < drinkList.length; i++) {
        newDrinkPEl = document.createElement("p");
        newDrinkPEl.textContent = drinkList[i];
        ultraDrinkList.appendChild(newDrinkPEl);
        }

##  ||||||||||||||||||||||||||||||||||||||
## THIRD PARTY APIs
##  ||||||||||||||||||||||||||||||||||||||
##      jQuery
##  ||||||||||||||||||||||||||||||||||||||

jQuery keeps the three step process above
    cross platform javascript library
    
    jQuery was written to simplify the process that are difficult in javascript

Tasks You Can Complete with Jquery
    inserting, updating or removal HTML
    registering click or other change events
    animating HTML elements
    downloading from databases

CDN - content delivery network
We have to link with jQuery library just above our lower body tag.

$ = jQuery = when you think jQuery, think dollar signs
$("#clickMe)

Make sure jQuery script lives within 
$(documnet).ready(function, ()      {}); this insures that your script doesn't run until the page is loaded.


ITERATION ONE
 $("#target").html("<h1>Hello friends</h1>)";
 $("#target").append("a please to meet you!");

ITERATION TWO
var newDiv = $("<div>");
newDiv.text("a pleasure to meet you!!");

FOR LOOP with jQuery
var drinksOptionsEl = $("#drink-options"); // targeting element

    for (var i = 0; i < drinkList.length; i++) {
      console.log(drinkList[i]);               //logs array we are going through
      var newListEl = $("<div>");              // declares a new element
        newListEl.text(drinkList[i]);         // adds text to that element based on iteration
      $("#drink-options").append(newListEl);  //adds to parent element
    }

## Creation of Divs & images using jQuery
    $("<div> this is a div with text inside of it </div>")
    
    $("<div>" + drinkList[i] + "</div>") 
    
    $("<im src=' asdfasd ' alt= ' ' >)

    var imageEL =$("<img>");
    imageEl.attr("src", " afsd");
    imageEl.attr("alt", "this is the alt content")


## Creation of classes
## add class appends, versus added that may OVERRIDE
thingThing.addClass(classOne)   

thisThing.attr("class", ".classOne, .classTwo, .classThree);

## Text context

thingThing.text(anotherThing[i]) <<< TEXT DOES NOT NEED QUOTES if a value

## Anonymous Callback Functions & Eventlistening
BODY has h3 class="click-me"

$(document).ready(function() {             << make the document ready for event listeners

$("#click-me).on("click", function() {
    alert("i've been clicked); });
}): <<< closes pages


FUNCTIONS for jQuery

.empty() removes all child nodes

.on("selector") lets you filter by descendants when targeting

.prepend() adds a child to the beginning

.append() adds a child to the end 


## =====================================
## AJAX
## =====================================
Asynchornous Javascript & XML
$.ajax({url: query
Url, method: 'GET'})
.done(function(response) {
    console.log(response);
})

Allows us to make API calls from the browser
It allows us to call for objects using two paramters; URL & method

Ajax returns a PROMISE.
PROMISES are a way to handle asynchronicity.

.then is a promise

        example -

        var title = "space+jam";
        var queryURL = "https://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy";

        $.ajax({                                                     
        url: queryURL,                                                 << URL 
        method: "GET"                                                  << Method
        }).then(function(response) {                            << defined a parameter
        console.log(response);                        << will always be the response object
        console.log(response.Runtime);                          << accessing the parameter
        });

$.ajax already parses the information coming from an API.

## ==================================================================
## LEXICAL SCOPE    =====================

If something is not defined, it either has no value or exists outside of the scope of the function it is attached to.

## ================================================================
## JSON ==================================================
Javascript Object Notation
- Javascript objects used as a //data interchange format\\
- JSON is a standardized format that allows us to do that.
- operates using keys
    -JSON stringify allows an array of objects with a corresponding key to be passed into local storage
    -JSON parse allows the stringified version of local storage to be reformatted back into an array.


## ================================================================
## API ==================================================
Query Parameters
- We get different data back when we access different URLs

- we can use pre-built code for accessing and sending data to centralized databases 
- or use pre-built code for creating or utilizing other software components
-interfacing with physical hardware

API key
- Should be unique to you or your project to access APIs
- "trilogy" is our corporate API key

    example- 
    TO use an API key start from base URL
    http://www.omdb.api.com

    first query parameter will always start with a ? mark
    http://www.omdbapi.com/?

    http://www.omdbapi.com/?t=
    # first key value starts with a question mark
    http://www.omdbapi.com/?t=hellraiser

    http://www.omdbapi.com/?t=hellraiser&apikey
    # additional API key value pairs are preceded by an ampersand
    http://www.omdbapi.com/?t=hellraiser&apikey=trilogy

URL Encoding
    Some special characters are reserved within urls, so when we are using APIs and trying to access specific information about something with a " " or a "&" we log keys like %20 for a space or %26 for &.

## ===============
## Node.JS  ======
## ===============

You can no longer accept user inputs through alerts, prompts, confirms.
We have to use process.argv to accept user inputs from the command line.    Any user input will begin at process.argv[2].

You can enter information via the command line by using node & whatever .js file you are manipulating.

process.argv returns an array [
    the first position is where node is located on our machine
    the secdon position is the location of the file we are currently running
]

node _____.js  [position2]   [position3]
^^^^ adds to the array which gives us more functionality to interact with command line.

    Can use console.log to setup basic functions in the command line using process.argv

To Use A Module
1. A module must be exported, always an object
        module.exports = {
            pie: pie,
            predictable: predictable
        }

2. A module must be imported
        const fs = require("fs")   
        console.log(badmath.pie);

Some modules are built into NODE
    fs or FileSystem is built into node
    no installation required, but you still have to import it into your project.

    const fs = require("fs");

Some modules are NOT built into NODE
    Inquirer is one such module
    when a module is "packaged" up for distribution we call it a package.
    
    Packages are hosted on npmjs.com

    By selecting to npm install "_______" a particular package after initializing, we have declared it as a dependency. This helps us & others keep track of what is helping us run the current .js 

Process for installing 3rd party package
    1. npm init (-y), -y is optional, but answers yes to all questions. Creates package.json in the root of the directory.

    2. npm install **package name** (should see node_modules folder & package-lock.json) || confirm installation in package.json dependencies

    By downloading node packages we can expand our abilities to build using the work of others to further our own project's functionality. 

Exports/Imports

    Exports are always an object.
    Imports

## ==============
## ES6 ============
## ==============

ECMAScript or JavaScript 6
Introduced new features in 2015 

Javascript =>
    Implicit return,
    If an arrow function only has one parameter, we can omit the curly braces & return it if the body only contains one expression

    -example
    var createGreeting = (message, name) => message + ", " + name + "!";

    1. When  defining functions on objects (methods). USE THE "FUNCTION" KEYWORD
    2. When using functions INSIDE of a method, you can use arrow functions to scope this to a parent object.
    3. NEVER DEFINE YOUR METHODS using ARROW FUNCTIONS

JavaScript let
    allows variables to exist within a block temporarily
    let has better scoping than var as let is more specific

JavaScript const
    const doesn't mean contant value, it means constant reference
    
    unlike primitives objects & arrays are passed by reference rather than value, so you can update arrays & objects BUT not primitives

    CONST until you can't

Functional Loops
##  .forEach() 
    -example
        const moviePatrons = [
        { name: "Tom", age: 16 },
        { name: "Ashley", age: 31 },
        { name: "Sarah", age: 18 },
        { name: "Alvin", age: 22 },
        { name: "Cherie", age: 14 },
        { name: "Malcolm", age: 15 }
        ];

    moviePatrons.forEach(patron => console.log(patron.age));
    for each of the patrons in the array, we console logged the age.

##  .filter()   lesson 09-activity 22
    Filter lets you loop over an array and remove elements, and filters the values that match the true case.

    -example lesson 9, activity 17
        var evenNumbers = filter(numbers, function(currentElement) {
        return currentElement % 2 === 0;
        });

        console.log(evenNumbers);

##  .map()  lesson 09-activity 22
    Map lets you loop over an array and modify the elements inside
    This will return a new array, but will also impact the previous array.

    -example lesson 9, activity 17
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    var doubled = map(numbers, element => {
    return element * 2;
    });

    console.log(doubled);

##  .reduce()   
*adds up all numbers in an array

##  .split()   
    Split a string into an array of substrings based on what is inside of the (" ") split, an empty space would be a space & returns an array.

    -EXAMPLE    
    const string = "How are you doing today?
    let res = string.split(" ")


## waitFor(seconds, cb)


## rest     ...
    Lesson 9, Activity 27
    used with for of loop - method overloading

    Rest operator lets you overload uses responss
    -EXAMPLE
        function add(...nums) {
        let sum = 0;
        for (let num of nums) sum += num;
        return sum;
        }

        add(1); // => 1
        add(3, 3); // => 6
        add(1, 1, 4, 5); // => 11

## spread   ...
        Spread operator unzips Mary Poppins Bag
    -EXAMPLE
        const dragons = ["Drogon", "Viserion", "Rhaegal"];
        const weapons = ["dragonglass", ...dragons, "wildfire"]; // notice the spread operator ...dragons

        console.log(weapons); // prints ["dragonglass", "Drogon", "Viserion", "Rhaegal", "wildfire"]


## Template Literals
    aka string interpolation
    console.log(`This is a regular string`)
    Allows us to inject values within `template literals using ${object.key}`
    Are an alternative to string concatonation

        const music = {
        artist: "Qual",
        album: "Ultimate Climax",
        title: "Take Me Higher"
    };

    const songSnippet = `
    <div class="song">
        <h2 class="title"> ${music.title} </h2>
        <h1 class="artist" style="color: red"> ${music.artist} </h1>
        <h2 class="album"> ${music.album} </h2>
    </div>
    `;

## Destructuring
    When you destructure an object it is at the same level of the const.
    
    Allows us to pull information out of an object & set it equal to the object's key & then access those objects properties without declaring individual NEW variables. 

    -EXAMPLE
    API call
    const {restaurantName, location, hours, pricing, reviews, rating} = response.data;

    -EXAMPLE
    lesson 9 activity 29
        const arya = {
            name: "Arya Stark",
            parents: ["Eddard Stark", "Catelyn Stark"]
            };
        const {name, parents} = arya

        console.log(name); // prints `"Arya Stark"`
        console.log(parents); // prints `["Eddard Stark", "Catelyn Stark"]`

        We can also do it within function definitions as well

        const logCharacter = character =>
        console.log(
        character.name +
        "'s parents are: " +
        character.parents[0] +
        " and " +
        character.parents[1] +
        "."
    );

    logCharacter(arya);

## Promises
========================================================
return new Promise << that's how we create a new promise
It takes in two parameters (resolve, reject).

MUST USE .then with .catch otherwise your code will break

Lesson 9 Activity 34

    -EXAMPLE
    function waitFor(seconds, cb)   {
        if (isNaN(seconds) || seconds < 1 ) {
            return cb(Error("Parameter 'seconds' must be a positive number!"));
        }
    setTimeout(function()   {
        cb(null, "success!");
    }, seconds * 1000);
    }

    waitFor(2)
    .then((response) =>{
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    })
=======================================================

## async, await
    async & await functions different way to write promises
    must delcare that it is an async function at the outset
        followed by two blocks
        try
        catch
    await means we WAIT until the action completes, if it resolves successfully we assign it to a variable.

    Lesson 9 activity 38
    async function getMovie()   {
        try { const { movie} = await inquirer.prompt({
            message: "search a movie:",
            name: "movie"
        });
        const { data } = await axios.get(
            `https://www.omdbapi.com/?t=${movie}&apikey=trilogy`
        );}
    } etc. etc. etc.


## unorganized
Axios makes API calls within a node and reduces CORS issue

Promises
If I add .then, I must add .catch (will prevent your node code from breaking)
    -EXAMPLE
    .catch((err) => {
        console.log(err)
    });

Util converts call back functions to promise functions, when you use promises you add .catch

util.promisfy() makes things into a promise

promise.all()

## Interview Question
How do you get out of call back hell?
Promises

## OOP object oriented programming
Is a paradigm or pattern of programming centered around objects

How can objects work together to solve problems?
    * encapsulation
    * abstraction
    * inheritance
    * polymorphism

Javascript is a scripting language, functinal programing, but we can write it in an object oriented fashion.

## Constructor
Constructors are like blueprints.
    * activity 1 & 2
    * with a constructor we can make new objects any time we want.
    * when we define a constructor function, we [capitalize] the first letter.
    * limitless amount of parameters we can add.
    * the resulting object that comes out of a constructor is an instance.

    If you are building constructors and you want to chain methods
    Lesson 10, Activity 8
    return new Arithmetic(newNumber);

    -EXAMPLE
    function Animal(raining, noise) {
    this.raining = raining;
    this.noise = noise;
    this.makeNoise = () => {
    if (this.raining === true) {
    console.log(this.noise);
        }
      };
    }

    const dogs = new Animal(true, "Woof!");

## Prototypes
Are always there but are hidden; objects, arrays & primitives are all prototypes.

### =================
## TDD - Test Driven Development
### ==================

Tests force us to write better, more understandable, more maintainable code.

The package we are testing with is called Jest

Describe & it blocks, only one it block inside of each describe.
Lesson 10, Activity 08

1.  Saving Methods
    Save tests as a .test.js file
    Save those tests in a test folder

2.  Testing methods 
    THREE STEP PROCESS FOR WRITING UNIT TESTS
    Lesson 10, Activity 09
    * Arrange
    * Act
    * Assert

3. Testing Methods Continued
We test for both positive & negative cases

You can test code for third party packages
Lesson 10 - Activity 15

Mock STEPS
Mocks are used inside of a unit test to hold the place of an existing function, we do not control.
LESSON 10, Activit 13
1. create mock implementation by spying on existing function

2. Setup a mock implementation. Empty arrow function. Don't do anything

3. We expect the mock to have been called

4. Restore the mock at the end of the test.
