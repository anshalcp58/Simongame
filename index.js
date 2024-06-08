var userlist=[];
var keylist=[];


$(document).keypress(function(){
  $("h1").text("Level");
  game();
});
function game() {
  userlist=[];
  var j=0;
  var level=1;
  pressmainbutton() ;
    function pressmainbutton(){
      $("h1").text("Level "+level);
      var k=0;
      var i = 1;
      pressButton();
   function pressButton() {


    var randomKey = 1 + Math.floor(4 * Math.random());

    switch (randomKey) {
      case 1:
        $("#green").addClass("pressed");
        setTimeout(function () {
          $("#green").removeClass("pressed");
          keylist[k]=randomKey;
          k++;
          nextIteration();
        }, 1000);
        break;
      case 2:
        $("#red").addClass("pressed");
        setTimeout(function () {
          $("#red").removeClass("pressed");
          keylist[k]=randomKey;
          k++;
          nextIteration();
        }, 1000);
        break;
      case 3:
        $("#blue").addClass("pressed");
        setTimeout(function () {
          $("#blue").removeClass("pressed");
          keylist[k]=randomKey;
          k++;
          nextIteration();
        }, 1000);
        break;
      case 4:
        $("#yellow").addClass("pressed");
        setTimeout(function () {
          $("#yellow").removeClass("pressed");
          keylist[k]=randomKey;
          k++;
          nextIteration();
        }, 1000);
        break;
      default:
        break;
    }
    
    function nextIteration() {
      i++;
      if  (i<=level){
        setTimeout(pressButton, 500); // Adjust the delay (in milliseconds) between iterations as needed
  
      }
      else{
         j= 0;}
      
      
     
    }
  

  
  }

}


  $(".btn").click(function(){
    
    
    
   var buttonid=$(this).attr('id');



    switch (buttonid) {
      case "green":
           userlist[j]=1
           j++;
           $("#green").addClass("pressed");
           setTimeout(function () {
             $("#green").removeClass("pressed");},500);
        break;
        case "red":
          userlist[j]=2
          j++;
          $("#red").addClass("pressed");
           setTimeout(function () {
             $("#red").removeClass("pressed");},500);
          
        break;
        case "blue":
          userlist[j]=3
          j++;
          $("#blue").addClass("pressed");
           setTimeout(function () {
             $("#blue").removeClass("pressed");},500);
        break;
        case "yellow":
          userlist[j]=4
          j++;
          $("#yellow").addClass("pressed");
           setTimeout(function () {
             $("#yellow").removeClass("pressed");},500);
        break;
    
      default:
        break;
    }





if (j>=level)
{
  if(JSON.stringify(keylist) === JSON.stringify(userlist))
  {


    level++;
    pressmainbutton();

  }
    else{
      alert("game over");
      
    }
        

  }

})






  
  
  

  

  }
  
  
  
  
 
  













































