//Unix epoch start time (January 1, 1970)
//Curent time in seconds since Unix start
var cts = Math.round(new Date().getTime() / 1000);
console.log("ct: " + cts);

//Beginning of the First Term
var bft = new Date(2017,0,21,00,00,00,0);
var bfts = Math.round(bft.getTime() / 1000);
console.log("bt: " + bfts);

//End of the First Term
var eft = new Date(2021,0,21,00,00,00,0);
var efts = Math.round(eft.getTime() / 1000);

//End of the Second Term
var est = new Date(2025,0,21,00,00,00,0);
var ests = Math.round(est.getTime() / 1000);

//Length of Term in Seconds
var termLength = efts - bfts;
console.log("term length: " + termLength);

//Time Passed
var timePassed = cts - bfts;
console.log("time passed: " + timePassed);

//Time Remaining
var timeRemaining = efts - cts;
console.log("time remaining:" + timeRemaining);

//Normalize values based on screen size
// screen width = length of term
// ------------   --------------
//  start         point in term
//
// current loc = (screen width * point in term) / length of term
// screen width = (length)
var ww = window.innerWidth;
var hh = window.innerHeight;
var start = (ww * timePassed) / termLength;
console.log("current width: " + start);

var change = false;
console.log("change: " + change);

$(window).resize(function() {
   ww = window.innerWidth;
   hh = window.innerHeight;
   // $("#demo").append("<div>Width is:" + ww + " </div>");
   $("#wholder").replaceWith("<div id=\"wholder\">Width is:" + ww + " </div>");
   $("#hholder").replaceWith("<div id=\"hholder\">Height is:" + hh + " </div>");
});

$(window).load(function() {
   $("#logo").parent().css({position: 'relative'});
   $("#logo").css({left: start, position:'absolute'});
   $("#demo").append("<div id=\"st\">Starting width is:" + ww + " </div>");
   $("#demo").append("<div id=\"lt\">Length of Term:" + termLength + " </div>");
   var logo = document.getElementById("logo");
   TweenLite.to(logo, timeRemaining, {left:ww});
});

$("#now").click(function() {
   change = true;
   console.log("change: " + change);
   var logo1 = document.getElementById("logo");
   TweenLite.to(logo1, 5, {left:ww});
});

//Set to occur every second
setInterval(function(){
   cts = Math.round(new Date().getTime() / 1000);
   var rt = efts - cts;
   $("#rt").replaceWith("<div id=\"rt\">Time until leaving office:" + rt + " </div>");
   if(change){
      var logo1 = document.getElementById("logo");
      TweenLite.to(logo1, 5, {left:ww});
   }
}, 1000);
