@@include("swiperSettings.js");
@@include("_FaQ.js");
@@include("#header.js");

/* slow scroll */
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

@@include("vkWidget.js");

/* lazy google map */
window.addEventListener("load", (event) => {
  const googleMap = document.querySelector("#googleMap");
  const src = googleMap.getAttribute("data-src");
  googleMap.removeAttribute("data-src");
  googleMap.setAttribute("src", src);
});
