function myFunction() {
  var nav = document.querySelector(".navigation");
  var x = document.querySelectorAll(".navigation li:not(#myTopnav > li:nth-child(4))")
  if (nav.className === "navigation") {
    nav.className += " responsive";
    x.forEach(item => {
      item.style.display = "block"
    })
    x.style.display = "block";
  } else {
    nav.className = "navigation";
    x.forEach(item => {
      item.style.display = "none"
    })
  }
}

