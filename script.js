"use strict";
const btn = document.querySelector(".hamburger");
const mbNav = document.querySelector(".mobile-nav");
const mb = document.querySelector(".mb");

const img = document.getElementById("ham-img");
btn.addEventListener("click", function (e) {
  console.log("Button clicked");
  let imgSrc = e.target.getAttribute("src");

  mbNav.classList.toggle("hidden");

  if (mbNav.classList.contains("hidden")) {
    img.src = "/assets/images/icon-menu.svg";
    // mb.style.width = "0%";
  }
  if (!mbNav.classList.contains("hidden")) {
    img.src = "/assets/images/icon-menu-close.svg";
  }
});
