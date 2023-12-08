const burgerMenu = document.getElementById('burger-menu');
const overlay = document.getElementById('menu');
const omList = document.getElementById("omlist");


burgerMenu.addEventListener('click', function() {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});


omList.style.display = "none"; 

omList.addEventListener('click', function() {
    burgerMenu.classList.remove("close");
    overlay.classList.remove("overlay");
  });
  
  function openDropdown() {
    if (omList.style.display != "none") {
      omList.style.display = "none";
    } else {
      omList.style.display = "block";
    }
  }

/* duttelut til at få burgeren til at forsvinde og dukke op W3 school

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}*/
