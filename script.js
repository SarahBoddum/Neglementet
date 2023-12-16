const burgerMenu = document.getElementById('burger-menu');
const overlay = document.getElementById('menu');
const omList = document.getElementById('omlist');
const haandList = document.getElementById ('haandlist');
const bodyElement = document.body;
const bookBtn = document.getElementById('bookbtn')


burgerMenu.addEventListener('click', function() {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
  document.body.classList.toggle("bodyoverlay");
});


omList.style.display = "none"; 

omList.addEventListener('click', function() {
    burgerMenu.classList.remove("close");
    overlay.classList.remove("overlay");
    document.body.classList.toggle("bodyoverlay");
  });
  
function openDropdown() {
    if (omList.style.display != "none") {
      omList.style.display = "none";
    } else {
      omList.style.display = "block";
    }
}

haandList.style.display = "none"; 

haandList.addEventListener('click', function() {
      burgerMenu.classList.remove("close");
      overlay.classList.remove("overlay");
    });
    
    function openHaandDropdown() {
      if (haandList.style.display != "none") {
        haandList.style.display = "none";
      } else {
        haandList.style.display = "block";
      }
    }


bookBtn.addEventListener('click', gemBooking);
console.log('event lister tilføjet');
function gemBooking() {
    let navn = document.getElementById("navn").value;
    let email = document.getElementById("email").value;
    let behandling = document.getElementById("behandling").value;
    let aftagning = document.getElementById("aftagning").value;
    let tid = document.getElementById("tid").value;
    let body = 'Hej <b>' + navn + '</b><p>du har bestilt tid den ' + tid + '</p> til følgende behandling ' + behandling + aftagning +'. Jeg glædemig til at se dig. ';
    console.log('kaugdk');
    var fetchUrl = 'https://jimppbookingapi.azurewebsites.net/api/NailBooking/SendBookingNotification?email=' + email + '&navn=' + navn + '&tid=' + tid + '&body=' + body;
    fetch(fetchUrl, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
})
   .then(response => response.json())
   .then(response => console.log(JSON.stringify(response)) )
   
    window.location.href = 'kvittering.html';
}

//play video on mouse over
/*video1*/
function playVideo() {
    let video = document.getElementById("tiktok1");
    video.play();
}

function pauseVideo() {
    let video = document.getElementById("tiktok1");
    video.pause();
    //video.currentTime = 0;
}

/*video2*/

function playVideoto() {
  var videoto = document.getElementById("tiktok2");
  videoto.play();
}

function pauseVideoto() {
  var videoto = document.getElementById("tiktok2");
  videoto.pause();
}

/*video3*/

function playVideotre() {
  var videotre = document.getElementById("tiktok3");
  videotre.play();
}

function pauseVideotre() {
  var videotre = document.getElementById("tiktok3");
  videotre.pause();
}

/*video4*/

function playVideofire() {
  var videofire = document.getElementById("tiktok4");
  videofire.play();
}

function pauseVideofire() {
  var videofire = document.getElementById("tiktok4");
  videofire.pause();
}

//setTimeout for billedeflipflop
 var rammeToDiv = document.getElementById('rammeTo');
 rammeToDiv.style.display = 'none';

    // Funktion til at ændre display-egenskaben efter 0.2 sekunder
    function visDivEfterForsinkelse() {
      rammeToDiv.style.display = 'block';
    }

    // Anvend setTimeout til at kalde funktionen efter 0.2 sekunder
    window.onload = function() {
      setTimeout(visDivEfterForsinkelse, 200);
    };





/* duttelut til at få burgeren til at forsvinde og dukke op W3 school - virker ikke heeeelt
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-140px";
  }
  prevScrollpos = currentScrollPos;
}*/

/*------galleri------*/

function change (element) {
  element.classList.toggle("fullsize")
}

function change(element) {
  var isFullsize = element.classList.contains('fullsize');

  var allImages = document.querySelectorAll('.galImg');
  allImages.forEach(function (img) {
    img.classList.remove('fullsize');
  });

  if (!isFullsize) {
    element.classList.add('fullsize');
  }
}

/*------- Farveguide ------*/

function changeColor(color) {
  // Skjuler alle color boxes
  hideColorBoxes();

  // Viser den valgte color box
  const colorBox = document.getElementById(`${color}Box`);
  colorBox.classList.remove('hidden');
}

function hideColorBoxes() {
  // Skjuler alle color boxes
  const colorBoxes = document.querySelectorAll('.color-box');
  colorBoxes.forEach(box => {
    box.classList.add('hidden');
  });
}

