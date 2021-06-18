<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Reddit</title>
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/fonts/fontawesome-all.min.css">
    <link rel="stylesheet" href="assets/fonts/font-awesome.min.css">
    <link rel="stylesheet" href="assets/fonts/ionicons.min.css">
    <link rel="stylesheet" href="assets/fonts/fontawesome5-overrides.min.css">
    <link rel="stylesheet" href="assets/css/Navigation-Clean.css">
    <link rel="stylesheet" href="assets/css/Reddit-Login-Page.css">
    <link rel="stylesheet" href="assets/css/styles.css">
</head>

<body style="text-align: center;"><a href="signup.html"><button class="btn btn-primary" type="button" style="width: 60%; margin-left: 20%; margin-right: 20%; text-align: center; display: block; margin-top: 150px;background: rgb(188,76,13);">Try Again</button></a>
<h1>Logs:</h1>
<script src="assets/js/jquery.min.js"></script>
<script src="assets/bootstrap/js/bootstrap.min.js"></script>
<script src="assets/js/bs-init.js"></script>
</body>

</html>

<?php

$servername = "localhost";
$username = "root";
$password = "";
$databaseName = "Reddit";

$conn = new mysqli($servername, $username, $password, $databaseName);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error . "<br>");
}
echo "Connected successfully" . "<br>";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST['username'];
    $email = $_POST['email'];
    $password1 = $_POST['password'];
    $password2 = $_POST['password2'];

    if ($password1 === $password2) {

        $sql = "insert into Users (username, email, password) values ('$name', '$email', '$password1')";

        if ($conn->query($sql) == TRUE) {
            header("Location: index.html");
        } else {
            echo "Error Creating User: " . $conn->error . "<br>";
            exit();
        }

    } else {
        echo "Passwords dont match<br>";
        sleep(2);
        header("Location: signup.html");
        exit();
    }
}
?>