//Unix epoch start time (January 1, 1970)
//Curent time in seconds since Unix start
var cts = new Date().getTime() / 1000;

//End of the First Term
var eft = new Date(2021,0,21,00,00,00,0);
var efts = eft.getTime() / 1000;

//End of the Second Term
var est = new Date(2025,0,21,00,00,00,0);
var ests = eft.getTime() / 1000;

//Normalize values based on screen size

var ww = window.innerWidth;
var hh = window.innerHeight;

$(window).resize(function() {
   ww = window.innerWidth;
   hh = window.innerHeight;
   // $("#demo").append("<div>Width is:" + ww + " </div>");
   $("#wholder").replaceWith("<div id=\"wholder\">Width is:" + ww + " </div>");
   $("#hholder").replaceWith("<div id=\"hholder\">Height is:" + hh + " </div>");
});

$(window).load(function() {
   $("#demo").append("<div id=\"st\">Starting width is:" + ww + " </div>");
   $("#demo").append("<div id=\"eft\">First Term End Date:" + eft + " </div>");
   $("#demo").append("<div id=\"efts\">First Term End Time:" + efts + " </div>");
   $("#demo").append("<div id=\"est\">Second Term End Date:" + est + " </div>");
   $("#demo").append("<div id=\"ests\">Second Term End Time:" + ests + " </div>");
   var logo = document.getElementById("logo");
   TweenLite.to(logo, 5, {left:"632px"});
});

//Set to occur every second
setInterval(function(){
   cts = new Date().getTime() / 1000;
   var rt = efts - cts;
   $("#rt").replaceWith("<div id=\"rt\">Time until leaving office:" + rt + " </div>");
}, 1000);
