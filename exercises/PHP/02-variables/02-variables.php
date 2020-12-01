<h2> output: 
<?php   
#VARIABLES
/*
    -   prefix variables with $, or it will looked at as a constant
    -   variables must start with letter or an underscore, cannot be a number
    -   Only letters, numbersand underscores
    -   Case sensitive
*/

#DATA TYPES
/*
    -   string
    -   integers, do not put quotes around numbers
    -   floats / decimals
    -   Booleans
    -   Arrays
    -   Objects
    -   NULL
    -   Resource /reference
*/
$num1 = 4;
$num2 = 10;
$sum = $num1 + $num2;


$string1 = "hello";
$string2 = "world";
// $greeting = $string1 + $string2
#   will give an error that it is not a numerical equation

#   to concatenate in PHP use a .
$greeting1 = $string1 ." ". $string2;

#   double quotes are PHPs template literals
$greeting2 = "$string1 $string2";

// escape sequences; back slash takes the power away from the single quote to confuse PHP
$string3 = 'They\'re Here';

$float1 = 4.4;
$bool1 = true;

    #Constants
/*
    -   define it
    -   constants do not use $, even when calling it
    -   convention is to capitalize the constant, followed by the definition
    -   only use when you know the variable is never going to change
    -   by default are case sensitive; if you'd like to make case insensitive add a third parameter (true)
    -   call it
*/

define('GREETING', 'Hello Everyone', true);

echo GREETING;
?>
</h2>