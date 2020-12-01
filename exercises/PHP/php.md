## PHP

What is PHP?

PHP: Hypertext Preprocessor (Recursive Acronym)
Server Side Programming / Scripting Language
Can be embedded directly within HTML *using PHP tags
Files us a .php extension.

PHP needs a server to run. Apache is the most common/popular server type.
Apache is part of the LAMP stack; Linux, Apache, Mysql & PHP

PHP operation
    *   client makes a request
    *   server runs PHP/extensions
    *   Query database if needed
    *   Load other files if needed
    *   Result is sent back to client
        *   sends result; html, plain text, json, xml, pdfs
        *   cannot view source code for PHP

Why PHP?
    *   easy to learn
    *   free & open source
    *   great support
    *   cross platform; windows, linux, mac
    *   freedom 
    *   frameworks; laravael, symphony, code ignitor
    *   database compatibility

What can PHP do?
    *   create dynamic page content
    *   interact with files on the server
    *   collect & process forms
    *   send/receive cookies
    *   interact with databases
    *   access control?
    *   encrypt data

What can you build with PHP?
    *   basic websites
    *   blog type websites
    *   shopping carts // ecommerce
    *   social networks
    *   content management systems // wordpress & drupal
    *   membership websites
    *   search engines
    *   backend APIs

How to get started?
    *   PHP runs on Windows, Mac and Linux
        If you search online you will easily find XAMPP (I'm running on a windows machine)
        *   When downloading only install MySql & Apache (Perl if you have a reason to)
        *   Do not immediately open the dashboard when prompted after the install 
        *   Locate XAMPP wherever your main drive is
        *   Run xampp-control.exe as an administrator and CLICK the X on MySQl & Apache
        *   Press start on both of them
        *   Navigate to localhost in a web browser, and you're in business (kind of)
        *   This will display the basic page of loading page of XAMPP running PHP; it means that MySQL, Apache are all running as they should
````php
        <?php
            if (!empty($_SERVER['HTTPS']) && ('on' == $_SERVER['HTTPS'])) {
                $uri = 'https://';
            } else {
                $uri = 'http://';
            }
            $uri .= $_SERVER['HTTP_HOST'];
            header('Location: '.$uri.'/dashboard/');
            exit;
        ?>
        Something is wrong with the XAMPP installation :-(
````

        *   If you are already running MySQL this may get a little weird, and you'll have to change the default port that XAMPP tries to run to whatever you prefer. I switched to 3308. 
                *   Stop Apache and & MySQL in XAMPP
                *   XAMPP config top right, go to MySql change port to 3308
                *   On the line with MySQL running hit config and replace any 3306 with 3308
                *   Also navigate to root directory of XAMPP & find phpMyAdmin folder & update directly under line 23 with 
````php
            $cfg['Servers'][$i]['port'] = 3308;
````
                *   Restart XAMPP; start Apache & MySQL
                *   go to localhost/phpmyadmin & you should be rocking and rolling

*   Still getting started
        *   navigate to localhost/phpmyadmin
        *   you can manage databases in the browser by clicking databases tab
        *   Add a password to make your work more secure
        *   Click "user accounts" tab
            *   click "edit privileges"
            *   click "Change password" tab  
            *   add a more secure password and press go
        *   Navigate to xampp root directory, then PHPmyadmin folder again
        *   Open config.inc.php file in a text editor
        *   Add your password to line 21 or where it says
````php
            $cfg['Servers'][$i]['password'] = '';
````