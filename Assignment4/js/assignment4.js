
//Jquery manipulation

$("document").ready(function(){
  //CSS Manipulation
$("#add-class").click(function(){
    $("p:first").addClass('color');
});
$("#remove-class").click(function(){
    $("p:first").removeClass('color');
});
$("#toggle-class").click(function(){
    $("p:first").toggleClass('color');
});
$("#increment-size").click(function(){
    $("p:first").css("font-size","+=2px");
});
$("p").click(function(){
    alert("YOU CLICKED THE JQUERY LINESS");
});
});
    