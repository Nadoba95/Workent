"use strict";
import "./swiper/swiper.js";
import "./accordion/accordion.js";

const heroSection = document.querySelector(".js-hero");
const heroScroll = document.querySelector(".js-hero-link");

const header = document.querySelector(".js-header");
const headerNav = document.querySelector(".js-header-nav");
const btnHeaderMenu = document.querySelector(".js-header-btn-menu");
const btnHeaderDropdown = document.querySelector(".js-header-btn-dropdown");
const btnContact = document.querySelector(".js-btn-contact");

const mobile = innerWidth < 768;

function scrollToSecondSection() {
  const sectionCords = heroSection.getBoundingClientRect();

  window.scrollTo({
    left: sectionCords.left + window.pageXOffset,
    top: sectionCords.bottom + window.pageYOffset,
    behavior: "smooth",
  });
}

function toggleMenu() {
  const iconMenu = this.querySelector(".js-header-icon-menu");
  const iconClose = this.querySelector(".js-header-icon-close");

  iconMenu.classList.toggle("hidden");
  iconClose.classList.toggle("hidden");
  this.classList.toggle("active");

  if (this.classList.contains("active")) {
    if (mobile) {
      btnContact.style.display = "block";
    }

    header.classList.add("active");
    headerNav.style.display = "block";
  } else {
    if (mobile) {
      btnContact.style.display = "none";
    }

    header.classList.remove("active");
    headerNav.style.display = "none";
  }
}

function toggleDropdown() {
  const dropdownItem = this.nextElementSibling;

  this.classList.toggle("active");

  if (this.classList.contains("active")) {
    dropdownItem.style.maxHeight = dropdownItem.scrollHeight + "px";
  } else {
    dropdownItem.style.maxHeight = null;
  }
}

if (heroScroll) {
  heroScroll.addEventListener("click", scrollToSecondSection);
}
btnHeaderMenu.addEventListener("click", toggleMenu);
btnHeaderDropdown.addEventListener("click", toggleDropdown);
