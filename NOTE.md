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

## FOR IN LOOP!
Unit 10 Activity 20
FOR IN iterates through an object to pull keys & values

    -EXAMPLE
    printInfo() {
        for (const key in this) {
            console.log(${key}: ${this[key]}`);
        }
    }
    when called on an object would log key value pairs. KEY: VALUE

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


## NOTES ON HTTP

    Hyper Text Transfer Protocol

    Communication between web servers & clients

    HTTP Requests / Responses
        Server response/ cycle
            Server takes in requests & sends back in response
            Sends a status code with the response
        Includes header & body

    Different routes, with different urls and different methods
        Should do different things

    Headers reveal data related to the client and the server; content type, powerered by, connection, etc.

HTTP Status Codes

    1.XX    Information             1.XX Informational
    
    2.XX    Success                 4.XX Client Error
    200     Success                 400 Bad Request
    201     Created                 401 Unauthorized
    204     No Content              404 Not Found

    3.XX    Redirection             5.XX Server Error
    304     Not Modified            500 Internal Server Error



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
Callback functions answer, what do you want me to do next?
They take a callback function as an argument.
They all take time to complete which is why asynchronicity becomes something you have to navigate.

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
For futher node.js resources FIND MY REPO nodejsbasics.js, it has files to run and manipulate that will help you garner a better understanding of node.js

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

## MODULES

To Use A Module
1. A module must be exported

        module.exports = {
            pie: pie,
            predictable: predictable
        }

        module.exports = variable;
        module.exports = function();

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

    Exports are generally objects, but can be strings, booleans, whatever variables. If you want to export an array set it inside of an object and DECONSTRUCT that object on import.
            UNIT 10 Activity 23 video 9.28 ES6 5/6

    Imports

### inquirer
    inquirer is a package that allows us to obtain input from a user in the command line that we can then use to build with like we would with prompts/confirms, etc.

    We use inquirer by requiring it in our Node.js file.

    -example
    inquirer.prompt([
        {   name: "searchTerm",
            type: "input",
            message: "What kind of joke would you like to hear?"}
    ]).then(({searchTerm}) => {
        console.log(searchTerm)
    })
        logs banana
### utils
    Video 9.24 3/8
    requiring util to promisify functions

    -example
    const writeFileAsync = util.promisify(fs.writeFile)

    writeFileAsync("index.html", htmlString).then(()=>  {
        console.log("Successfully wrote file.");
    }).catch(err => {
        console.log(err)
    })
    })

    You still have to pass in the same arguments as a previous function, but instead of a callback function you chain .then() & .catch().

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
    This will return a new array, but may also may impact the previous array, in the case of adding values to an array of objects.

    -video example - 9.24 video 1/8
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

## hasOwnProperty()
    innate method on every object where you can check in true or false if an object has a certain property.

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

## OOP object oriented programming
Is a paradigm or pattern of programming centered around objects

    data-types objects:
        arrays, date, Math, functions
    
    primitive types are NOT object:
        boolean, null, undefined, number, string, symbol

How can objects work together to solve problems?
    * encapsulation
    * abstraction
    * inheritance
    * polymorphism

Javascript is a scripting language, functinal programing, but we can write it in an object oriented fashion.

## Constructor
Constructors are like blueprints for objects.
    * activity 1 & 2
    * with a constructor we can make new objects any time we want.
    * when we define a constructor function, we [capitalize] the first letter.
    * limitless amount of parameters we can add.
    * the resulting object that comes out of a constructor is an instance.
    * You can not call methods off of the constructor, you have to call it off of the instance.

    * Getters & Setters
      This is more typical in a strongly typed langauge like Java.
      Restricts how we access values with objects. This also limits what can be on the object.
      -EXAMPLE
        getAge();
            return this.age
        setAge();
            this.age = age
    
    If you are building constructors and you want to chain methods
    Lesson 10, Activity 8
    return new Arithmetic(newNumber);

    Lesson 10 Activity 2
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

    Chaining constructor methods == 
    Video Example Testing with Jest 5/10
    Unit 10 Activity 8

## Classes & Constructors
Unit 10 Activity 18

Classes are syntactic sugar on top of Constructors, underneath it is just a constructor, still a blueprint for creating an object. We can store methods & values on classes for subclasses to inherit.

    -EXAMPLE
    class Shape{    
    constructor(area, perimeter)    {
        this.area = area;
        this.perimeter = perimeter;
    }
    getArea()   {
        return this.area;
    }
    setArea()   {
        this.area = area;
    }
    printInfo() {
        console.log(`Area: ${this.area}`)
        console.log(`Perimeter: ${this.perimeter}`)
    }
    }

    const rectangle = new Shape(200, 60);
    console.log(rectangle);
    rectangle.setArea(300);
    rectangle.printInfo();

### Subclasses
Unit 10 Activity 20
    1. A parent class must be imported using module.exports
    2. New class definition must extend parent class
    3. To access the parent, you use super
    
    const Shape = require("/shape")

    class Rectangle extends Shape {
        constructor(sideA, sideB)   {
            const area = sideA * sideB;
            const perimeter = sideA * 2 + sideB * 2;

            super(area, perimeter);
            this.sideA = sideA;
            this.sideB = sideB;
        }
    }
    const rectangle = new Rectangle(12,9)
    rectangle.printInfo();

### Multiple Classes
    Unit 10 Activity 22
    
    Multiple classes do not have to extend eachother, but can call eachother. These items are interrelated, but are not extended from one another. 
    
    - EXAMPLE
    A restaurant builds orders based on an array of items. These items are instances of the class Item. 
    
    For every item there is a new Order class instance that holders that order & adds to the lastId value to track how many orders have been generated.
    
    Restaurant(name, orders, revenue)
        items [ new Item(value,value)
                new Item(value,value)
                new Item(value,value)]
    
    Item(name, price)
        this.name = name
        this.price = price

    Orders(item)
        this.item = item
        Order.lastId++
        this.id = Order.lastId

        Order.lastId = 0;

## Prototypes
Objects, arrays & primitives have prototype methods, they are hidden but they are are always there. 
Sometimes when we develop code we don't want properties of objects we create to be available, so that is where prototypes come in handy. Like if we were going to console.log something a lot, and we didn't want a method of the object to add noise to our code, using a prototype to hide it would be effective.

    -Example    Unit 10 Activity 5
    function Movie(title, releaseYear)  {
        this.title = title;
        this.releaseYear = releaseYear;
    }

    Movie.prototype.logInfo = function()    {
        console.log(`${this.title} was released in ${this.releaseYear}`);
    };

    const theShining = new Movie("The Shining, 1980)
    theShining.logInfo();
    console.log(theShining)                 << this does not SHOW the prototype method
    console.log(theShining.hasOwnProperty('title))                          << logs true
    console.log(theShining.hasOwnPoperty(`logInfo))                         << logs false
    console.log(Movie.prototype.hasOwnProperty(`logInfo`))                  << logs true


### =================
## TDD - Test Driven Development
### ==================

Tests force us to write better, more understandable, more maintainable code.

1. Before you write any code, you write tests first

2. Initially all of your tests should fail
    avoid false positives with your tests

3. Handle   Positive    = return true
            Negatives   = return false
            Exceptions  

4. AAA Method   - arrange, act, assert

* Test Driven Development makes you work through a process as opposed to haphazardly making code
* More forethought into the work  


## Testing with Jest
The package we are testing with is called Jest

Describe & it blocks, only one it block inside of each describe.
Lesson 10, Activity 08
    For each module we write a test.
    We describe every function inside of a module, we describe a parent and we have at least one it block within each describe. It blocks should not be nested.
    it("blocks are written in a way that we can know what's happening in the test in plain langauge")

    Saving Methods
    Save tests as a .test.js file
    Save those tests in a test folder

*   THREE STEP PROCESS FOR WRITING UNIT TESTS
    Lesson 10, Activity 09
    * Arrange
    * Act
    * Assert

We test for both positive & negative cases, where things go right and where things go wrong.

You can test code with third party packages
Lesson 10 - Activity 15

###### Helpful
(can place the letter "x" in fron of the it block in a test, and stop a particular test from running.)

### MOCKS
Video Testing With Jest Unit 10 Activity 12

Mocks are used inside of a unit test to hold the place of an existing function, we do not control, like an API call. 

Mock functions, do nothing!

LESSON 10, Activit 13
1. create mock implementation by spying on existing function
    const mock = jest.spyOn(console, "log");

2. Setup a mock implementation. Empty arrow function. It triggers a function that doesn't do anything
    mock.mockImplementation(() => {})
    
    log.black(message)

3. We expect the mock to have been called
    expect(mock).toBeCalledWith(colors.black, message);

4. Restore the mock at the end of the test, so it can be used in other ways
    mock.mockRestore();

alternative example

Unit 10 Activity 15: mocking a return value
.mockReturnValue( new Promise( function(resolve){
    resolve({data: {}   });
}))

=======================
## NODE & EXPRESS   SERVERS
=======================

Node & Express servers are will be what allows us to CLAIM being full stack developers.
pluralsight express.js course is recommended as SUPPLEMENTAL LEARNING MATERIAL


Server - a machine & the code that handles client requests & responds to them.
            STORED within a server is a TON of content that it can use as responses

Client  - a user's personal machine which makes requests of the server

Client Request - client's request containes the name & address (URL) of whatever the client is looking for.

Reponse - The server's response contains the actual document that the client requested (or an error code if the request cannot be processed)

VISUAL EXAMPLE OF 
                REQUEST
    [USER    ]  ------------->  [SERVER]    <------ [content server has]
    [computer]  <-------------  [      ]
                    RESPONSE

Example of server-side code = visiting a URL and being presented with an HTML page, clicking an invoice with a PDF report that opens, image processing software that filters an image & saves new version.

Communication between CLIENTS & SERVERS -
    Clients & servers communicate through a series of boops & beeps known to humans as HTTP/HTTPS. Hypertext Transfer Protocol Secure

What is Full Stack Development?
    There is a constant interplay of what a user's machine/client browser requests & how a backend server handles that data and its response. 

    Servers during development live on our personal computers where we can test & run a browser connected to a LOCALHOST port on our machine that will HOST a server we are using.

    After the development phase servers typically live in the CLOUD through a cloud server service; AWS, Heroku, Google Cloud

Building a server
    Although our machines can host servers, we still need to "build a server" with code that stipulates what a server can/will do.
        *   establishes connections to the database
        *   handling client-side URL requests
        *   performing server-side processes
        *   authenticating user requests
        *   logging client requests

Imagine
    The server is a big empty box
    We give the server power to do things in response to the requests that come in using code
    
    CONNECTION: We add a LISTENER to the server to be able to listen for client requests (a server can only listen to one port at a time)
    
    PARSING:    We give the server the ability to PARSE or interpret URLs that the client requests
    
    ROUTING:    The server ROUTES the flow of logic to begin other processes
    
    "OTHER PROCESSES"
        SENDING:    The responses may be sending HTML files for rendering or JSON files
        RECEIVING POSTS:  We can include a module to handle user's POST request (data users sends a server)
        LOGIC:   Performing logic that initiates when users complete specific actions; reaching a route endpoint or sending data
        & MORE!

### FIVE STEP PROCESS FOR CREATING A SERVER
LESSON 11 Acitivity 1

1. import HTTP          const http = require("http");

2. use a port           const PORT = 7000;

3. create a server      const server = http:createServer();

4. LISTEN               server.listen(PORT, function(){
                        console.log(`Listening on http://localhost:${PORT}`)})

5. Handle the Request   function handleRequest(request, response){
                        response.end("This is a test, this only a test")    }
                        EVEN if we don't need request, or response, we have to specify it in the same position.

 sub steps
    1. We need to pass our handleRequest functions into the createServer callback (step 3)
    2. We need to ensure that our server has recognized our changes, by STOPPING and RESTARTING unless running a third party software like nodemon.

When creating handleRequest functions the request or req object comes in first and the response or res object comes second

Switch Case
    Unit 11 Activity 3
    
    Capture a URL the request is made to
    var path = req.url          (req & res are OBJECTS that have innate properties)

    switch (path)   {
        case "/":
            return displayRoot(res);
        case "/portfolio":
            return displayPage(res);
        case:
            return display404(path,res);
    }

Status Code
    404 - some shit is broken, and you're not getting the page, you're looking for
    200 - everything is gravy and we have successfully receive your response and returning it.

res.writeHead(200, {"Content-Type": "text/html"})
res.end()  ending a request by sending a specified thing

## HELPFUL HINTS
    * shut down a server by calling it again or CTRL+C
    * localhost:[number]    will display CSS & HTML upon refresh, but changes you make to the server.js file will need to be reset before they can take effect
    * a handleRequest(req,res)  { res.end("this is working!)} IS THE CONSOLE LOG of servers
    * __dirname tells you the absolute path of the currently executing file
    * req.on("data")    when data comes in we call a function 
    * req.method       makes a GET request
    * if we want to send something to the server, we have to make a POST request

## POSTMAN
    POSTMAN helps us problem solve between our code & the server

    The most common types of actions we take using POSTMAN are
    GET, POST, PUT & DELETe = C.R.U.D methods
                            create, read, update, delete
        POSTMAN steps
            POST request
            Body
            Raw
            JSON
    If POSTMAN throws an error of "cannot GET" ____ that means that route doesn't exist

## Express.JS
    is a webframework for Node that makes creating server-side code much simpler.
        *express allows us to build routes

   ### Steps for Creating an Express Server
    Video 10.1 1/10
    
    Basic Setup
    1. Create a server.js
    2. Run `npm init -y`
    3. Run `npm install express`

    Build Express Server
    1. Require Express
    2. Create an instance of Express
    3. Add a port to listen on (allow for heroku deployment)
            process.envPORT || ______
    4. Listen on port
    5. If we want to include Post routes, we must include Middleware

    6. Error Handling

    Setup Routes
        Get Routes
            1. Use `app.get`
            2. Specify the route path (should include resource type)
            3. Retrieve the data
            4. Send response to teh user.

        Post Routes
            *Post routes are not "collections"
            1. Use `app.post`
            2. Specify the route path (should include resource type)
            3. Handle the incoming POST body
            4. Save the data
            5. Send response to the user.

        To Test POST Routes
            1. Go to Postman
            2. Select POST request from the dropdown
            3. Select Body from the menu
            4. Select `raw`
            5. Select JSON
                Must be wrapped in valid JSON, keys are strings

        BONUS:
            Install Nodemon
                ``` bash
                npm install nodemon -g      ** to run on globally machine
                ```
                ``` javascript
                "dev": "nodemon server.js"     ** to include in scripts
                ```

    - EXAMPLE 

    When a user visit a page, the things we see are a GET request
    
    When a user interacts with a page by saving, editing they are submitting a POST request

    MIDDLEWARE sets up Express.js to handle data parsing and is declared underneath our global variables establishing express & our PORT. Middleware sits in between the request & the routes to parse JSON coming in. 
        If you don't have this your POST route will not work.
            -example
        app.use(express.urlencoded({ extended: true }));
        app.use(express.json());

## Notes on Routes
    ROUTES MUST COME BEFORE THE LISTENER

    We create routes. 
    A get request must also have a get route
    We create routes that match the type
    app.get("/" function(req,res){                              
        "/" is the PATH // ROOT ROUTE
        res.send("welcome to the galaxy)        })   

    If we are going to have API routes they should return JSON, if we are going to return JSON we should have API routes.

    routeName values in an object has no spaces, so it is easier to return that objects value into an HTML.

    COLLECTION route or RESOURCE route, a route that gives a user acess to many objects or a single object

    When looking at routes, if you see a / followed by a : this means we are using a PATH parameter AKA rec.params

        -example                    UNIT 11 Activity 9
            app.get("/:character", function(req, res) {
            var chosen = req.params.character;

            console.log(chosen)         << this would make it so the request appears in our CLI.

            res.end();  });

    RESTFUL API STANDARDS
    KEEP API restful by not changing the url too much
    
    GET /todos              Get todos
    GET /todos/1            Get todo with id of 1
    POST /todos             Add a todo
    PUT /todos/1            Update todo with ID of 1
    DELETE /todos/1         Delete todo with ID of 1

    When running routes after you've written out an API url with query parameters, console.log(req.query); to see what is returned and if it matches your models.

## Heroku
    Video 10.1 Express Mini Project & MySql 3/10
        *   Heroku only deploys tracked & committed changes.
        *   heroku create {name-of-project}     < no curlies
        *   git remote -v     <<    lists out our remotes
        *   git push heroku master << will display information that may indicate errors
        *   heroku dashboard of projects you have deployed will display information regarding commit logs, etc.
        *   "Restart all dynos" aka bouncing an app will refresh all logs that shows us basic startup information regarding the app we are running.
        *   If Heroku is setup through the CLI, you know have to make sure you are committing and updating in more than one place as you create changes.

        How to Deploy to Heroku to Test Changes
            * git push heroku ____:master 
                uses this branch AS IF it were master
            * heroku logs --tail
                will reveal the logs we can see in the browser in our terminal

## Nodemon
    nodemon allows us to run the "watch" script
    npm run watch 
    and now our server will automatically update after every save

    to restart it any time you can manually type "rs"

    Nodemon will crash any time there isn't valid code.

    Our FOUR step process is bascially the same, but now we include ROUTES

    1.  express = require("express")    we require express in place of HTTP

    2.  var app = exress()  we are creating a new INSTANCE of express
        
    3.  var PORT = 3000     we are calling a PORT

    4.  app.listen(PORT, function() {                       set up our listener
            console.log("App listening on PORT" + PORT);
    })

    5.  app.get // app.post("/", function(req,res)  {
        res.send("Welcome to the Star Wars Page!")
    })

    This specifies the method type that we WANT to listen for instead of using a handleRequest().

    
## SQL
    One of the oldest languages that's still in active use.
    It was created in 1974.
    This is a way for us to learn how to better use databases

    Relies on a structure based on
    
    * Database

    * Table
    
    * Column
    
    * Row

    MySql Workbench
    Unit 12 Activity 1 video 10.1 Express Mini Project & MySql 7/10
        *   MySql has a specific syntax
                Unit 12 Activity 1
        *   When creating things in MySql you have to run the code when appropriate by using the lightning bolt & refreshing the schemas to the left tab manually.
        * snake_case is the preferred naming method
            VARCHAR(length) = string, max length must be specified
            INTEGER = number
            BOOLEAN = true / false   = 1 / 0
            NOT NULL = must provide a value
        name VARCHAR(30) NOT NULL <<< variable, type, specifier

        * Must INDICATE what and where things need to go to the computer by running things like "use ___db" "use ____ table", etc. Otherwise you may not have the results you intended.

        * NEVER WRITE a DELETE QUERY without a where clause
        * ID auto increment skips over ones already in use.

## MONGO DB
    NoSQL database
        Collections >> Documents 
        Similar format to JSON data
    Mongo DB is not designed for many to many relationships it is designed for one to many. 

## Mongoose
    * Populate
    * Virtuals
    Virtuals are a non-stored data value that allow us to access & display information or data that isn't a part of our model.
    
    -example
    
    },{
    toJSON: {virtuals: true},
    toObject: {virtuals: true}
    }

    // Reverse populate with virtuals
    BootcampSchema.virtual("courses", {
    ref: "Course",
    localField: "_od",
    foreignField: "bootcamp",
    justOne: false,
    })
    
    * Static
    Static methods are called on the actual model, versus a method you create from a model.

## PWA
    3 things we need for a progessive web app
        1. Manifest
        2. Service Worker
        3. Cache

## Web Pack
    * Minifies and compresses one single file and then all imports all of the files that the current file needs.
    * Accepts plugins, has a searchable documentation with list of plugins taht works with it.

## React
    An open-source Javascript Library developed by Facebook for developing UIs.
    Developed to build a large app with rapidly changing data.
    Component-based: UI elements are broken into self contained components.

    React relies on a virtual dom manipulation which means that it doesn't have to reload or update everything when we just want to change one thing.

### Getting started  
    npx create-react-app _____ name

    NPM vs NPX download me versus download & execute
    --use-npm means that the primary package downloader is NPM

### Notes on React
    *   Server environment that renders to your user
    *   Client Side Javascript Library
    *   Created and maintained by facebook
    *   Used to build dynamic user interfaces
    *   Component based
    *   Is technically a library, but is more similar to frameworks
    *   robots.txt lets web crawlers know what the application is about
    *   app.css is main on default, index.css is support
    *   WHAT THE HELL IS USE "STRICT MODE"
    *   lifecycle methods????
            componentDidMount
            componentDidUpdate
    *   When using hooks, you always want to give the first element of your destructured array and the second element is what you use to set it up.

    const [name, setName] = useState(")
    useEffect(() => {
        setName("Phil")
    }, [])

    Fragments versus Parent Containers
    * Replace a parent container with a fragment // angle brackets also work
        <Fragment>
        <h1> This is where your content goes </h1> 
        </Fragment>

    Benefits of React
    *   Build a powerful Frontend/UI
    *   Code organization
    *   Everything is built on individual components
    *   Uses a "virtual dom"

    Component Based UI
    *   logically decompose a UI into unique parts
    *   easily reuse parts without re-coding
    *   is a function that has a return statement in it
    *   Look at each element as individual components
    *   Organized by component easier to understand as UI
    *   Can have "props" & "states"

### JSX
        * is a special syntax which makes these structures easier to write
        * JSX comes with the full power of javascript within braces inside JSX. 
        * : is else

### Components and Props
    *   Your components are nested functions inside of your main function (app.js).
        * Inside of components, you have props. Props are empty objects you can give any property you would like.
    *   propTypes are validations for properties that a component should have. We can set the type and set whether they are required or not.
    
    *   Component level state means that states are contained within a single component. 
    *   "Root" everything is embedded in the main root component in HTML Whatever it is you decide that to be, using a default build that will be "root"
    *   Components can be functions or classes
    *   Each React element is a Javascript object that you can store in a variable or pass around in your program.
    *   Can repeat components as many times as you like with different information.
    *   Props are properties you can pass into components from outside.
    *   PropTypes
            array, bool, func, number, object, string, symbol


###  React.Component subclasses:
        React component class or React component type
            *  component takes in parameters called "props" and returns a hierarchy of views to display via the render method.
            *  render method returns a description of what you want to see on the screen. React takes the description and displays the result
            *  render returns a REACT ELEMENT
                *  react element is a lightweight description of what to render
            * Class components can have state and functional components can also if you use Hooks.
            
        ReactDOM 
        "What do you want to render?"
        "Where do you want to render?"

    State and Lifecycle
        * Hooks allow us to have functional components
        * State is an object like props extends from being a component.
        * State is mainly just a function that will run when the component runs.

    NPM versus NPX
        * We can run it without installing it using NPX
        * Upon installing comes with React and React Dom which is for manipulating web based applications, not native applications.
        * React-script allows you to have webpacks, service workers, etc. work without having to set it up yourself, by running eject you have 

## NPM packages

### dotenv
    Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve Factor App methodology.

### express-fileupload
    Simple express middleware for uploading files
### morgan
    HTTP request logger middleware

### colors
    An npm package that allows you colorize "results" in the console.

### Babel
    Babel is a tool that helps you write code in the latest version of JavaScript. When your supported environments don't support certain features natively, Babel will help you compile those features down to a supported version.

### bcrypt
    is a password-hashing package
    * salt rounds determine the complexit of the hash

### json web token


### cookie-parser
    Parse cookie header and populate req.cookies with an object keyed by the cookie names. 

### node mailer
    For sending emails from within Node.js

### eslint
    Linter that is automatically turned on React applications

### babbel
    Transpiler

### commander
    creates a whole environment from an NPX install

### jsonwebtoken
    don't send anything sensitive back in your JWT
