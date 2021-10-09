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
      $("#c_sharp").attr("src", "assets/icons/light/c_sharp_light.svg");
      $("#java").attr("src", "assets/icons/light/java_light.svg");
      $("#html").attr("src", "assets/icons/light/html_light.svg");
      $("#css").attr("src", "assets/icons/light/css_light.svg");
      $("#javascript").attr("src", "assets/icons/light/javascript_light.svg");
      $("#android").attr("src", "assets/icons/light/android_light.svg");
      $("#dotnet").attr("src", "assets/icons/light/dotnet_light.svg");
      $("#eclipse").attr("src", "assets/icons/light/eclipse_light.svg");
      $("#intellij").attr("src", "assets/icons/light/intellij_light.svg");
      $("#androidstudio").attr(
         "src",
         "assets/icons/light/androidstudio_light.svg"
      );
      $("#visualstudio").attr(
         "src",
         "assets/icons/light/visualstudio_light.svg"
      );
      $("#visualstudiocode").attr(
         "src",
         "assets/icons/light/visualstudiocode_light.svg"
      );
      $("#postman").attr("src", "assets/icons/light/postman_light.svg");
      $("#git").attr("src", "assets/icons/light/git_light.svg");
      $("#figma").attr("src", "assets/icons/light/figma_light.svg");
      $("#photoshop").attr("src", "assets/icons/light/photoshop_light.svg");
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
      $("#c_sharp").attr("src", "assets/icons/dark/c_sharp_dark.svg");
      $("#java").attr("src", "assets/icons/dark/java_dark.svg");
      $("#html").attr("src", "assets/icons/dark/html_dark.svg");
      $("#css").attr("src", "assets/icons/dark/css_dark.svg");
      $("#javascript").attr("src", "assets/icons/dark/javascript_dark.svg");
      $("#android").attr("src", "assets/icons/dark/android_dark.svg");
      $("#dotnet").attr("src", "assets/icons/dark/dotnet_dark.svg");
      $("#sqlserver").attr("src", "assets/icons/dark/sqlserver_dark.svg");
      $("#eclipse").attr("src", "assets/icons/dark/eclipse_dark.svg");
      $("#intellij").attr("src", "assets/icons/dark/intellij_dark.svg");
      $("#androidstudio").attr(
         "src",
         "assets/icons/dark/androidstudio_dark.svg"
      );
      $("#visualstudio").attr("src", "assets/icons/dark/visualstudio_dark.svg");
      $("#visualstudiocode").attr(
         "src",
         "assets/icons/dark/visualstudiocode_dark.svg"
      );
      $("#postman").attr("src", "assets/icons/dark/postman_dark.svg");
      $("#git").attr("src", "assets/icons/dark/git_dark.svg");
      $("#figma").attr("src", "assets/icons/dark/figma_dark.svg");
      $("#photoshop").attr("src", "assets/icons/dark/photoshop_dark.svg");
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

/** Skill card anim */
function skill_card_hover(id) {
   if (is_dark_mode == 0) {
      if (id == 1) {
         $("#c_sharp").attr("src", "assets/icons/light/c_sharp_light.svg");
      } else if (id == 2) {
         $("#java").attr("src", "assets/icons/light/java_light.svg");
      } else if (id == 3) {
         $("#html").attr("src", "assets/icons/light/html_light.svg");
      } else if (id == 4) {
         $("#css").attr("src", "assets/icons/light/css_light.svg");
      } else if (id == 5) {
         $("#javascript").attr(
            "src",
            "assets/icons/light/javascript_light.svg"
         );
      } else if (id == 6) {
         $("#android").attr("src", "assets/icons/light/android_light.svg");
      } else if (id == 7) {
         $("#dotnet").attr("src", "assets/icons/light/dotnet_light.svg");
      } else if (id == 8) {
         $("#sqlserver").attr("src", "assets/icons/light/sqlserver_light.svg");
      } else if (id == 9) {
         $("#eclipse").attr("src", "assets/icons/light/eclipse_light.svg");
      } else if (id == 10) {
         $("#intellij").attr("src", "assets/icons/light/intellij_light.svg");
      } else if (id == 11) {
         $("#androidstudio").attr(
            "src",
            "assets/icons/light/androidstudio_light.svg"
         );
      } else if (id == 12) {
         $("#visualstudio").attr(
            "src",
            "assets/icons/light/visualstudio_light.svg"
         );
      } else if (id == 13) {
         $("#visualstudiocode").attr(
            "src",
            "assets/icons/light/visualstudiocode_light.svg"
         );
      } else if (id == 14) {
         $("#postman").attr("src", "assets/icons/light/postman_light.svg");
      } else if (id == 15) {
         $("#git").attr("src", "assets/icons/light/git_light.svg");
      } else if (id == 16) {
         $("#figma").attr("src", "assets/icons/light/figma_light.svg");
      } else if (id == 17) {
         $("#photoshop").attr("src", "assets/icons/light/photoshop_light.svg");
      }
   } else {
      if (id == 1) {
         $("#c_sharp").attr("src", "assets/icons/dark/c_sharp_dark.svg");
      } else if (id == 2) {
         $("#java").attr("src", "assets/icons/dark/java_dark.svg");
      } else if (id == 3) {
         $("#html").attr("src", "assets/icons/dark/html_dark.svg");
      } else if (id == 4) {
         $("#css").attr("src", "assets/icons/dark/css_dark.svg");
      } else if (id == 5) {
         $("#javascript").attr("src", "assets/icons/dark/javascript_dark.svg");
      } else if (id == 6) {
         $("#android").attr("src", "assets/icons/dark/android_dark.svg");
      } else if (id == 7) {
         $("#dotnet").attr("src", "assets/icons/dark/dotnet_dark.svg");
      } else if (id == 8) {
         $("#sqlserver").attr("src", "assets/icons/dark/sqlserver_dark.svg");
      } else if (id == 9) {
         $("#eclipse").attr("src", "assets/icons/dark/eclipse_dark.svg");
      } else if (id == 10) {
         $("#intellij").attr("src", "assets/icons/dark/intellij_dark.svg");
      } else if (id == 11) {
         $("#androidstudio").attr(
            "src",
            "assets/icons/dark/androidstudio_dark.svg"
         );
      } else if (id == 12) {
         $("#visualstudio").attr(
            "src",
            "assets/icons/dark/visualstudio_dark.svg"
         );
      } else if (id == 13) {
         $("#visualstudiocode").attr(
            "src",
            "assets/icons/dark/visualstudiocode_dark.svg"
         );
      } else if (id == 14) {
         $("#postman").attr("src", "assets/icons/dark/postman_dark.svg");
      } else if (id == 15) {
         $("#git").attr("src", "assets/icons/dark/git_dark.svg");
      } else if (id == 16) {
         $("#figma").attr("src", "assets/icons/dark/figma_dark.svg");
      } else if (id == 17) {
         $("#photoshop").attr("src", "assets/icons/dark/photoshop_dark.svg");
      }
   }
}

