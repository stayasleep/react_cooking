<?php
/*check connection*/
if (mysqli_connect_errno()){
    printf("Connect failed: %s\n",mysqli_connect_error());
    exit();
}

$query="SELECT * FROM `recipes`";

$result=mysqli_query($conn,$query);

//check if result is empty
if(empty($result)){
    $output['errors'][]='database-error';
}else{
    //check the data that came back to determine if retrieving was successful or not
    if(mysqli_num_rows($result)>0){
        $output['success']=true;
        //put data we want in our output
        while($row=mysqli_fetch_assoc($result)){
            $output['data'][]=$row;
        }
    }else{
        //otherwise output is already assumed false, so we generate a msg for the client
        $output['errors']=['Database has no entries!'];
    }
}

mysqli_close($conn);


?>