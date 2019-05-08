<?php
	header("Content-type:text/html;charset=utf-8");
	$mobileNumber = $_POST["mobileNumber"];
	$userName = $_POST["userName"];
	$userPass = $_POST["userPass"];
	
	$conn = mysql_connect("localhost","root","root");
	if($conn){
		echo "连接成功";
		mysql_select_db("kfz");
	}else{
		echo "连接失败";
	}
	$str = "insert into usermes values('$mobileNumber','$userName','$userPass')";

	// header("Location: ../html/index.html"); 
	mysql_query($str,$conn);
	$str1 = "select *from usermes where userName='$userName'and passWord='$userPass'";
	$result = mysql_query($str1,$conn);
	$row = mysql_num_rows($result);
	echo "$row";
	if($row==1){
		echo "注册成功";
		header("Location: ../html/index.html"); 
	}else{
		echo "注册失败";
	}
	mysql_close($conn);

?>