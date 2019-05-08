<?php
	header("Content-type:text/html;charset=utf-8");
	$mobileNumber = $_POST["mobileNumber"];
	$conn = mysql_connect("localhost","root","root");
	mysql_select_db("kfz");
	$result = mysql_query("select *from usermes where mobileNumber='$mobileNumber'",$conn);
	$rows = mysql_num_rows($result);
	if($rows == 1){
		echo "1";
	}else{
		echo "0";
	}
?>