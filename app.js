//global variables
var endGame = false;

//add juery on ready
$(document).ready(function() {
console.log ("ready");

//add players for start
$(document).on("click",function(){
  function playersStart(){
    $("#player1").addClass("p1Ready");
    $("#player2").addClass("p2Ready");
    $('button').removeClass("start").addClass("playing");
  }
});
//move car 1 using right arrow key and 1 key
$(document).on("click",function(){
      if(key.keyCode === 39 && endGame === false){
        moveCars("car1");
      }
      if(key.keyCode === 49 && endGame === false){
        moveCars("car2");
      }
    });
  });
//pick a winner

//tie game

//restart
