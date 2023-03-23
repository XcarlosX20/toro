const nav = document.querySelector(".main-navigation");
const links = document.querySelectorAll("nav a");
const main = document.querySelector("#menu-mobile");
const btnBurguerContainer = document.querySelector("#btn-burguer-container");
const btnBurguer = document.querySelector("#btn-burguer");
const mainItems = document.querySelectorAll("#main-item");
const carousel = document.querySelector(".custom-carousel");
document.addEventListener("DOMContentLoaded", function () {
  btnBurguerFn();
  scrollNav();
  showCarousel(carousel);
});
mainItems.forEach((item) => {
  item.addEventListener("click", () => {
    main.classList.add("hidden");
    btnBurguer.classList.remove("active");
  });
});

function btnBurguerFn() {
  btnBurguerContainer.addEventListener("click", (e) => {
    btnBurguerContainer.classList.toggle("active");
    main.classList.toggle("hidden");
  });
}
function scrollNav() {
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const section = document.querySelector(e.target.attributes.href.value);
      section.scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
//Carousel
function showCarousel(root) {
  var figure = root.querySelector("figure"),
    images = figure.children,
    n = images.length,
    gap = root.dataset.gap || 0,
    bfc = "bfc" in root.dataset,
    theta = (2 * Math.PI) / n,
    currImage = 0;
  setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
  window.addEventListener("resize", () => {
    setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
  });
  setupNavigation();

  function setupCarousel(n, s) {
    var apothem = s / (2 * Math.tan(Math.PI / n));
    figure.style.transformOrigin = `50% 50% ${-apothem}px`;

    for (var i = 0; i < n; i++) images[i].style.padding = `${gap}px`;
    for (i = 1; i < n; i++) {
      images[i].style.transformOrigin = `50% 50% ${-apothem}px`;
      images[i].style.transform = `rotateY(${i * theta}rad)`;
    }
    if (bfc)
      for (i = 0; i < n; i++) images[i].style.backfaceVisibility = "hidden";

    figure.style.transform = `rotateY(${currImage * -theta}rad)`;
  }

  function setupNavigation() {
    const prev = document
      .querySelector(".prev")
      .addEventListener("click", () => {
        currImage--;
        figure.style.transform = `rotateY(${currImage * -theta}rad)`;
      });
    const next = document
      .querySelector(".next")
      .addEventListener("click", () => {
        currImage++;
        figure.style.transform = `rotateY(${currImage * -theta}rad)`;
      });
  }
}
