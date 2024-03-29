/** Variables */
const email = "iyashasgowda@gmail.com";
const linkedin = "https://linkedin.com/in/iyashasgowda";
const twitter = "https://twitter.com/iyashasgowda";
const facebook = "https://facebook.com/iyashasgowda";
const instagram = "https://instagram.com/iyashasgowda";
const github = "https://github.com/iyashasgowda";
const self = "https://iyashasgowda.com";

const color_palette = "https://play.google.com/store/apps/details?id=com.blogspot.yashas003.colorpalette";
const wallpaper_sh = "https://play.google.com/store/apps/details?id=com.yashas003.wallpapersh";
const short_stories = "https://play.google.com/store/apps/details?id=com.yashas003.shortstories";
const musify = "https://play.google.com/store/apps/details?id=com.ash.studios.musify";

let root = document.documentElement;
let is_dark_mode = root.style.getPropertyValue("--is-dark-mode");

/** Age calculation */
const dob = new Date();
dob.setDate(0o3);
dob.setMonth(10);
dob.setYear(1997);

const age = Math.abs(Math.round((new Date().getTime() - dob.getTime()) / 1000 / (60 * 60 * 24) / 365.25));
document.getElementById("age").innerHTML = age;

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

   if ($(window).scrollTop() + $(window).height() == $(document).height()) {
      $("header").css({
         top: "0",
         height: "88px",
         "box-shadow": "0 0 20px 2px rgba(0, 0, 0, 0.4)",
      });
   }

   previous = current;
};

/** Changing theme */
$("#dark-mode-btn, #nav-theme").click(function () {
   if (is_dark_mode == 0) {
      root.style.setProperty("--is-dark-mode", 1);

      /** Navigation theme name */
      document.getElementById("nav-theme").innerHTML = "Dark Mode";

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
      $("#github, #footer_github").attr("src", "assets/icons/light/github.svg");
      $("#linkedin, #footer_linkedin").attr("src", "assets/icons/light/linkedin.svg");
      $("#twitter, #footer_twitter").attr("src", "assets/icons/light/twitter.svg");
      $("#instagram, #footer_instagram").attr("src", "assets/icons/light/instagram.svg");
      $("#facebook, #footer_facebook").attr("src", "assets/icons/light/facebook.svg");
      $("#avatar").attr("src", "assets/images/dark/avatar_black.png");
      $("#c_sharp").attr("src", "assets/icons/light/c_sharp_light.svg");
      $("#java").attr("src", "assets/icons/light/java_light.svg");
      $("#html").attr("src", "assets/icons/light/html_light.svg");
      $("#css").attr("src", "assets/icons/light/css_light.svg");
      $("#javascript").attr("src", "assets/icons/light/javascript_light.svg");
      $("#android").attr("src", "assets/icons/light/android_light.svg");
      $("#dotnet").attr("src", "assets/icons/light/dotnet_light.svg");
      $("#sqlserver").attr("src", "assets/icons/light/sqlserver_light.svg");
      $("#eclipse").attr("src", "assets/icons/light/eclipse_light.svg");
      $("#intellij").attr("src", "assets/icons/light/intellij_light.svg");
      $("#androidstudio").attr("src", "assets/icons/light/androidstudio_light.svg");
      $("#visualstudio").attr("src", "assets/icons/light/visualstudio_light.svg");
      $("#visualstudiocode").attr("src", "assets/icons/light/visualstudiocode_light.svg");
      $("#postman").attr("src", "assets/icons/light/postman_light.svg");
      $("#git").attr("src", "assets/icons/light/git_light.svg");
      $("#figma").attr("src", "assets/icons/light/figma_light.svg");
      $("#photoshop").attr("src", "assets/icons/light/photoshop_light.svg");
      $("#working_me").attr("src", "assets/images/light/working_light.png");
      $("#coloring_me").attr("src", "assets/images/light/coloring_light.png");
      $("#wallpaper_me").attr("src", "assets/images/light/wallpaper_light.png");
      $("#stories_me").attr("src", "assets/images/light/stories_light.png");
      $("#musify_me").attr("src", "assets/images/light/music_light.png");
      $("#me_thankyou").attr("src", "assets/images/light/me_light.png");
      $("#header_menu").attr("src", "assets/icons/light/menu.svg");
      $("#footer_gmail").attr("src", "assets/icons/light/gmail.svg");
   } else {
      root.style.setProperty("--is-dark-mode", 0);

      /** Navigation theme name */
      document.getElementById("nav-theme").innerHTML = "Light Mode";

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
      $("#github, #footer_github").attr("src", "assets/icons/dark/github.svg");
      $("#linkedin, #footer_linkedin").attr("src", "assets/icons/dark/linkedin.svg");
      $("#twitter, #footer_twitter").attr("src", "assets/icons/dark/twitter.svg");
      $("#instagram, #footer_instagram").attr("src", "assets/icons/dark/instagram.svg");
      $("#facebook, #footer_facebook").attr("src", "assets/icons/dark/facebook.svg");
      $("#avatar").attr("src", "assets/images/light/avatar_white.png");
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
      $("#androidstudio").attr("src", "assets/icons/dark/androidstudio_dark.svg");
      $("#visualstudio").attr("src", "assets/icons/dark/visualstudio_dark.svg");
      $("#visualstudiocode").attr("src", "assets/icons/dark/visualstudiocode_dark.svg");
      $("#postman").attr("src", "assets/icons/dark/postman_dark.svg");
      $("#git").attr("src", "assets/icons/dark/git_dark.svg");
      $("#figma").attr("src", "assets/icons/dark/figma_dark.svg");
      $("#photoshop").attr("src", "assets/icons/dark/photoshop_dark.svg");
      $("#working_me").attr("src", "assets/images/dark/working_dark.png");
      $("#coloring_me").attr("src", "assets/images/dark/coloring_dark.png");
      $("#wallpaper_me").attr("src", "assets/images/dark/wallpaper_dark.png");
      $("#stories_me").attr("src", "assets/images/dark/stories_dark.png");
      $("#musify_me").attr("src", "assets/images/dark/music_dark.png");
      $("#me_thankyou").attr("src", "assets/images/dark/me_dark.png");
      $("#header_menu").attr("src", "assets/icons/dark/menu.svg");
      $("#footer_gmail").attr("src", "assets/icons/dark/gmail.svg");
   }

   $("#left-menu").css("width", "0%");
   is_dark_mode = root.style.getPropertyValue("--is-dark-mode");
});

