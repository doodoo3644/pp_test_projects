<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>GTO IP address Query</title>
<link href="css/ppIPaddr.css" rel="stylesheet" type="text/css" />
</head>
<body>


<?php

session_start();

if ($_SESSION['username']) {

   //echo "Welcome, " .$_SESSION['username']. "! - ";
   echo "<p style='font-size:19px;font-weight:bold'>GTO IP address list &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; <span style='font-size:13px;font-weight:normal'>";
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




<h3 style="font-size:15px">Query IP address:</h3>

<!-- <form action='/cgi-bin/ose/network/ipquery.cgi' method='post'> -->
<!-- <form  method='post'> -->
<select id='vlan' name=''>
  <optgroup label="Core Routers">
   <option value='vlan28'>VLAN28 - OMCB</option>
   <option value='vlan29'>VLAN29 - Admin</option>
   <option value='vlan30'>VLAN30 - SRS</option>
   <option value='vlan139'>VLAN139 - SBD 6.0 and GWPA139 MDN</option>
   <option value='vlan239'>VLAN239 - SBD 6.0 and GWPA239 ADN</option>
   
  </optgroup>
  <optgroup label="GIE Routers">
   <option value='vlanG28'>VLAN28 - OMCG</option>
   <option value='vlanG18'>VLAN18 - Ericsson</option>
   <option value='vlanG21'>VLAN21 - MOC</option>
  </optgroup>
</select>

<!-- <span> and IP address: </span>        --> 
<!-- <input id='ip' type='text' value=''>  -->
<input id="button" type='submit' value=" Query " />

<!-- </form> -->


<hr/>

<div id='show'></div>



<br />

<script type="text/javascript" src="js/jquery-1.8.2.min.js"></script>
<script type="text/javascript" src="js/ppIPquery.js"></script>



</body>
</html>


