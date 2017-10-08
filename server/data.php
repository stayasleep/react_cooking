<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$action = $_GET['action'];

if(empty($action)){
    exit('No action specified');
}

//connect to database
require('./config.php');
$output= array("success"=>false, "errors"=>[]);


switch ($action){
    case 'create':
        include('./routes/create.php');
        break;
    case 'retrieve':
        include('./routes/retrieve.php');
        break;
    case 'update':
        include('./routes/update.php');
        break;
    default:
        include('./routes/delete.php');
}

$outputJSON = json_encode($output);
print_r($outputJSON);

?>