/** Social accounts */
$("#linkedin, #footer_linkedin").click(function () {
   window.open(linkedin);
});

$("#twitter, #footer_twitter").click(function () {
   window.open(twitter);
});

$("#facebook, #footer_facebook").click(function () {
   window.open(facebook);
});

$("#instagram, #footer_instagram").click(function () {
   window.open(instagram);
});

$("#github, #footer_github").click(function () {
   window.open(github);
});

$("#email, #get_in_touch, #footer_gmail").click(function () {
   window.open("mailto:" + email);
});

/** Navigation */
$("#about, #nav-about").click(function () {
   $("#left-menu").css("width", "0%");
   document.getElementById("about-section").scrollIntoView();
});

$("#skills, #nav-skills").click(function () {
   $("#left-menu").css("width", "0%");
   document.getElementById("skills-section").scrollIntoView();
});

$("#work, #nav-work").click(function () {
   $("#left-menu").css("width", "0%");
   document.getElementById("work-section").scrollIntoView();
});

$("#connect, #nav-connect").click(function () {
   $("#left-menu").css("width", "0%");
   document.getElementById("connect-section").scrollIntoView();
});

$("#go-top").click(function () {
   document.getElementById("main-section").scrollIntoView();
});

/** Download Resume */
$("#resume").click(function () {
   window.open("https://1drv.ms/b/s!AubWMQGdKBFtmEW62iCAqIoOhyN9?e=BlnnbT", "_blank");
});

/** Goto app website */
$("#cp-link").click(function () {
   window.open(color_palette);
});

$("#ws-link").click(function () {
   window.open(wallpaper_sh);
});

$("#ss-link").click(function () {
   window.open(short_stories);
});

$("#mf-link").click(function () {
   window.open(musify);
});

$("#copyright_name, #logo").click(function () {
   window.open(self);
});

/** Icon anim */
function icon_hover() {
   if (is_dark_mode == 0) $("#logo").attr("src", "assets/icons/dark/logo_filled.png");
   else $("#logo").attr("src", "assets/icons/light/logo_filled.png");
}

function icon_unhover() {
   if (is_dark_mode == 0) $("#logo").attr("src", "assets/icons/dark/logo.svg");
   else $("#logo").attr("src", "assets/icons/light/logo.svg");
}

