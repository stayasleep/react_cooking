<?php
if(mysqli_connect_errno()){
    die("Connection Failed: ". mysqli_connect_error());
}
$client = file_get_contents("php://input");
$client = utf8_encode($client);
$result = json_decode($client, true);

//var_dump($result);
$name=$result['edit_name'];
$time=$result['edit_time'];
$desc=$result['edit_desc'];
$ingredients=$result['edit_ingred'];
$id=$result['position'];

$query = "UPDATE `recipes` SET `dish_name`=?, `cook_time`=?, `description`=?, `ingredients`=? WHERE `dish_id`=?";
$stmt = $conn->prepare($query);
$stmt->bind_param("sssss",$name, $time,$desc, $ingredients, $id);
$stmt->execute();
if($stmt->affected_rows===1){
    $output['success']=true;
}
$stmt->close();
$conn->close();
?>