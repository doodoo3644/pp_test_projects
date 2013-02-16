<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>AXE Device Grouping tool</title>
<link href="css/ppDevgroup.css" rel="stylesheet" type="text/css" />
</head>
<body>


<?php

session_start();

if ($_SESSION['username']) {

   //echo "Welcome, " .$_SESSION['username']. "! - ";
   echo "<p style='font-size:19px;font-weight:bold'>Ericsson Device Grouping Tool &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; <span style='font-size:13px;font-weight:normal'>";
   echo "- <a href='../../member.php'>Home</a> - ";
   echo "<a href='../../logout.php'>Logout</a>";
   echo "</span> </p>";

} else {
   
   die (" <br/>
       <center>
        You must be logged in!
        <br/>
        <a href='https://10.20.28.115/ose'>Login</a>
       </center>
    ");  
 }

?>






<h3>Paste STRDP, EXDEP or STDEP printout into text area below:</h3>
<textarea id="string" rows="15" cols="78"></textarea> <br />
<input id="clear" type="button" value="Clear" />
<p>Select dety and click Start: </p>
<select id="device">
<option value="updr">UPDR</option>
<option value="mralt">MRALT</option>
<option value="liprrmg">LIPRRMG</option>
</select>
<input id="button" type="button" value="Start Grouping Devices" />

<br />
<div id="mmlhead"></div>
<div id="feedback"></div>
<br />

<script type="text/javascript" src="js/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="js/ppDevgroup.js"></script>
</body>
</html>


