<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

<head>

<title></title>




<?php

session_start();

$username   = $_POST['username'];
$password   = $_POST['password'];

if ($username&&$password) {

   $connect = mysql_connect("localhost", "datareader", "readdata") or die ("Couldn't connect to the database!");
   mysql_select_db("ose") or die ("Couldn't find database");
   
   $query   = mysql_query("SELECT * FROM ose_users where username='$username'");
   $numrows = mysql_num_rows($query);
   #print $numrows;   
   
   if ($numrows != 0) {
      
      // code to login (perform a password check)

      while ($row = mysql_fetch_assoc($query)) {
         $dbusername = $row['username'];
         $dbpassword = $row['password'];
      }

      // check to see if they match
      
      if ($username==$dbusername&&$password==$dbpassword) {
         
         // successfully login
         print "You're in! <br/> <a href='member.php'>Click</a> here to enter member area";
         print "<meta http-equiv='REFRESH' content='0;url=https://10.20.28.115/ose/member.php'>";
 
         // set session name
         $_SESSION['username']   = $dbusername;
         
 
         
         
         
         
      } else {
         
         // kill the page with die
         die (" <br/>
                <center>
                 Incorrect password!!
                 <br/>
                 <a href='https://10.20.28.115/ose'>Re-login</a>
                </center>
             ");  
         
      }
      
      
      
   } else {

      die (" <br/>
             <center>
              That user doesn't exist!
              <br/>
              <a href='https://10.20.28.115/ose'>Re-login</a>
             </center>
          ");  
   }


   
} else {
  
   die (" <br/>
          <center>
            Please enter username and password!
            <br/>
            <a href='https://10.20.28.115/ose'>Re-login</a>
          </center>
        ");  
}




?>


</head>

<body>






</body>

</html>
