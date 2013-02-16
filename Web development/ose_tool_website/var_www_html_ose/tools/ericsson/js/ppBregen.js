// ppBergen.js -PP-

$(document).ready(function() {

   $('#clear').click(function() {
       $('#string').val("");
    
      
   });



   $('#button').click(function() {
      
     $('#feedback').css({'display' : 'none'});
      
      var string  = $('#string').val();
      
      $(this).attr({disabled: "disabled"}).attr({value: "Parsing your output, please wait ... "});
      $('#clear').attr({disabled: "disabled"});
      $.post("/cgi-bin/pp/ose/ericsson/runAnbsiConv.cgi", { input: string }, function(data) { 
         $('#feedback').css("display", "block");  
         $('#feedback').html(data) 
         
         
         } ).complete(function() { 
            
            $('#button').removeAttr("disabled").attr({value: "Generate MML commands"}); 
            $('#clear').removeAttr("disabled"); 
            
         });
    
      
    });
    




});

