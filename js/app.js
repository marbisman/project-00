//add juery on ready
$(document).ready(function() {

//name all of the variable from html ids
var score = $('#score');
var track = $('#track');
var line1 = $('#line1');
var line2 = $('#line2');
var line3 = $('#line3');
var yourCar = $('#yourCar');
var car1 = $('#car1');
var car2 = $('#car2');
var car3 = $('#car3');
var restartBtn = $('#restart');

//initial setup of your track
var lineSpeed = 3;

//initial setup of your car
var endGame = false;
var score = 0;
var speed = 1;


//initial setup of opponent cars

//score

//your car speed

//the line speed

//move your car
$(document).on('keydown', function(input)){
  if (endGame === false){
    var key = input.keyCode;
    if (key ===37 && move_left === false){
      move_left = requestAnimationFrame(left);
    }
    else if (key === 39 && move_right === false){
      move_right = requestAnimationFrame(right);
    }
    else if (key === 38 && move_up === false){
      move_up = requestAnimationFrame(up);
    }
    else if (key === 40 && move_down === false){
      move_down = requestAnimationFrame(down);
    }
  }
});

//move opponent cars

//move your lines so the track looks like it is moving

//restart button