function skill_card_unhover(id) {
   if (is_dark_mode == 0) {
      if (id == 1) {
         $("#c_sharp").attr("src", "assets/icons/dark/c_sharp_dark.svg");
      } else if (id == 2) {
         $("#java").attr("src", "assets/icons/dark/java_dark.svg");
      } else if (id == 3) {
         $("#html").attr("src", "assets/icons/dark/html_dark.svg");
      } else if (id == 4) {
         $("#css").attr("src", "assets/icons/dark/css_dark.svg");
      } else if (id == 5) {
         $("#javascript").attr("src", "assets/icons/dark/javascript_dark.svg");
      } else if (id == 6) {
         $("#android").attr("src", "assets/icons/dark/android_dark.svg");
      } else if (id == 7) {
         $("#dotnet").attr("src", "assets/icons/dark/dotnet_dark.svg");
      } else if (id == 8) {
         $("#sqlserver").attr("src", "assets/icons/dark/sqlserver_dark.svg");
      } else if (id == 9) {
         $("#eclipse").attr("src", "assets/icons/dark/eclipse_dark.svg");
      } else if (id == 10) {
         $("#intellij").attr("src", "assets/icons/dark/intellij_dark.svg");
      } else if (id == 11) {
         $("#androidstudio").attr(
            "src",
            "assets/icons/dark/androidstudio_dark.svg"
         );
      } else if (id == 12) {
         $("#visualstudio").attr(
            "src",
            "assets/icons/dark/visualstudio_dark.svg"
         );
      } else if (id == 13) {
         $("#visualstudiocode").attr(
            "src",
            "assets/icons/dark/visualstudiocode_dark.svg"
         );
      } else if (id == 14) {
         $("#postman").attr("src", "assets/icons/dark/postman_dark.svg");
      } else if (id == 15) {
         $("#git").attr("src", "assets/icons/dark/git_dark.svg");
      } else if (id == 16) {
         $("#figma").attr("src", "assets/icons/dark/figma_dark.svg");
      } else if (id == 17) {
         $("#photoshop").attr("src", "assets/icons/dark/photoshop_dark.svg");
      }
   } else {
      if (id == 1) {
         $("#c_sharp").attr("src", "assets/icons/light/c_sharp_light.svg");
      } else if (id == 2) {
         $("#java").attr("src", "assets/icons/light/java_light.svg");
      } else if (id == 3) {
         $("#html").attr("src", "assets/icons/light/html_light.svg");
      } else if (id == 4) {
         $("#css").attr("src", "assets/icons/light/css_light.svg");
      } else if (id == 5) {
         $("#javascript").attr(
            "src",
            "assets/icons/light/javascript_light.svg"
         );
      } else if (id == 6) {
         $("#android").attr("src", "assets/icons/light/android_light.svg");
      } else if (id == 7) {
         $("#dotnet").attr("src", "assets/icons/light/dotnet_light.svg");
      } else if (id == 8) {
         $("#sqlserver").attr("src", "assets/icons/light/sqlserver_light.svg");
      } else if (id == 9) {
         $("#eclipse").attr("src", "assets/icons/light/eclipse_light.svg");
      } else if (id == 10) {
         $("#intellij").attr("src", "assets/icons/light/intellij_light.svg");
      } else if (id == 11) {
         $("#androidstudio").attr(
            "src",
            "assets/icons/light/androidstudio_light.svg"
         );
      } else if (id == 12) {
         $("#visualstudio").attr(
            "src",
            "assets/icons/light/visualstudio_light.svg"
         );
      } else if (id == 13) {
         $("#visualstudiocode").attr(
            "src",
            "assets/icons/light/visualstudiocode_light.svg"
         );
      } else if (id == 14) {
         $("#postman").attr("src", "assets/icons/light/postman_light.svg");
      } else if (id == 15) {
         $("#git").attr("src", "assets/icons/light/git_light.svg");
      } else if (id == 16) {
         $("#figma").attr("src", "assets/icons/light/figma_light.svg");
      } else if (id == 17) {
         $("#photoshop").attr("src", "assets/icons/light/photoshop_light.svg");
      }
   }
}

/** Picture anim */
function color_me() {
   $("#me").attr("src", "assets/images/me_color.png");
}

function purple_me() {
   $("#me").attr("src", "assets/images/me_prl.png");
}
