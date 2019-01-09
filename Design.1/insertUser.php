<?php
    session_start();

    include_once "conn.php";

    $userSet = false;
    $userTimeSet = false;
    $fileSet = false;

    $target_dir = "uploaded_images/";
    $target_file = $target_dir . basename($_FILES["file"]["name"]);
    $uploadOk = 1;
    $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

    //Cheks if the file is an image. 
    if(isset($_POST["submit"])) {
        $check = getimagesize($_FILES["file"]["tmp_name"]);
        if($check !== false) {
            $uploadOk = 1;
        } else {
            $uploadOk = 0;
            echo "fileNotImg";
        }
    }

    // Check if file already exists
    if (file_exists($target_file)) {
        $uploadOk = 0;
        echo "fileDoesExists";
    }

    // Check file size
    if ($_FILES["file"]["size"] > 500000) {
        $uploadOk = 0;
        echo "fileToLarge";
    }

    // Allow certain file formats
    if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
    && $imageFileType != "gif") {
        $uploadOk = 0;
        echo "fileNotOkImg";
    }

    //Cheks if the file is allowed to be uploaded.
    if($uploadOk == 1)
     {  
        //Uploades the file into the folder "uloaded_images" on the localserver.
        move_uploaded_file($_FILES["file"]["tmp_name"], "uploaded_images/" . $_FILES["file"]["name"]);
        $imagePath = "uploaded_images/" .$_FILES["file"]["name"];

        $fileSet = true;


        $username = $_POST["username"];
        $apartmentnr = $_POST["apartmentnr"];
        $password = $_POST["password"]; 

        $passwordDB = password_hash($password,PASSWORD_DEFAULT);


        //Inserts a new user with the apartmentnr, fullname, passwrod 
        //and puctireadress that the user has enterd. 
        try{
            $sql = "INSERT INTO users (apartmentnr, fullname, password, picture) VALUES (:apartmentnr, :username, :password, :picture)";
            $stmt = $pdo->prepare($sql);
            
            $stmt->bindParam(':apartmentnr', $apartmentnr);
            $stmt->bindParam(':username', $username);
            $stmt->bindParam(':password', $passwordDB);
            $stmt->bindParam(":picture", $imagePath);

            $stmt->execute();

            $userSet = true;

        } catch(PDOException $e){
            die("ERROR: Could not able to execute $sql. " . $e->getMessage());
        }

        $reservationNull = "u" .$apartmentnr. "/t 00:00-00:00/d0000-00-00";

        //Inserts a new space for the user to save their reservations. 
        try{
            $sql = "INSERT INTO reservations (apartmentnr, reservation) VALUES ('$apartmentnr', '$reservationNull')";    
            $pdo->exec($sql);
            
            $userTimeSet = true;

        } catch(PDOException $e){
            die("ERROR: Could not able to execute $sql. " . $e->getMessage());
        }
         

        // Close connection
        unset($pdo);

        //Cheks if the file was uploaded corectly, if user was registerd and 
        //if the user has a place to save their reservations.
        if($fileSet == true && $userSet == true && $userTimeSet == true)
        {
            echo "UserRegTrue";
        }
        else
        {
            echo "UserRegFalse";
        }
    }
