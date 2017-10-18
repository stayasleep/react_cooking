<?php
if(mysqli_connect_errno()){
    die("Connection Failed: ".mysqli_connect_error());
}
//var_dump("post",$_REQUEST);

//var_dump($_SERVER);
$id = $_SERVER['HTTP_DISHID'];
//print $id;

//$client = file_get_contents("php://input");
//$client = utf8_encode($client);
//$res = json_decode($client, true);
//var_dump($res);
//foreach (getallheaders() as $name => $value) {
//    print "$name: $value\n";
//}

if(empty($id)){
    $output['errors'][]="ID not supplied with request";
}else{
    //no errors, lets continue
    $query = "DELETE FROM `recipes` WHERE `dish_id`=?";
    if($stmt=$conn->prepare($query)){
        //bind our params
        $stmt->bind_param("s",$id);
        //execute
        $stmt->execute();
        //check to see the sql happened with success
        if($stmt->affected_rows === 1){
            $output['success'] = true;
        }else{
            $output['errors'][]="There was a problem trying to delete.";
        }
        $stmt->close();
    }else{
        $output['errors'][]="Query Problem";
    }
}
$conn->close();
?>