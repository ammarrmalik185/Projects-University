<?php

    $servername = "localhost";
    $username = "root";
    $password = "";
    $databaseName = "Ammar";

    $conn = new mysqli($servername, $username, $password);

    if ($conn->connect_error)
        die("Connection failed: " . $conn->connect_error . "<br>");

    echo "Connected successfully" . "<br>";

    $sql = "CREATE DATABASE Ammar";
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

    $sql="
    CREATE TABLE Malik (
        firstName VARCHAR(60),
        lastName VARCHAR(60),
        month VARCHAR(60),
        day VARCHAR(60),
        year VARCHAR(60),
        sex VARCHAR(60),
        no VARCHAR(60),
        street VARCHAR(60),
        street2 VARCHAR(60),
        med VARCHAR(60),
        medicineList VARCHAR(60),
        email VARCHAR(50) NOT NULL PRIMARY KEY)";

    if ($conn->query($sql) == TRUE)
    {
        echo "Table Created Successfully<br>";
    }
    else
    {
        echo "Error Creating Table: ". $conn->error . "<br>";
    }
?>