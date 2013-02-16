<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Ericsson HLR/VLR Subscriber Query</title>
<link href="css/theme/redmond/jquery-ui-1.9.2.custom.css" rel="stylesheet">
<link href="css/ppDispsub.css" rel="stylesheet" type="text/css" />
</head>
<body>

<?php

session_start();

if ($_SESSION['username']) {

   //echo "Welcome, " .$_SESSION['username']. "! - ";
   echo "<p style='font-size:16px;font-weight:bold'>Ericsson HLR/VLR Subscriber Query &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; <span style='font-size:13px;font-weight:normal'>";
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


<table>
 <tr>
  <td>

 <!--<span style="font-size:12px;font-weight:bold">MSISDN: &nbsp; </span> -->


   <input type="text" id="msisdn" title="Enter MSISDN  e.g. 881631410000"> 
  </td>
  <td>
   <div>
      <div>
         <button id="rerun">Query Ericsson Switch</button>
         <button id="select">Select an action</button>
      </div>
      <ul id="squery">
         <li><a href="#">HLR only</a></li>
         <li><a href="#">VLR only</a></li>
         <li><a href="#">Both (default)</a></li>
      </ul>
   </div>
  </td>
  <td>
  <div id=chosenQuery></div>
  </td>
  </td> 
 </tr>
</table>

<br />
<div id="progress"></div>
<div id="result">
<!--
<div id="accordion-resizer" class="ui-widget-content">
 <div id="accordion">

   <h3>HLR printout</h3>
      <div id="hlrdisp">fsdfdfsfdf sfsdfdsfsdf dfdsfsdff</div>
   <h3>VLR printout</h3>
      <div id="vlrdisp">VVVVVVV dfsdfdfsfsfsdfsdfdsf SFSFDCCVVVVV</div>

 </div>
</div>
-->
</div>

<div id="dialog-modal" title="Printout Descriptions">
   <pre>
<b>state</b>         State of MS (STATE)

<b>IDLE</b>          Idle and attached
<b>BUSY</b>          Busy and attached
<b>DET</b>           Detached
<b>IDET</b>          Implicit detached
<b>LIMITED</b>       Idle and Limited Services due to partial roaming restriction 

<hr/>
<b>restr</b>         Roaming restriction information (RESTR)
              This parameter indicates the restriction with the highest priority.
              The MS roaming restrictions from highest to lowest priority, are the following :

<b>NSUPPF</b>        Roaming restricted for MS because of not supported feature
<b>NATROAM</b>       Roaming restricted for MS because of national roaming restriction
<b>REGROAM</b>       Roaming restricted for MS because of regional subscription 
<b>LOCROAM</b>       Roaming restricted for MS because of local subscription  

<hr/>
<b>cnt</b>           IMEI access counter value (CNT)
              You can predict when MSC will fetch IMEI from EIR by
              seeing IMEIACCESSLIMIT in Exchange Property
              MGEPP:ID=IMEIACCESSLIMIT;

<hr/>
<b>mstat</b>         Mobile subscriber status (MSTAT)

<b>NOTREG</b>        Mobile subscriber not registered in this MSC/VLR Server        
<b>REG</b>           Mobile subscriber registered in this MSC/VLR Server
 
<hr/>
<b>bs</b>            Basic service Data (BASIC SERVICE DATA)

<b>AUXTPHY</b>       Auxiliary telephony
<b>DCDA300</b>       Data circuit, duplex, asynchronous, 300 bits
<b>DCDA1200/75</b>   Data circuit, duplex, asynchronous, 1200/75 bits 
<b>DCDA1200</b>      Data circuit, duplex, asynchronous, 1200 bits
<b>DCDA2400</b>      Data circuit, duplex, asynchronous, 2400 bits
<b>DCDA4800</b>      Data circuit, duplex, asynchronous, 4800 bits
<b>DCDA9600</b>      Data circuit, duplex, asynchronous, 9600 bits
<b>GENERAL-DCDA</b>  Data circuit, duplex, asynchronous, all supported data rates
<b>DCDS1200</b>      Data circuit, duplex, synchronous, 1200 bits
<b>DCDS2400</b>      Data circuit, duplex, synchronous, 2400 bits
<b>DCDS4800</b>      Data circuit, duplex, synchronous, 4800 bits
<b>DCDS9600</b>      Data circuit, duplex, synchronous, 9600 bits
<b>GENERAL-DCDS</b>  Data circuit, duplex, synchronous, all supported data rates
<b>FX</b>            All facsimile transmission services
<b>AFX3</b>          Automatic facsimile, Group three
<b>ALTSPFAX</b>      Alternate speech and facsimile, Group three
<b>SMS</b>           All SMSs
<b>SMSMO</b>         SMS, mobile-originated, point-to-point 
<b>SMSMT</b>         SMS, mobile-terminated, point-to-point 
<b>SPCH</b>          All speech transmission services
<b>EMERG</b>         Emergency call
<b>TPHY</b>          Telephony
 
<hr/>
<b>ss</b>            Supplementary service (SS)

<b>AOCC</b>          Advice of charge (charging)
<b>AOCI</b>          Advice of charge (information)
<b>BAOC</b>          Barring of all outgoing calls
<b>BOIC</b>          Barring of outgoing international calls
<b>BOIEXH</b>        Barring of outgoing international calls, except those directed to Home Public Land      
                     Mobile Network (HPLMN) country
<b>CFB</b>           Call forwarding on mobile subscriber busy
<b>CFNRC</b>         Call forwarding on mobile subscriber not reachable 
<b>CFNRY</b>         Call forwarding on no reply
<b>CFU</b>           Call forwarding, unconditional
<b>CLIP-N</b>        Calling line identification presentation, no override 
<b>CLIP-O</b>        Calling line identification presentation, override 
<b>CLIR-P</b>        Calling line identification restriction, permanent 
<b>CLIR-TA</b>       Calling line identification restriction, temporary mode, default allowed
<b>CLIR-TR</b>       Calling line identification restriction, temporary mode, default restricted
<b>COLP-N</b>        Connected line identification presentation, no override 
<b>COLP-O</b>        Connected line identification presentation, override 
<b>COLR</b>          Connected line identification restriction
<b>CW</b>            Call waiting
<b>ECT</b>           Explicit Call Transfer
<b>EMLPP</b>         Enhanced multi-level precedence and pre-emption
<b>HOLD</b>          Call hold
   </pre>
</div>
<script src="js/theme/redmond/jquery-1.8.3.min.js"></script>
<script src="js/theme/redmond/jquery-ui-1.9.2.custom.min.js"></script>
<script src="js/ppDispsub.js"></script>



</body>
</html>


