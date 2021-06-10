<?php
include "./datas.php";
//获取传入的参数
$n=$_GET['username'];
$p=$_GET['password'];

//编写SQL语句
$sql="insert into user(username,password)values('$n','$p')";

//执行SQL语句
$result=mysqli_query($link,$sql);

//判断当前数据是否添加成功
if($result){
    echo "注册成功";
}else{
    echo "注册失败";
}
//关闭数据库连接
mysqli_close($link);


?>