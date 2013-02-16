// ppBergen.js -PP-

$(document).ready(function() {


//   $( "#accordion" ).accordion({
//      heightStyle: "fill"
//   });
//   
//   $( "#accordion-resizer" ).resizable({
//      minHeight: 140,
//      minWidth: 200,
//      resize: function() {
//         $( "#accordion" ).accordion( "refresh" );
//      }
//   });

  var chosen;
  var msisdn;
  var squery;

 $(function() {
   $( "#rerun" )
      .button()
      .click(function() {
         //alert( "Running the last action -->" + chosen);
         

         //Validate the text field for numeric
         if($('#msisdn').val() != "") {
            var value = $('#msisdn').val().replace(/^\s\s*/, '').replace(/\s\s*$/, '');
            var intRegex = /^\d+$/;
            if(!intRegex.test(value)) {
               alert("Field must be numeric and no blank/space.");
               success = false;
               return false;
            
            } else if (value.length > 15 ) {
               alert("Invalid MSISDN: \n\nMSISDN string should be 5 - 15 digits.");
               success = false;
               return false;
            } else if (value.length < 5 ) {
               alert("Invalid MSISDN: \n\nMSISDN string should be 5 - 15 digits.");
               success = false;
               return false;
            }
            
         } else {
            alert("Field is blank.");
            success = false;
            return false;
         }
         
         
         
         msisdn   = $('#msisdn').val();
         
         if (chosen == 'HLR only') {
            squery = 'hlr';
         }
         else if (chosen == 'VLR only') {
            squery = 'vlr';
         }
         else if (chosen == 'Both (default)') {
            squery = 'both';
         }
         else {
            squery = 'both';
         }
         //$('#result').css("display", "none");
         $('#result').toggle("clip"); 
         $('#progress').css({'display' : 'block'}); 
         $('#progress').html('<p> &nbsp; &nbsp; <img src="images/progress_pacman1.gif" /> </p>');
         $("#msisdn").prop('disabled', true);
         $('#rerun').button("disable");
         $('#select').button("disable");
         $.post("/cgi-bin/pp/ose/ericsson/dispSub.cgi", { msisdn: msisdn, squery: squery }, function(data) { 
            
            //$('#result').css("display", "block");
            $("#msisdn").prop('disabled', false);
            $('#rerun').button("enable");
            $('#select').button("enable");

            $('#progress').css({'display' : 'none'});
            $('#result').html(data) 
            $('#chosenQuery').css({'display' : 'none'});
            chosen = 'Both (default)';
         
         }).complete(function() { 
              
           // 
            
         });         
         
         
         
         
         
         
      })
      .next()
         .button({
            text: false,
            icons: {
               primary: "ui-icon-triangle-1-s"
            }
         })
         .click(function() {
            var menu = $( this ).parent().next().show().position({
               my: "left top",
               at: "left bottom",
               of: this
            });
            $( document ).one( "click", function() {
               menu.hide();
            });
            return false;
         })
         .parent()
            .buttonset()
            .next()
               .hide()
               .menu();
 }); 
   

   $('#squery a').click(function() {
      $('#chosenQuery').css({'display' : 'block'});
      chosen  = $(this).text();
      if ( chosen == 'Both (default)' ) {  
         $('#chosenQuery').text("query in both HLR and VLR");
      } else {
         $('#chosenQuery').text("query in " + chosen);
      }
   });
 


   $("#msisdn").focus(function() {
      if ($(this).val() == $(this)[0].title) {
         $(this).removeClass("defaultTextActive");
         $(this).val("");
      }
   });
    
   $("#msisdn").blur(function() {
      if ($(this).val() == "") {
         $(this).addClass("defaultTextActive");
         $(this).val($(this)[0].title);
      }
   });
    
 


});

