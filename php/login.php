<?php
	header("Content-type:text/html;charset=utf-8");
	$name = $_POST["userName"];
	$pwd = $_POST["userPass"];
	$conn = mysql_connect("localhost","root","root");
	if($conn){
		echo "连接成功";
		mysql_select_db("kfz");
	}else{
		echo "连接失败";
	}
	$str = "select *from usermes where userName='$name'and passWord='$pwd'";
	$result = mysql_query($str,$conn);
	$row = mysql_num_rows($result);
	echo "$row";
	if($row==1){
		echo "登陆成功";
		header("Location: ../html/index.html"); 
	}else{
		echo "账户不存在";
	}
	mysql_close($conn);
?>