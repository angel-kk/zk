<?php
include './datas.php';

$sql='select * from shop';

$result=mysqli_query($link,$sql);

$arr=[];

while($row=mysqli_fetch_assoc($result)){
    array_push($arr,$row);
}

echo json_encode($arr);

mysqli_close($link);
?>