/** Skill card anim */
function skill_card_hover(id) {
   if (is_dark_mode == 0) {
      if (id == 1) $("#c_sharp").attr("src", "assets/icons/light/c_sharp_light.svg");
      else if (id == 2) $("#java").attr("src", "assets/icons/light/java_light.svg");
      else if (id == 3) $("#html").attr("src", "assets/icons/light/html_light.svg");
      else if (id == 4) $("#css").attr("src", "assets/icons/light/css_light.svg");
      else if (id == 5) $("#javascript").attr("src", "assets/icons/light/javascript_light.svg");
      else if (id == 6) $("#android").attr("src", "assets/icons/light/android_light.svg");
      else if (id == 7) $("#dotnet").attr("src", "assets/icons/light/dotnet_light.svg");
      else if (id == 8) $("#sqlserver").attr("src", "assets/icons/light/sqlserver_light.svg");
      else if (id == 9) $("#eclipse").attr("src", "assets/icons/light/eclipse_light.svg");
      else if (id == 10) $("#intellij").attr("src", "assets/icons/light/intellij_light.svg");
      else if (id == 11) $("#androidstudio").attr("src", "assets/icons/light/androidstudio_light.svg");
      else if (id == 12) $("#visualstudio").attr("src", "assets/icons/light/visualstudio_light.svg");
      else if (id == 13) $("#visualstudiocode").attr("src", "assets/icons/light/visualstudiocode_light.svg");
      else if (id == 14) $("#postman").attr("src", "assets/icons/light/postman_light.svg");
      else if (id == 15) $("#git").attr("src", "assets/icons/light/git_light.svg");
      else if (id == 16) $("#figma").attr("src", "assets/icons/light/figma_light.svg");
      else if (id == 17) $("#photoshop").attr("src", "assets/icons/light/photoshop_light.svg");
   } else {
      if (id == 1) $("#c_sharp").attr("src", "assets/icons/dark/c_sharp_dark.svg");
      else if (id == 2) $("#java").attr("src", "assets/icons/dark/java_dark.svg");
      else if (id == 3) $("#html").attr("src", "assets/icons/dark/html_dark.svg");
      else if (id == 4) $("#css").attr("src", "assets/icons/dark/css_dark.svg");
      else if (id == 5) $("#javascript").attr("src", "assets/icons/dark/javascript_dark.svg");
      else if (id == 6) $("#android").attr("src", "assets/icons/dark/android_dark.svg");
      else if (id == 7) $("#dotnet").attr("src", "assets/icons/dark/dotnet_dark.svg");
      else if (id == 8) $("#sqlserver").attr("src", "assets/icons/dark/sqlserver_dark.svg");
      else if (id == 9) $("#eclipse").attr("src", "assets/icons/dark/eclipse_dark.svg");
      else if (id == 10) $("#intellij").attr("src", "assets/icons/dark/intellij_dark.svg");
      else if (id == 11) $("#androidstudio").attr("src", "assets/icons/dark/androidstudio_dark.svg");
      else if (id == 12) $("#visualstudio").attr("src", "assets/icons/dark/visualstudio_dark.svg");
      else if (id == 13) $("#visualstudiocode").attr("src", "assets/icons/dark/visualstudiocode_dark.svg");
      else if (id == 14) $("#postman").attr("src", "assets/icons/dark/postman_dark.svg");
      else if (id == 15) $("#git").attr("src", "assets/icons/dark/git_dark.svg");
      else if (id == 16) $("#figma").attr("src", "assets/icons/dark/figma_dark.svg");
      else if (id == 17) $("#photoshop").attr("src", "assets/icons/dark/photoshop_dark.svg");
   }
}

