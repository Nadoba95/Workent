import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

const btnNext = document.querySelector(".js-btn-slider-right");
const btnPrev = document.querySelector(".js-btn-slider-left");

const swiper = new Swiper(".swiper", {
  speed: 400,
  slidesPerView: 4,
  loop: true,
  spaceBetween: 20,
  watchSlidesProgress: true,
  grabCursor: true,

  navigation: {
    nextEl: btnNext,
    prevEl: btnPrev,
  },
});
