//CHECKS WHAT PAGE THE USER IS ON AND CHANGES NAVIGATION ACCORDINGLY
window.onload = function(){
  if(document.URL.indexOf("education.html") >= 0){
  document.querySelector(".education").style.backgroundColor = "#9e67f7";
    }else if(document.URL.indexOf("interests.html") >= 0){
      document.querySelector(".interests").style.backgroundColor = "#9e67f7"; //DUE TO THIS FUNCTION USING TEXT PRESENT IN THE URL
      }else{document.querySelector(".contact").style.backgroundColor = "#9e67f7"; //IF LAUNCHED INTO LIVE ENVIRONMENT I WILL HAVE TO CHANGE THIS
  }
}

//CHANGES THE TITLE TEXT WHETHER THE MOUSE IS OVER IT
document.querySelector(".main-name").addEventListener('mouseover', changeText); //changes h1 text based on mouse position
  function changeText(){                                                        //could combine the two functions into an if else function
    document.querySelector(".main-name").innerHTML = "Hello World";
}

document.querySelector(".main-name").addEventListener("mouseleave", defaultText); //change h1 text back
  function defaultText(){
    document.querySelector(".main-name").innerHTML = "Bradley Archer";
  }

//ADDS LOGIC TO MOBILE MENU BUTTON AND TOGGLES VISIBILITY
document.querySelector(".btn-mobile").addEventListener("click", showMenu); //controls the visbility of mobile menu
  function showMenu(){                                                     //unable to add animation because of display: block
    const visbility = document.querySelector(".menu");
    const headerTag = document.getElementsByTagName("header")[0];
      if (visbility.style.display != "block") {
          visbility.style.display = "block";
          headerTag.style.marginBottom = "175px";
      } else {
        visbility.style.display = "none";
        headerTag.style.marginBottom = "20px";
  }
}

//GENERAL CHECKS/ REFORMATTING BASED ON NUMEROUS VARIABLES
window.addEventListener('resize', recoverVisibility); //hides menu & header margin bottom if window is resized
  function recoverVisibility() {
      let grabMenu = document.querySelector(".menu");
      let grabHeader = document.getElementsByTagName("header")[0];
        if (window.innerWidth <= 480) {
          grabMenu.style.display = "none";
          grabHeader.style.marginBottom = "20px";
        }
          else {
            grabMenu.style.display = "block";
            grabHeader.style.marginBottom = "10px";
  }
}

//CUSTOMISED GOOGLE MAPS API
function initMap() {
  const location = {lat: 52.6235, lng: -1.1409};
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 13,
    center: location
  });

  const contentString = "Current Residence: Filbert Village";
  const infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        const marker = new google.maps.Marker({
          position: location,
          map: map,
          title: 'My Home'
        });

        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
}



//IMAGE SLIDER IN JS, CSS WAS EASIER BUT FIGURED WHY NOT TRY IT
document.querySelector(".next").addEventListener("click", nextImage);
document.querySelector(".previous").addEventListener("click", previousImage);

const changeImage = document.querySelector('.img-change-container');
const myImages = ['img/dmu1','img/dmu2', 'img/dmu3', 'img/dmu4']; // CONTAINING IMAGES IN ARRAY
let counter = myImages.length;

function nextImage(){
  if (counter<myImages.length) {
      counter = counter+1;
  }else{
      counter = 1;
  }
      changeImage.innerHTML = "<img src="+myImages[counter-1]+".jpg>";
}

function previousImage(){
  if (counter<myImages.length+1 && counter>1) {
      counter= counter-1;
  }else{
      counter = myImages.length;
      }
      changeImage.innerHTML = "<img src="+myImages[counter-1]+".jpg>";
}
setInterval(nextImage , 9000); //LENGTH OF TIME FOR IMAGE CHANGE
