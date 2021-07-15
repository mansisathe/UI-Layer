
console.log("workinggg");

$(document).ready(function() {
    
        $('h1').bind('click',function( event ){
          
            alert('Hi there!'+ event.target.innerHTML);
       
        }
        )
      
  
}
)