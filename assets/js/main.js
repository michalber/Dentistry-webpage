$(function(){ 
   AOS.init({
       duration: 1000
   });
});
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
$(document).ready(function(){
    $(window).scroll(function() { 
        if ($(document).scrollTop() > 100) { 
//            $("nav").css("background", "rgb(125, 106, 96,0.8)");                       
            $("nav").css("background", "linear-gradient(175.9deg,rgba(125, 106, 96, 0.9) 15%, rgba(95, 71, 61, 0.9) 87.6%)");
            $("nav ul li a").css("color","#fff");
            $(".nav-btn i").css("background","#fff");
            $(".nav-wrapper").css("background-image","linear-gradient( 175.9deg,rgba(125, 106, 96, 1    ) 15%, rgba(95, 71, 61, 1) 87.6%)");
            $(".hover-eff").addClass("hover-color");
            document.getElementById('logo_black').src='assets/img/logoAP_white.png';
        } 
        else {
          //  $("nav").css("background", "rgba(255, 255, 255,0.8)");                         
            $("nav").css("background", "linear-gradient(to right, hsla(217, 100%, 97%, 0.7), hsla(215, 57%, 97%, 0.7))");
            $("nav ul li a").css("color","#000");
            $(".nav-btn i").css("background","#000");
            $(".nav-wrapper").css("background-image","linear-gradient(to right, hsla(217, 100%, 97%, 1), hsla(215, 57%, 97%, 1))"); 
            $(".hover-eff").removeClass("hover-color");
            document.getElementById('logo_black').src='assets/img/logoAP_black.png';
        }
    });
});
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
$("html").easeScroll({
  frameRate: 60,
  animationTime: 1000,
  stepSize: 120,
  pulseAlgorithm: 1,
  pulseScale: 8,
  pulseNormalize: 1,
  accelerationDelta: 20,
  accelerationMax: 1,
  keyboardSupport: true,
  arrowScroll: 50,
  touchpadSupport: true,
  fixedBackground: true,  
  androidFix: true,
  iosFix: true
});
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
function goToSec1() {
    document.querySelector('.o-nas').scrollIntoView({ 
      behavior: 'smooth',block: 'start'
    });
}
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
var first_showed = 0;
function showFirst() {
    if(first_showed) {        
        $('#first').css('visibility','hidden');
        $('#first').css('height','0');
        first_showed = 0;        
    }
    else {
        $('#first').css('visibility','visible');
        $('#first').css('height','100%');
        first_showed = 1;        
    }
}
var second_showed = 0;
function showSecond() {
    if(first_showed) {        
        $('#second').css('visibility','hidden');
        $('#second').css('height','0');
        first_showed = 0;        
    }
    else {
        $('#second').css('visibility','visible');
        $('#second').css('height','100%');
        first_showed = 1;        
    }
}
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------
