"use strict";
import "./header/header.js";
import "./swiper/swiper.js";
import "./accordion/accordion.js";
import "./people/people.js";
import "./contact/contact.js";

const heroSection = document.querySelector(".js-hero");
const heroScroll = document.querySelector(".js-hero-link");

function scrollToSecondSection() {
  const sectionCords = heroSection.getBoundingClientRect();

  window.scrollTo({
    left: sectionCords.left + window.pageXOffset,
    top: sectionCords.bottom + window.pageYOffset,
    behavior: "smooth",
  });
}

if (heroScroll) {
  heroScroll.addEventListener("click", scrollToSecondSection);
}
