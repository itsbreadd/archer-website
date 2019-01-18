/* (document).ready(function () { $('.main-container').hide().fadeIn(3000).delay(6000)
}); */

$(document).ready(function() {
    $('.main-container').fadeIn(2500);
});

window.onload = function(){
  if(document.URL.indexOf("education.html") >= 0){
  document.querySelector(".education").style.backgroundColor = "#5f0081";
  document.querySelector(".education").style.color = "white";
    }else if(document.URL.indexOf("interests.html") >= 0){
      document.querySelector(".interests").style.backgroundColor = "#5f0081"; //DUE TO THIS FUNCTION USING TEXT PRESENT IN THE URL
      document.querySelector(".interests").style.color = "white";
      }else{
        document.querySelector(".contact").style.backgroundColor = "#5f0081"; //IF LAUNCHED INTO LIVE ENVIRONMENT I WILL HAVE TO CHANGE THIS
        document.querySelector(".education").style.color = "white";
  }
}

$(document).ready(function() { //MENU CONTROL
       $('.btn-mobile').click(function() {
               $('.menu').slideToggle('slow');
               $('.downarrow').toggleClass('flip');
       });
   });
