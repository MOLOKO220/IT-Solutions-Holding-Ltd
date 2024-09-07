
<?php



if (isset($_POST["otprav"])) {

    $to = "itsolutionsholding@yahoo.com";
    $subject = "Message from website";
    $charset = "utf-8";
    $headerss = "Content-type: text/html; charset=$charset\r\n";
    $headerss .= "MIME-Version: 1.0\r\n";
    $headerss .= "Date: " . date('D, d M Y h:i:s O') . "\r\n";


    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['Phone'];
    $Country = $_POST['Country'];
    $message = $_POST['message'];

    $msg = '
            <html>
                <head>
                    <title>' . $subject . '</title>
                </head>
                <body>
                    <p>Name: ' . $name . '</p>
                    <p>Email: ' . $email . '</p>
                    <p>Phone: ' . $phone . '</p>
                    <p>Country: ' . $Country . '</p>
                    <p>Comment: ' . $message . '</p>
                </body>
            </html>';



    mail($to, $subject, $msg, $headerss);


    header('Location:https://itsolutionsholding.com/Thanks.html');


} ?>