function skill_card_unhover(id) {
   if (is_dark_mode == 0) {
      if (id == 1) $("#c_sharp").attr("src", "assets/icons/dark/c_sharp_dark.svg");
      else if (id == 2) $("#java").attr("src", "assets/icons/dark/java_dark.svg");
      else if (id == 3) $("#html").attr("src", "assets/icons/dark/html_dark.svg");
      else if (id == 4) $("#css").attr("src", "assets/icons/dark/css_dark.svg");
      else if (id == 5) $("#javascript").attr("src", "assets/icons/dark/javascript_dark.svg");
      else if (id == 6) $("#android").attr("src", "assets/icons/dark/android_dark.svg");
      else if (id == 7) $("#dotnet").attr("src", "assets/icons/dark/dotnet_dark.svg");
      else if (id == 8) $("#sqlserver").attr("src", "assets/icons/dark/sqlserver_dark.svg");
      else if (id == 9) $("#eclipse").attr("src", "assets/icons/dark/eclipse_dark.svg");
      else if (id == 10) $("#intellij").attr("src", "assets/icons/dark/intellij_dark.svg");
      else if (id == 11) $("#androidstudio").attr("src", "assets/icons/dark/androidstudio_dark.svg");
      else if (id == 12) $("#visualstudio").attr("src", "assets/icons/dark/visualstudio_dark.svg");
      else if (id == 13) $("#visualstudiocode").attr("src", "assets/icons/dark/visualstudiocode_dark.svg");
      else if (id == 14) $("#postman").attr("src", "assets/icons/dark/postman_dark.svg");
      else if (id == 15) $("#git").attr("src", "assets/icons/dark/git_dark.svg");
      else if (id == 16) $("#figma").attr("src", "assets/icons/dark/figma_dark.svg");
      else if (id == 17) $("#photoshop").attr("src", "assets/icons/dark/photoshop_dark.svg");
   } else {
      if (id == 1) $("#c_sharp").attr("src", "assets/icons/light/c_sharp_light.svg");
      else if (id == 2) $("#java").attr("src", "assets/icons/light/java_light.svg");
      else if (id == 3) $("#html").attr("src", "assets/icons/light/html_light.svg");
      else if (id == 4) $("#css").attr("src", "assets/icons/light/css_light.svg");
      else if (id == 5) $("#javascript").attr("src", "assets/icons/light/javascript_light.svg");
      else if (id == 6) $("#android").attr("src", "assets/icons/light/android_light.svg");
      else if (id == 7) $("#dotnet").attr("src", "assets/icons/light/dotnet_light.svg");
      else if (id == 8) $("#sqlserver").attr("src", "assets/icons/light/sqlserver_light.svg");
      else if (id == 9) $("#eclipse").attr("src", "assets/icons/light/eclipse_light.svg");
      else if (id == 10) $("#intellij").attr("src", "assets/icons/light/intellij_light.svg");
      else if (id == 11) $("#androidstudio").attr("src", "assets/icons/light/androidstudio_light.svg");
      else if (id == 12) $("#visualstudio").attr("src", "assets/icons/light/visualstudio_light.svg");
      else if (id == 13) $("#visualstudiocode").attr("src", "assets/icons/light/visualstudiocode_light.svg");
      else if (id == 14) $("#postman").attr("src", "assets/icons/light/postman_light.svg");
      else if (id == 15) $("#git").attr("src", "assets/icons/light/git_light.svg");
      else if (id == 16) $("#figma").attr("src", "assets/icons/light/figma_light.svg");
      else if (id == 17) $("#photoshop").attr("src", "assets/icons/light/photoshop_light.svg");
   }
}

/** App graphics anim */
function purple_graphics(id) {
   if (id == 1) {
      $("#cp-image").css("background-image", "url(/assets/images/prl/cp_prl.png)");
   } else if (id == 2) {
      $("#ws-image").css("background-image", "url(/assets/images/prl/ws_prl.png)");
   } else if (id == 3) {
      $("#ss-image").css("background-image", "url(/assets/images/prl/ss_prl.png)");
   } else if (id == 4) {
      $("#mf-image").css("background-image", "url(/assets/images/prl/mf_prl.png)");
   }
}

function color_graphics(id) {
   if (id == 1) {
      $("#cp-image").css("background-image", "url(/assets/images/color/cp_color.png)");
   } else if (id == 2) {
      $("#ws-image").css("background-image", "url(/assets/images/color/ws_color.png)");
   } else if (id == 3) {
      $("#ss-image").css("background-image", "url(/assets/images/color/ss_color.png)");
   } else if (id == 4) {
      $("#mf-image").css("background-image", "url(/assets/images/color/mf_color.png)");
   }
}

/** Picture anim */
function color_me() {
   $("#me").attr("src", "assets/images/color/me_color.png");
}

function purple_me() {
   $("#me").attr("src", "assets/images/prl/me_prl.png");
}

/** Close menu */
$("#header_menu").click(function () {
   $("#left-menu").css("width", "70%");
});

$("#close-menu").click(function () {
   $("#left-menu").css("width", "0%");
});


