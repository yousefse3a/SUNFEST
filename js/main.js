"use strict";
import * as helper from "./helper.js";
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function () {
  $(".onReady .container").fadeOut(1400, function(){
    $(".onReady").fadeOut(1000,function(){
      $("body").css("overflow-y","auto");
    });
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(window).scroll(function () {
  let windowPostion = $(window).scrollTop();
  let loadHeight = $(".loading").height()-50;
  if (windowPostion > loadHeight) {
    $(".navbar").removeClass("bg-transparent");
    $(".navbar").css("backgroundColor", "rgba(0,0,0,.5)");
    $(".upButton").css("animation", "btnShow .6s ease-in-out forwards");
  } else {
    $(".navbar").addClass("bg-transparent");
    $(".upButton").css("animation","btnHide .6s ease-in-out forwards");
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(".nav-link,.navbar-brand").click(function (e) { 
  var offsetTop = $(`${$(this).attr("href")}`).offset().top;
   $("html , body").animate({scrollTop:offsetTop},1000);
});
$(".upButton").click(function (e) { 
  var offsetTop = $(`#home`).offset().top;
  $("html , body").animate({scrollTop:offsetTop},1000);
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$("#exampleFormControlTextarea1").keyup(function (e) { 
  let letter = $("#exampleFormControlTextarea1").val();
  if(letter.length < 100 & letter.length>0){
    $("#area_letter").text(`${100-(letter.length)} Characyer Reamining`);
  }
  else if(letter.length == 0){
    $("#area_letter").text('');
  }
  else{
    $("#exampleFormControlTextarea1").css("pointerEvents","none"); 
    $("#area_letter").text(`your available character finished`).css("color","red");
  }
});
console.log($(".about_tittle").text().length);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// write the event day
let eventDate = new Date(" FEB 10 2022 0:00:00");
eventDate = Date.parse(eventDate);

(function () {
  let arrTimer = ["days", "hours", "min", "sec"];
  let rowTimer = helper.createHTMLElement(
    "div",
    { className: "row col-12" },
    ""
  );
  arrTimer.forEach((divName) => {
    let h2 = helper.createHTMLElement("h2", "", "05");
    let p = helper.createHTMLElement("P", "", `${divName}`);
    let x = helper.createHTMLElement(
      "div",
      { className: "inner col-12" },
      h2,
      p
    );
    let y = helper.createHTMLElement(
      "div",
      { className: `timer_${divName} col-3 d-flex` },
      x
    );
    rowTimer.appendChild(y);
  });
  let timerDiv = document.querySelector(".timer");
  timerDiv.appendChild(rowTimer);
})();

function DateRec() {
  let currDate = new Date();
  if (currDate < eventDate) {
    let dateObj = helper.getfullDayTime(eventDate - currDate);
    $(".timer_days .inner > h2").text(dateObj["Date"]);
    $(".timer_hours .inner > h2").text(dateObj["Hours"]);
    $(".timer_min .inner > h2").text(dateObj["Minutes"]);
    $(".timer_sec .inner > h2").text(dateObj["Seconds"]);
    setTimeout(DateRec, 1000);
  } else {
    $(".timer_days .inner > h2").text("00");
    $(".timer_hours .inner > h2").text("00");
    $(".timer_min .inner > h2").text("00");
    $(".timer_sec .inner > h2").text("00");
  }
}
DateRec();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    dots: false,
    nav: false,
    stagePadding: 50,
    loop: true,
    margin: -15,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
    },
  });
});
let owl = $(".owl-carousel");
$(".owlNext").click(function (e) {
  owl.trigger("next.owl.carousel");
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
(function(){
  let arrColor = ["-webkit-linear-gradient(#00d0ff, #25ffbf)","red","black","blue","fuchsia","tomato","yellow","saddlebrown"];
  let plateList=helper.createHTMLElement("div",{className:"colorList col-11"},"");
  arrColor.forEach(color => {
    let y=helper.createHTMLElement("div",{className:"inner col-12 h-100"},"");
    y.style.background = `${color}`;
    let x =helper.createHTMLElement("div",{className:`${color} colors col-3`},y);
    $(x).attr("data-color",`${color}` );
    plateList.appendChild(x);
  });
  $('.plateColor').append(plateList);
})();

$(".setBtn").click(function () { 
  $(".plateColor").toggleClass("inOutBtn");  
});
$(".colors").click(function () { 
  let color = $(this).attr("data-color");
  document.documentElement.style.setProperty("--mainColor",`${color}`);
});
