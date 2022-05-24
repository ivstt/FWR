<?php
     session_start();

     include("mysql.php");
     include("logger.php");

     $method = $_SERVER['REQUEST_METHOD'];

     if($method == "GET"){ // Handle all get request

        $action = "";

        if(isset($_GET['action'])){
            $action = $_GET['action'];
        }

        if($action == "listDonations"){
            $mySQL = new MySQL(true);
            $sql = "SELECT * FROM items";
            $result = $mySQL->Query($sql, true);
            
            echo $result;
        } 
           
     }
     else if($method == "POST"){ // Handle all post requests 
        
     }
     else if($method == "PUT"){ // Handle all put requests 

     }
     else if($method == "DELETE"){ // Handle all delete requests 
        
        if(isset($_GET['id'])){
            $id = $_GET['id'];

            $sql = "DELETE FROM items where itemsId =" . $id;
            $mySQL = new MySQL(true);
            $result = $mySQL->Query($sql, false);

            $res = (object)array('success' => 'true');

            echo json_encode($res);
        }
        else {
            $res = (object)array('success' => 'false');

            echo json_encode($res);
        }
     }

?>