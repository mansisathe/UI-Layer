//1 What is Jquery
// -> library of Functions written on top of Javascript
//-> Jquery is superset of Javascript
//-> JQuery-> to do dom manipulation
// -> $=Jquery(?) where ? => object on which you want to perform some actions
//-> document->object->window=>document objectof DOM
//?->use Css Selectors to make the changes 
//-> "Tag name"
//-> "id"
//-> "class"

$("document").ready(function(){

    // Selectorts
    // $("body").append("<h1>This is the First Query of JQuery....</h1>");
    // $("h1:first").css("border","2px solid blue");
    // $("#h3").css("border","2px solid black");
    // $(".h").css("border","2px solid navy");


    // //replacing contents 
    // var newPara =$("p");
    // newPara.append("<i>Hello Students </i>");
    // $("#box").html(newPara);


    // //Handling Events...
    // $("#event").on("click",whenMouseClicked);
    // $("#event").on("mouseleave",whenMouseLeaves);

    // function whenMouseClicked(){
    //     $("#event").html("<h4> Hey you clicked this box.......[Click Event]</h4>");
    // }

    // function whenMouseLeaves(){
    //     $("#event").html("<h4> Where is going mouse[Click Event]</h4>");
    // }


    // Creating Content
    //alert($("#container").html());
    // $("#create").click(function(){
        
    //     $("#container p:first").html("<p>Replaced and create this test </p>");
    // });

    // $("#create_text").click(function(){
        
    //     $("#container p:first").text("<p>Replaced and create this test </p>");
    // });

    // $("#create_variable").click(function(){
    //     var newText=$('#container p:first');
    //     $("#container p:last").html(newText);
    // });


    //Inserting content part 1
    // $("#appendTo").click(function(){
    //     $("p:first").append(" Hello");
        
    // })
    // $("#preappendTo").click(function(){
    //     $("p:first").prepend(" Again Hello from pre append");
        
    // })


    //Inserting content part 2
    // $("#appendTo").click(function(){
    //     $("#box2 p:first").appendTo("#box2 p:last");
        
    // })
    // $("#preappendTo").click(function(){
    //     $("p:last").prependTo("p:first");
        
    // })
    
    // $("#preappendTo").click(function(){
    //     $("p").after("* *");
        
    // })

    // $("#preappendTo").click(function(){
    //     $("p").before("* *");
        
    // })

    // $("#preappendTo").click(function(){
    //     $("<p>this is new para</p>").insertAfter("p:first");
        
    // })
    
    // $("#preappendTo").click(function(){
    //     $("<p>this is new para</p>").insertBefore("p:first");
        
    // })


    // Modifying content part1
    //$("#container p").wrap("<div id='box'>");
    //$("#container p").wrapAll("<div id='box'>");
    //$("#container p:first").wrap("<div id='box'>");
    //$("#container p:first").empty();
    //$("#container p").empty();
    //$("#container").empty();
    //$("#container p:first").remove();
    //$("#container").remove();
    //$("<div> container </div>").replaceAll("#container");
    //$("#container").replaceWith("<div> this has been replaced </div>");

    //CSS Manipulation
    // $("#add-class").click(function(){
    //     $("p:first").addClass('color');
    // });
    // $("#remove-class").click(function(){
    //     $("p:first").removeClass('color');
    // });
    // $("#toggle-class").click(function(){
    //     $("p:first").toggleClass('color');
    // });
    // $("#increment-size").click(function(){
    //     $("p:first").css("font-size","+=1px");
    // })


    //Navigation DOM and statement chaining
    //$("#nav p:first").next().css("border","2px solid red");
    //$("#nav p:last").prev().css("border","2px solid red");
    //$("#nav").parents().css("border","2px solid red");
    //$("#nav").parents().addClass('color').css("border","2px solid red");
    
    
        $("#p1").click(function(){
            $("#p1").prepend("paragraph").append("one");
            $("#p2").prependTo("#p1")
        })

});