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

<body style="text-align: center;"><a href="setup.php"><button class="btn btn-primary" type="button" style="width: 60%; margin-left: 20%; margin-right: 20%; text-align: center; display: block; margin-top: 150px;background: rgb(188,76,13);">Try Again</button></a>
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

$conn = new mysqli($servername, $username, $password);

if ($conn->connect_error)
    die("Connection failed: " . $conn->connect_error . "<br>");

echo "Connected successfully" . "<br>";

//        Creating Database
        $sql = "CREATE DATABASE Reddit";
        if (mysqli_query($conn ,$sql)) {
            echo "Database created successfully<br>";
        }
        else{
            echo "Error Creating Database: ". mysqli_error($conn) . "<br>";
        }

$conn = new mysqli($servername, $username, $password, $databaseName);

if ($conn->connect_error)
    die("Connection failed: " . $conn->connect_error . "<br>");

echo "Connected successfully" . "<br>";

//        Creating Table
        $sql="CREATE TABLE Users (
        username VARCHAR(60),
        email VARCHAR(50) NOT NULL PRIMARY KEY,
        password VARCHAR(50) NOT NULL
        )";
        if ($conn->query($sql) == TRUE)
        {
            echo "Table Created Successfully<br>";
        }
        else
        {
            echo "Error Creating Table: ". $conn->error . "<br>";
        }
?>