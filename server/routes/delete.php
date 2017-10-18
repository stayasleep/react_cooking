<?php
if(mysqli_connect_errno()){
    die("Connection Failed: ".mysqli_connect_error());
}
if(!isset($id)){
    $output['errors'][]="ID not supplied with request";
}
if(count($output['errors'])===0){
    //no errors, lets continue
    $query = "DELETE FROM `recipes` WHERE `id`=?";
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
    }
}
$conn->close();
?>