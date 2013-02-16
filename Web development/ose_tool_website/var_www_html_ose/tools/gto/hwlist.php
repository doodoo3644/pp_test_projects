<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>GTO HW Inventory List</title>
<!--<link href="css/ppGtoHwList.css" rel="stylesheet" type="text/css" /> -->

<link href="css/table_sorter_css/style.css" rel="stylesheet" type="text/css" />

</head>
<body>


<?php

session_start();

if ($_SESSION['username']) {

   //echo "Welcome, " .$_SESSION['username']. "! - ";
   echo "<p style='font-size:19px;font-weight:bold'>GTO HW Inventory List &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; <span style='font-size:13px;font-weight:normal'>";
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




<h3 style="font-size:15px">Select a table:</h3>

<table>
   <tr>
      <td>
         <div id="tab1"></div>
      </td>
      <td>
         <input id="button" type='submit' value=" Query " />
      </td>
   </tr>





</table>

<!-- </form> -->


<hr width="90%" ALIGN="LEFT" NOSHADE/>

<div id='show'></div>



<br />



<script type="text/javascript" src="js/jquery-1.8.2.min.js"></script>
<script type="text/javascript" src="js/table_sorter_js/jquery.tablesorter.min.js"></script>
<script type="text/javascript" src="js/ppGtoHwList.js"></script>

</body>
</html>


