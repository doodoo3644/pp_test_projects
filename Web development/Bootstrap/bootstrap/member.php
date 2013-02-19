<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>OSE tools - member page</title>
<link href="css/bootstrap.css" rel="stylesheet" type="text/css">
<link href="css/bootstrap-responsive.css" rel="stylesheet" type="text/css">

<!-- HTML5 shim for IE backwards compatibility -->
<!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

</head>


<style>
.navbar-inverse .brand {
font-size: 22px;
color: #000;
text-shadow: 0 1px 0 rgba(255,255,255,.1), 0 0 30px rgba(255,255,255,.4);
}
</style>


<?php

session_start();

if ($_SESSION['username']) {
   echo "
<div class='navbar navbar-inverse navbar-fixed-top'>
  <div class='navbar-inner'>
    <div class='container'>
      <a class='btn btn-navbar' data-toggle='collapse' data-target='.nav-collapse'>
        <span class='icon-th-list'></span>
      </a>
      <a href='#' class='brand'>Operation support</a>
      
      <div class='nav-collapse collapse'>
        <ul class='nav pull-right'>
          <li class='active'><a href='#'>Home</a></li>
          <li><a href='#'>About</a></li>    ";
          
    echo "<li><a href='#'>Hi ".$_SESSION['username']. "</a></li>
        </ul>
      </div>
    </div>
  </div>
</div> 
        ";


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






<script src="http://code.jquery.com/jquery-latest.js"></script> 
<script src="js/bootstrap.min.js"></script>
</body>
</html>
