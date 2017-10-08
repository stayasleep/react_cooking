<?php
/*check connection*/
if (mysqli_connect_errno()){
    printf("Connect failed: %s\n",mysqli_connect_error());
    exit();
}

$client = file_get_contents("php://input");
$client = utf8_encode($client);
$res = json_decode($client, true);


$dish = $res['dish_name'];
$ingred = $res['ingredients'];
$time = $res['cook_time'];
$desc = $res['description'];

//if not, add an appropriate error to errors
if(empty($dish)){
    $output['errors'][]="Missing Dish Name";
}
if(empty($ingred)){
    $output['errors'][]='Missing Dish Ingredients';
}
if(empty($time)){
    $output['errors'][]='Missing Dish Cook Time';
}
if(empty($desc)){
    $output['errors'][]="Missing Dish Description";
}

if(count($output['errors']) === 0){
    $query="INSERT INTO `recipes` (`dish_name`,`cook_time`,`description`,`ingredients`) VALUES (?,?,?,?) ";

    if($stmt = $conn-> prepare($query)){
        //bind variables for placeholder
        $stmt->bind_param("ssss",$dish,$time,$desc,$ingred);
        //execute statement
        $stmt->execute();
        //check results of action
        if(empty($stmt->affected_rows)){
            $output['errors'][]='database error';
        }else{
            if($stmt->affected_rows===1){
                $output['success']=true;
                $insertID = $stmt->insert_id;
                $output['insertID']=$insertID;
            }else{
                $output['errors'][]='insert error';
            }
        }
        //close statement
        $stmt->close();
    }
}
$conn->close();

?>