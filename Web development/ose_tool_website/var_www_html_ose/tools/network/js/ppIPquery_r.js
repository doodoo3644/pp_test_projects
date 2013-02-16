// query for an entry in ipaddr database //

$(document).ready(function() {
   $('#button').click(function() {
      var vlan    = $('#vlan').val();
      var ipaddr  = $('#ip').val();

      $.post("/cgi-bin/pp/ose/network/listIPaddr_r.cgi", {vlan : vlan, ipaddr : ipaddr}, function(data) {
         $("#show").html(data);

         $("input:checkbox").click(function() {
           
           var ipvalue    = $(this).val();            
           var editing = '<td><input type="checkbox" checked="checked"></td> <td>' + ipvalue + '</td> <td><input type="text" size="1" maxlength="2"></td><td><input type="text" size="5"></td><td><input type="text" size="9"></td><td><input type="text" size="9"></td><td><textarea rows="2" cols="30"/></td><td><input type="text"></td><td><input type="text" size="8" maxlength="10"></td><td><input type="text" size="8" maxlength="10"></td><td><input type="text" size="1" maxlength="3"></td> <td><button class="inner" type="button" value="' + ipvalue + '"><span>update</span></button></td>';

           var thischeck  = $(this);
           var original   = $(this).parent().parent().html();
           if (thischeck.is (':checked')) {

               //var daddy       = $(this).parent().parent().html();
               $(this).parent().parent().html(editing);
               //$(this).parent().parent().html(<td>dadada</td>);
               

          
           
           } 
           
           
           $(".inner").click(function() {
               
               var ipa   = $(this).val();
               var series = "";
               var desc = "";

               
              $(this).parent().parent().find("input").each(function() {
                  var string  = $(this).val();
                  series = series + "D00d00" + string;  
              });

              $(this).parent().parent().find("textarea").each(function() {
                  var string  = $(this).val();
                  desc  = string;
              });
              
              $.post("/cgi-bin/pp/ose/network/updateIPaddr.cgi", {vlan : vlan, ipa : ipa, series : series, desc : desc}, function(data) {
                 $("#show").html(data);
               
               
                                
              });
               
            
           });
          



            
         });



         $(function() {
           $("#tab1 tr:odd").addClass("stripe1"); 
           $("#tab1 tr:even").addClass("tabTr"); 
           
//           $("#tab1 tr").hover(
//            function(){
//               $(this).toggleClass("highlight"); 
//            }, 
//            function(){
//               $(this).toggleClass("highlight"); 
//            }); 
         });


 

     
      });
   });

   
});




