/** Variables */
const email = "iyashasgowda@gmail.com";
const linkedin = "https://linkedin.com/in/iyashasgowda";
const twitter = "https://twitter.com/iyashasgowda";
const facebook = "https://facebook.com/iyashasgowda";
const instagram = "https://instagram.com/iyashasgowda";
const github = "https://github.com/iyashasgowda";

let root = document.documentElement;
let is_dark_mode = root.style.getPropertyValue("--is-dark-mode");

/** Hide header on scroll */
var previous = window.pageYOffset;
window.onscroll = function () {
   var current = window.pageYOffset;

   if (previous > current) {
      $("header").css({
         top: "0",
         height: "72px",
         "box-shadow": "0 0 20px 2px rgba(0, 0, 0, 0.4)",
      });
   } else {
      $("header").css({
         top: "-72px",
         height: "72px",
         "box-shadow": "0 0 0 0 transparent",
      });
   }

   if (current == 0) {
      $("header").css({
         top: "0",
         height: "88px",
         "box-shadow": "0 0 0 0 transparent",
      });
   }

   previous = current;
};

/** Changing theme */
$("#dark-mode-btn").click(function () {
   if (is_dark_mode == 0) {
      root.style.setProperty("--is-dark-mode", 1);

      /** colors */
      root.style.setProperty("--color-primary-hex", "#eceff1");
      root.style.setProperty("--color-accent-hex", "#301934");
      root.style.setProperty("--color-primary-rgb", "236, 239, 241");
      root.style.setProperty("--color-accent-rgb", "48, 25, 52");

      /** font */
      root.style.setProperty("--font-weight", "900");

      /** opacities */
      root.style.setProperty("--medium-opacity", "0.8");

      /** assets */
      $("#dark-mode-btn").attr("src", "assets/icons/light/dark_mode.svg");
      $("#logo").attr("src", "assets/icons/light/logo.svg");
      $("#github").attr("src", "assets/icons/light/github.svg");
      $("#linkedin").attr("src", "assets/icons/light/linkedin.svg");
      $("#twitter").attr("src", "assets/icons/light/twitter.svg");
      $("#instagram").attr("src", "assets/icons/light/instagram.svg");
      $("#facebook").attr("src", "assets/icons/light/facebook.svg");
      $("#avatar").attr("src", "assets/images/avatar_black.png");
   } else {
      root.style.setProperty("--is-dark-mode", 0);

      /** colors */
      root.style.setProperty("--color-primary-hex", "#301934");
      root.style.setProperty("--color-accent-hex", "#eceff1");
      root.style.setProperty("--color-primary-rgb", "48, 25, 52");
      root.style.setProperty("--color-accent-rgb", "236, 239, 241");

      /** font */
      root.style.setProperty("--font-weight", "normal");

      /** opacities */
      root.style.setProperty("--medium-opacity", "0.6");

      /** assets */
      $("#dark-mode-btn").attr("src", "assets/icons/dark/light_mode.svg");
      $("#logo").attr("src", "assets/icons/dark/logo.svg");
      $("#github").attr("src", "assets/icons/dark/github.svg");
      $("#linkedin").attr("src", "assets/icons/dark/linkedin.svg");
      $("#twitter").attr("src", "assets/icons/dark/twitter.svg");
      $("#instagram").attr("src", "assets/icons/dark/instagram.svg");
      $("#facebook").attr("src", "assets/icons/dark/facebook.svg");
      $("#avatar").attr("src", "assets/images/avatar_white.png");
   }

   is_dark_mode = root.style.getPropertyValue("--is-dark-mode");
});

/** Social accounts */
$("#linkedin").click(function () {
   window.open(linkedin);
});

$("#twitter").click(function () {
   window.open(twitter);
});

$("#facebook").click(function () {
   window.open(facebook);
});

$("#instagram").click(function () {
   window.open(instagram);
});

$("#github").click(function () {
   window.open(github);
});

$("#email").click(function () {
   window.open("mailto:" + email);
});

/** Navigation */
$("#about").click(function () {
   document.getElementById("about-section").scrollIntoView();
});

$("#skills").click(function () {
   document.getElementById("skills-section").scrollIntoView();
});

$("#work").click(function () {
   document.getElementById("work-section").scrollIntoView();
});

$("#contact").click(function () {
   document.getElementById("contact-section").scrollIntoView();
});

/** Download Resume */
$("#resume").click(function () {
   window.open("resume.pdf", "_blank");
});

/** Icon anim */
function icon_hover() {
   if (is_dark_mode == 0)
      $("#logo").attr("src", "assets/icons/dark/logo_filled.png");
   else $("#logo").attr("src", "assets/icons/light/logo_filled.png");
}

function icon_unhover() {
   if (is_dark_mode == 0) $("#logo").attr("src", "assets/icons/dark/logo.svg");
   else $("#logo").attr("src", "assets/icons/light/logo.svg");
}
