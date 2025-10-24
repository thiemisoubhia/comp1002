<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>Order Confirmation - The HTML Pizza Company</title>
    <link rel="stylesheet" href="css/styles.css" />
</head>
<body>
    <header>
        <h1>The HTML Pizza Company</h1>
    </header>
    <main>
        <h2>Your Order Has Been Received!</h2>
<?php
   
    $fname = $_GET["first-name"];
    $lname = $_GET["last-name"];
    $email = $_GET["email"];
    $phone = $_GET["phone"];

    $address = $_GET["address"];
    $postal = $_GET["postalcode"];
    $preference = $_GET["dinning-preference"];


    $message = $_GET["messsage"];

    echo('<p>Thank you, '.$fname.' '.$lname.'!</p>');
    echo('<p>Your order has been successfully received.</p>');

    echo('<h3>Delivery Details:</h3>');
    echo('<ul>');
        echo('<li>Email: '.$email.'</li>');
        echo('<li>Phone: '.$phone.'</li>');
        echo('<li>Address: '.$address.'</li>');
        echo('<li>Postal Code: '.$postal.'</li>');
        echo('<li>Dinning Preference: '.$preference.'</li>');
    echo('</ul>');

    
    if (!empty($message)) {
        echo('<h3>Your Message:</h3>');
        echo('<p>'.$message.'</p>');
    } else {
        echo('<p>No additional message provided.</p>');
    }
?>
    </main>
    <footer>
        <p><small>© The HTML Pizza Company. All rights reserved.</small></p>
    </footer>
</body>
</html>
