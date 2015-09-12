<?php
$host="localhost";
$db_user="";  //用户名
$db_pass="";  //密码
$db_name="";  //数据库名

$link=mysql_connect($host,$db_user,$db_pass);
mysql_select_db($db_name,$link);
mysql_query("SET names UTF8");

header("Content-Type: application/json; charset=utf-8");

$action = $_GET['action'];
$id = 1;
$ip = get_client_ip();

if($action=='add'){
	likes($id,$ip);
}else if($action=='get'){
	echo jsons($id);
} else {
	exit();
}

function likes($id,$ip){
	$ip_sql=mysql_query("select ip from votes_ip where vid='$id' and ip='$ip'");
	$count=mysql_num_rows($ip_sql);
	if($count==0){//还没有顶过
		$sql = "update votes set likes=likes+1 where id=".$id;
		mysql_query($sql);
		$sql_in = "insert into votes_ip (vid,ip) values ('$id','$ip')";
		mysql_query($sql_in);
		echo jsons($id);
	}else{
		$msg = 'repeat';
		$arr['success'] = 0;
		$arr['msg'] = $msg;
		echo json_encode($arr);
	}
}

function jsons($id){
	$query = mysql_query("select * from votes where id=".$id);
	$row = mysql_fetch_array($query);
	$arr['success'] = 1;
	$arr['like'] = $row['likes'];	
	return json_encode($arr);
}

//获取用户真实IP
function get_client_ip() {
	if (getenv("HTTP_CLIENT_IP") && strcasecmp(getenv("HTTP_CLIENT_IP"), "unknown"))
		$ip = getenv("HTTP_CLIENT_IP");
	else
		if (getenv("HTTP_X_FORWARDED_FOR") && strcasecmp(getenv("HTTP_X_FORWARDED_FOR"), "unknown"))
			$ip = getenv("HTTP_X_FORWARDED_FOR");
		else
			if (getenv("REMOTE_ADDR") && strcasecmp(getenv("REMOTE_ADDR"), "unknown"))
				$ip = getenv("REMOTE_ADDR");
			else
				if (isset ($_SERVER['REMOTE_ADDR']) && $_SERVER['REMOTE_ADDR'] && strcasecmp($_SERVER['REMOTE_ADDR'], "unknown"))
					$ip = $_SERVER['REMOTE_ADDR'];
				else
					$ip = "unknown";
	return ($ip);
}
?>