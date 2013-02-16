// ppBergen.js -PP-

$(document).ready(function() {

   $('#clear').click(function() {
       $('#string').val("");
    
      
   });



   $('#button').click(function() {
      
     $('#feedback').css({'display' : 'none'});
      
      var string  = $('#string').val();
      var dety    = $('#device').val();
      
      $(this).attr({disabled: "disabled"}).attr({value: "Grouping your output, please wait ... "});
      $('#clear').attr({disabled: "disabled"});
      $.post("/cgi-bin/pp/ose/ericsson/groupAxeDevice.cgi", { input: string, dety: dety }, function(data) { 

         $('#feedback').css("display", "block");  
         $('#feedback').html(data) 
         
      } ).complete(function() { 
            
            $('#button').removeAttr("disabled").attr({value: "Start Grouping Devices"}); 
            $('#clear').removeAttr("disabled"); 
            
      });
    
      
    });
    




});

