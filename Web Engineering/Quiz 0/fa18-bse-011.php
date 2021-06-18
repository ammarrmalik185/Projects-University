<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Signup</title>
</head>
<body>
    <h1 style="text-align: center;">SIGN UP</h1>
    <form id="signUp" style="text-align: center;" action="" method="POST">

        <label for="email">Enter Email</label>
        <br>
        <input id= "email" type="text" name="email" placeholder="Email">
        <br>
        <label for="name">Enter Name</label>
        <br>
        <input id= "name" type="text" name="name" placeholder="Name">
        <br>
        <label for="password1">Enter Password</label>
        <br>
        <input id= "password1" type="password" name="password" placeholder="Password">
        <br>
        <label for="password2">Re-Enter Password</label>
        <br>
        <input id= "password2" type="password" name="password2" placeholder="Re-Enter Password">
        <br>
        <input type="submit">

    </form>
    <br>

<!--    <h1 style="text-align: center;">LOGIN</h1>-->
<!--    <form id="login" style="text-align: center;" action="fa18-bse-011.php" method="POST">-->
<!---->
<!--        <label for="emailLogin">Email: </label>-->
<!--        <br>-->
<!--        <input id= "emailLogin" type="text" name="email" placeholder="Email">-->
<!--        <br>-->
<!--        <label for="passwordLogin">Password</label>-->
<!--        <br>-->
<!--        <input id= "passwordLogin" type="password" name="password" placeholder="Password">-->
<!--        <br>-->
<!--        <input type="submit">-->
<!---->
<!--    </form>-->

    <br>

    <?php
        $servername = "localhost";
        $username = "root";
        $password = "";
        $databaseName = "Malik";

        $conn = new mysqli($servername, $username, $password, $databaseName);
        
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        echo "Connected successfully";


//        Creating Database
//        $sql = "CREATE DATABASE Malik";
//        if (mysqli_query($conn ,$sql))
//        {
//        echo "Database created successfully<br>";
//        }
//        else
//        {
//        echo "Error Creating Database: ". mysqli_error($conn) . "<br>";
//        }

//        Creating Table
//        $sql="CREATE TABLE ammar (
//        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
//        username VARCHAR(60),
//        email VARCHAR(50) NOT NULL,
//        password VARCHAR(50) NOT NULL
//        )";
//        if ($conn->query($sql) == TRUE)
//        {
//        echo "Table Created Successfully<br>";
//        }
//        else
//        {
//        echo "Error Creating Table: ". $conn->error . "<br>";
//        }


        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $name = $_POST['name'];
            $email = $_POST['email'];
            $password1 = $_POST['password'];
            $password2 = $_POST['password2'];

            if ($password1 === $password2) {

                $sql = "insert into ammar (username, email, password) values ('$name', '$email', '$password1')";

                if ($conn->query($sql) == TRUE) {
                    echo "User Signed up Successfully<br>";
                } else {
                    echo "Error Creating User: " . $conn->error . "<br>";
                }

            } else {
                echo "Passwords dont match<br>";
            }
        }

//if ($_SERVER["REQUEST_METHOD"] == "POST")
//    $emailLogin = $_POST['emailLogin'];
//    $passwordLogin = $_POST['passwordLogin'];
//
//    $sql = "SELECT id, name, email, password FROM ammar where email = " . emailLogin . "and password = " . passwordLogin;
//    $result = $conn->query($sql);
//    if ($result->num_rows > 0)
//    echo "login success";
//    else
//    echo "login failed";
//
//    ?>
</body>
</html>