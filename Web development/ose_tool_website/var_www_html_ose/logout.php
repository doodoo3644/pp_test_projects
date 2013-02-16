<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

<head>

<title></title>

</head>

<body>


<?php

session_start();

session_destroy();

print " <br/>
         <center>
          You've been logged out.
          <br/>
          <a href='index.php'>Click</a> here to return
         </center> ";  


?>





</body>

</html>
