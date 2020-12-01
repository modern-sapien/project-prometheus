<?php
    # Functions
    /*
        - Camel Case - myFunction()
        - Lower Case - my_function()
        - Pascal Case - MyFunction()

        Functions are primarily written in CamelCase within PHP by convention and Pascal Case is reserved for classes.
    */

    # Simple function
    function firstFunction(){
        echo 'Hello world';
    };
    // firstFunction();

    # Function with parameter
    function greeting($name = 'World')  {
        echo "Hello $name<br>";
    }
    // greeting('Jose');
    // greeting();

    # Return value
    function addition($num1, $num2){
        return $num1 + $num2;
    }
    // echo addition(3, 6);

    $myNum = 10;

    function addFive($num){
        $num += 5;
    }

    // using the & alters the value of the parameter placed within it
    function addTen(&$num){
        $num += 10;
    }

    addFive($myNum);
    echo "Value: $myNum<br>";

    addTen($myNum);
    echo "Value: $myNum<br>";