var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("clicked");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


function btnMore() {
  var photos = document.getElementById("more_photos");
  var btn = document.getElementById("galery").getElementsByTagName("button");

  photos.style.display = "table";
  photos.style.marginBottom = "65px";
  btn[0].style.display = "none";

}