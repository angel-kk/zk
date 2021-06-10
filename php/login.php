<?php
include "./datas.php";

$n=$_GET['username'];
$p=$_GET['password'];
// $n='哈哈';
// $p=123456;

//编写SQL语句
$sql="select * from user where username='$n' and password=$p";
// echo $sql;

//执行SQL语句，并返回结果集
$result=mysqli_query($link,$sql);
//判断当前结果集中是否有数据
if($row=mysqli_fetch_row($result)){
    echo "1";
}else{
    echo "0";
}
//关闭数据库连接
mysqli_close($link); 
?>