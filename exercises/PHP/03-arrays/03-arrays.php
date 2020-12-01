<?php
    #Arrays
    /*
        - Indexed
            *   follows 0 based principle like javascript & other programming languages
            *   if looking for an item outside of the array, will return an error
        - Associative
            *   allows you to define the keys and the values
            *   can 
        - Multi-dimensional
            *   arrays within arrays
    */

    // Indexed
    $people = array('Smythe', 'Jenny', 'Kyle', 'Lyle');
    $ids = array(20, 14, 33, 67, 89);
    $dogs = ["pitbull", "chihuahua", "xhitzu", "other dog"];
    $dogs[4] = "pomeranian"; #add to a particular position
    $dogs[] = "schnauzer"; #if you don't know the index, you'll be adding too

    # USEFUL FUNCTIONs
    // echo count($dogs) #count function gives you the total number of items in an array
    // print_r($dogs) #prints the entire array onto the screen
    // var_dump($dogs) #prints all the information of the arrays items onto the screen, works with any variable type


    // Associative Arrays
    $people = array('User1' => 47, 'User2' => 24, 'User3' => 74);
    $people['User5'] = 68;
    // echo  $people['User1']; #returns 47
    $ids = [34 => "goldfish", 13 => "redfish", 56 => "bluefish", 99 => "blackfish"];
    // echo $ids[56]; #returns bluefish
    // var_dump($ids);

    // Multi-Dimensional
    $cars = array(
        array('Honda', 20, 10),
        array('Ford', 5, 34),
        array('Tesla', 1, 3)
    );
    // echo $cars[1][0];

    $otherCars = [
        ['Honda', 20, 10],
        ['Ford', 200, 980],
        ['Tesla', 5, 30]
    ];

    echo $otherCars[1][0];
?>