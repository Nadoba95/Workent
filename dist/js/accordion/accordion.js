const accordionItems = document.querySelectorAll(".js-accordion-button");

function accordionDropdown() {
  const accordionItem = this;
  const accordionBody = accordionItem.nextElementSibling;
  const plusIcon = accordionItem.querySelector(".icon-plus");
  const minusIcon = accordionItem.querySelector(".icon-minus");

  accordionItem.classList.toggle("active");

  if (accordionItem.classList.contains("active")) {
    accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
    plusIcon.classList.add("hidden");
    minusIcon.classList.remove("hidden");
  } else {
    accordionBody.style.maxHeight = null;
    plusIcon.classList.remove("hidden");
    minusIcon.classList.add("hidden");
  }
}

if (accordionItems.length > 0) {
  accordionItems[0].nextElementSibling.style.maxHeight =
    accordionItems[0].nextElementSibling.scrollHeight + "px";
}

accordionItems.forEach((item) =>
  item.addEventListener("click", accordionDropdown)
);
