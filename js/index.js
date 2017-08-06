//Declare variables needed throughout
//Unix epoch start time (January 1, 1970)
//Curent time in seconds since Unix start
var cts = Math.round(new Date().getTime() / 1000);

//Beginning of the First Term
var bft = new Date(2017,0,21,00,00,00,0);
var bfts = Math.round(bft.getTime() / 1000);

//End of the First Term
var eft = new Date(2021,0,21,00,00,00,0);
var efts = Math.round(eft.getTime() / 1000);

//End of the Second Term
var est = new Date(2025,0,21,00,00,00,0);
var ests = Math.round(est.getTime() / 1000);

//Length of Term in Seconds
var termLength = efts - bfts;

//Time Passed
var timePassed = cts - bfts;

//Time Remaining
var timeRemaining = efts - cts;
console.log("time remaining:" + timeRemaining);

//Normalize values based on screen size
// screen height = length of term
// -------------   --------------
//  start         point in term
//
// current loc = (screen height * point in term) / length of term
var ww = window.innerWidth;
var hh = window.innerHeight;
console.log("height: " + hh);
var footerHeight;
//This function will run when the DOM has fully loaded
$(window).ready(function(){
   footerHeight = $("#footer").height();
   var fh = hh - footerHeight;
   console.log("footer height: " + footerHeight);
   console.log("full height: " + fh);

   var start = (hh * timePassed) / termLength;
   console.log("current height: " + start);
   $("#logo").parent().css({position: 'relative'});
   $("#logo").css({left:((ww / 2) - 50), top:start, position:'absolute'});
   var logo = document.getElementById("logo");
   TweenLite.to(logo, timeRemaining, {y:hh});

   //On Impeach click, change the time to move to ASAP
   $("#now").click(function() {
      TweenLite.to(logo, 10, {y:(hh)});
   });
});

//This function will run every 1/10 of a second once the DOM is loaded
setInterval(function(){
   cts = Math.round(new Date().getTime() / 1000);
   var rts = efts - cts; //Remaining time in seconds
   var rth = rts / 3600; //Remaining time in hours
   var rtd = Math.round(rth / 24);
   var rtm = Math.round(rtd / 30.42);
   var rtw = Math.round(rtd / 7);
   var rty = (rtw / 52).toFixed(2);

   //Ensure the sun is always centered
   $("#logo").css({left:((ww / 2) - 50)});

   //Display information
   $("#wholder").replaceWith("<div id=\"wholder\">Width is: " + ww + " </div>");
   $("#hholder").replaceWith("<div id=\"hholder\">Height is: " + hh + " </div>");
   $("#fholder").replaceWith("<div id=\"hholder\">Footer is: " + footerHeight + " </div>");

   $("#rts").replaceWith("<div id=\"rts\">Seconds: " + rts + " </div>");
   $("#rtd").replaceWith("<div id=\"rtd\">Days: " + rtd + " </div>");
   $("#rtm").replaceWith("<div id=\"rtm\">Months: " + rtm + " </div>");
   $("#rty").replaceWith("<div id=\"rty\">Years: " + rty + " </div>");
}, 100);

//This function will run when the window is resized
$(window).resize(function() {
   ww = window.innerWidth;
   hh = window.innerHeight;
   $("#wholder").replaceWith("<div id=\"wholder\">Width is:" + ww + " </div>");
   $("#hholder").replaceWith("<div id=\"hholder\">Height is:" + hh + " </div>");
});
