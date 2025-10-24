<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <title>Order Confirmation - The HTML Pizza Company</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header>
        <nav>
            <div class="container">
                <img src="images/logo.png" alt="The HTML Pizza Company logo" width="140">
                <ul class="nav-links">
                    <div class="container home">
                        <img src="images/home.png" alt="" width="20">
                        <li><a href="index.html/#">Home</a>
                        </li>
                    </div>
                    <div class=" container home">
                        <img src="images/order.png" alt="" width="20">
                        <li><a href="index.html/#order">Order</a>
                        </li>
                    </div>
                    <div class=" container home">
                        <img src="images/contact.png" alt="" width="25">
                        <li><a href="index.html/#contact">Contact</a>
                        </li>
                    </div>
                </ul>
            </div>
        </nav>
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

        echo ('<p>Thank you, ' . $fname . ' ' . $lname . '!</p>');
        echo ('<p>Your order has been successfully received.</p>');

        echo ('<h3>Delivery Details:</h3>');
        echo ('<ul>');
        echo ('<li>Email: ' . $email . '</li>');
        echo ('<li>Phone: ' . $phone . '</li>');
        echo ('<li>Address: ' . $address . '</li>');
        echo ('<li>Postal Code: ' . $postal . '</li>');
        echo ('</ul>');


        if (!empty($message)) {
            echo ('<h3>Your Message:</h3>');
            echo ('<p>' . $message . '</p>');
        } else {
            echo ('<p>No additional message provided.</p>');
        }
        ?>
    </main>
    <footer>
        <p><small>© The HTML Pizza Company. All rights reserved.</small></p>
    </footer>
</body>

</html>