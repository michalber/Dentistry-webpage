$(function(){ 
   AOS.init({
       duration: 1000
   });
});
jssor_1_slider_init();
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
jssor_1_slider_init = function() {

    var jssor_1_SlideoTransitions = [
      [{b:0,d:600,y:-290,e:{y:27}}],
      [{b:0,d:1000,y:185},{b:1000,d:500,o:-1},{b:1500,d:500,o:1},{b:2000,d:1500,r:360},{b:3500,d:1000,rX:30},{b:4500,d:500,rX:-30},{b:5000,d:1000,rY:30},{b:6000,d:500,rY:-30},{b:6500,d:500,sX:1},{b:7000,d:500,sX:-1},{b:7500,d:500,sY:1},{b:8000,d:500,sY:-1},{b:8500,d:500,kX:30},{b:9000,d:500,kX:-30},{b:9500,d:500,kY:30},{b:10000,d:500,kY:-30},{b:10500,d:500,c:{x:125.00,t:-125.00}},{b:11000,d:500,c:{x:-125.00,t:125.00}}],
      [{b:0,d:600,x:535,e:{x:27}}],
      [{b:-1,d:1,o:-1},{b:0,d:600,o:1,e:{o:5}}],
      [{b:-1,d:1,c:{x:250.0,t:-250.0}},{b:0,d:800,c:{x:-250.0,t:250.0},e:{c:{x:7,t:7}}}],
      [{b:-1,d:1,o:-1},{b:0,d:600,x:-570,o:1,e:{x:6}}],
      [{b:-1,d:1,o:-1,r:-180},{b:0,d:800,o:1,r:180,e:{r:7}}],
      [{b:0,d:1000,y:80,e:{y:24}},{b:1000,d:1100,x:570,y:170,o:-1,r:30,sX:9,sY:9,e:{x:2,y:6,r:1,sX:5,sY:5}}],
      [{b:2000,d:600,rY:30}],
      [{b:0,d:500,x:-105},{b:500,d:500,x:230},{b:1000,d:500,y:-120},{b:1500,d:500,x:-70,y:120},{b:2600,d:500,y:-80},{b:3100,d:900,y:160,e:{y:24}}],
      [{b:0,d:1000,o:-0.4,rX:2,rY:1},{b:1000,d:1000,rY:1},{b:2000,d:1000,rX:-1},{b:3000,d:1000,rY:-1},{b:4000,d:1000,o:0.4,rX:-1,rY:-1}]
    ];

    var jssor_1_options = {
      $AutoPlay: 1,
      $Idle: 2000,
      $CaptionSliderOptions: {
        $Class: $JssorCaptionSlideo$,
        $Transitions: jssor_1_SlideoTransitions,
        $Breaks: [
          [{d:2000,b:1000}]
        ]
      },
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$
      },
      $BulletNavigatorOptions: {
        $Class: $JssorBulletNavigator$
      }
    };

    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

    /*#region responsive code begin*/

    var MAX_WIDTH = 980;

    function ScaleSlider() {
        var containerElement = jssor_1_slider.$Elmt.parentNode;
        var containerWidth = containerElement.clientWidth;

        if (containerWidth) {

            var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

            jssor_1_slider.$ScaleWidth(expectedWidth);
        }
        else {
            window.setTimeout(ScaleSlider, 30);
        }
    }

    ScaleSlider();

    $Jssor$.$AddEvent(window, "load", ScaleSlider);
    $Jssor$.$AddEvent(window, "resize", ScaleSlider);
    $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
    /*#endregion responsive code end*/
};