<?php

    $servername = "localhost";
    $username = "root";
    $password = "";
    $databaseName = "Ammar";

    $conn = new mysqli($servername, $username, $password, $databaseName);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error . "<br>");
    }
    echo "Connected successfully" . "<br>";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        $firstName = $_POST['firstName'];
        $lastName = $_POST['lastName'];
        $month = $_POST['month'];
        $day = $_POST['day'];
        $year = $_POST['year'];
        $sex = $_POST['sex'];
        $no = $_POST['no'];
        $email = $_POST['email'];
        $no = $_POST['no'];
        $street = $_POST['street'];
        $street2 = $_POST['street2'];
        $medicineList = $_POST['medicineList'];

        $sql = "insert into Malik(
             firstName,
             lastName,
             month,
             day,
             year,
             sex,
             no,
             street,
             street2,
             medicineList,
             email
         )
        values (
             '$firstName',
             '$lastName',
             '$month',
             '$day',
             '$year',
             '$sex',
             '$no',
             '$street',
             '$street2',
             '$medicineList',
             '$email'
        )";

        if ($conn->query($sql) == TRUE) {
            die("Data Entered");
        } else {
            die("Error Creating User: " . $conn->error . "<br>");
        }
    }
?>