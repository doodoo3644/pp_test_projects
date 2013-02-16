<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>GTO IP address list</title>
<link href="css/ppIPaddr.css" rel="stylesheet" type="text/css" />
</head>
<body>

<?php

session_start();

if ($_SESSION['username']) {

   //echo "Welcome, " .$_SESSION['username']. "! - ";
   echo "<p style='font-size:19px;font-weight:bold'>Update IP address entry &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; <span style='font-size:13px;font-weight:normal'>";
   echo "<a href='ipquery.php'>List</a> "; 
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





<h3 style="font-size:15px">Update an IP address entry:</h3>

<form action='/cgi-bin/ose/network/ipenter.cgi' method='post'>
<table border='0' cellspacing='1'>
<tr>
 <td>IP address: </td> <td><input type='text' value=''></td>
</tr>
<tr>
 <td>Description:</td> <td><textarea id="string" rows="3" cols="50"></textarea></td>
</tr>
<tr>
 <td>Network:    </td> <td>  
                           <select name=''>
                             <option value=''>choose one</option>
                             <option value=''>OMCB</option>
                             <option value=''>IOP BAC</option>
                             <option value=''>IOP VOICE</option>
                             <option value=''>TPN 239</option>
                             <option value=''>TPN 229</option>
                           </select></td>
</tr>
<tr>
 <td>VLAN:      </td> <td> 
                           <select name=''>
                             <option value=''>choose one</option>
                             <option value='vlan28'>VLAN28</option>
                             <option value='vlan48'>VLAN29</option>
                             <option value='vlan239'>VLAN239</option>
                             <option value='vlan6'>VLAN6</option>
                             <option value='vlan11'>VLAN11</option>
                           </select></td>
</tr>
<tr>
 <td>Owner:     </td> <td><input type='text' value=''></td>
</tr>
<tr>
 <td>Assigned date:  </td><td><input type='text' value=''></td>
</tr>
<tr>
 <td>Your initial:  </td><td><input type='text' value=''></td>
</tr>
<tr>
 <td></td>            <td><input id="button" type='submit' value=" Enter it into database " /></td>
 </tr>
 </table>
</form>





<br />
<div id="mmlhead"></div>
<div id="feedback"></div>
<br />

<script type="text/javascript" src="js/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="js/ppIPaddr.js"></script>



</body>
</html>


