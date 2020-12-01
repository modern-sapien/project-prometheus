<?php
    # Loops
    /*
        - For Loop
            *   follows 0 based principle like javascript & other programming languages
            *   if looking for an item outside of the array, will return an error
        - While
            *   allows you to define the keys and the values
            *   can 
        - Do While
            *   arrays within arrays
        - For each
            *   arrays within arrays
    */

    # For Loop
    // for($i = 0; $i < 10; $i++){
    //     echo "Number $i";
    //     echo '<br>';
    // };

    # While Loop
    // @params -condition
    // $i = 0;
    // while($i < 10) {
    //     echo "Number $i";
    //     echo '<br>';
    //     $i++;
    // }

    # Do.. While
    // @params -condition
    // will always run at least once, no matter what
    // $i = 0;
    // do{
    //     echo "Number $i";
    //     echo '<br>';
    //     $i++;
    // }
    // while($i < 10) 

    # For Each
    // works with arrays
    // $people = ['jon', 'jacob', 'jingleheimer'];
    // foreach($people as $person) {
    //     echo $person;
    //     echo '<br>';
    // }

    $people = ['Jon' => 'jon@mail.com', 'Jacob' => 'jacob@mail.com', 'Jingleheimer' => 'jingleheimer.com'];
    foreach($people as $person => $email) {
        echo $person . ': ' . $email;
        echo '<br>';
    }
?>