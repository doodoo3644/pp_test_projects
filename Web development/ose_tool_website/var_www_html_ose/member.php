<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

<head>

<title>OSE tools - member page</title>

</head>

<body bgcolor="#eeeeee">



<?php

session_start();

if ($_SESSION['username']) {
   
   echo "<center><h1>Welcome to OSE tools</h1></center>";

   echo "Welcome, <b>" .$_SESSION['username']. "</b>! - ";
   echo "<a href='logout.php'>Logout</a>";

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


<br />

<br />
<h2>Ericsson</h2>
<p>- <a href="tools/ericsson/bregen.php">B-table regenerator</a></p>
<p>- <a href="tools/ericsson/devgroup.php">Device grouping tools</a></p>
<p>- <a href="tools/ericsson/dispsub.php">HLR/VLR subscriber query</a></p>
<p></p>

<br/><br/>
<h2>Networking</h2>
<p>- <a href="tools/network/ipquery.php">IP address list</a></p>

<br/><br/>
<h2>Equipment</h2>
<p>- <a href="tools/gto/hwlist.php">GTO HW inventory list</a></p>



</body>

</html>
