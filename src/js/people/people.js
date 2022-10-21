const lightbox = document.querySelector(".js-lightbox");
const members = document.querySelectorAll(".js-people-member");
const btnClose = document.querySelector(".js-lightbox-btn");

function displayMember() {
  const member = this;
  const img = member.querySelector(".js-people-img").src;
  const name = member.querySelector(".js-people-name").textContent;
  const title = member.querySelector(".js-people-desc").textContent;
  const { description } = member.dataset;

  lightbox.querySelector(".js-lightbox-img").setAttribute("src", img);
  lightbox.querySelector(".js-lightbox-name").textContent = name;
  lightbox.querySelector(".js-lightbox-title").textContent = title;
  lightbox.querySelector(".js-lightbox-desc").textContent = description;

  lightbox.classList.add("shown");
}

function hideLayout() {
  lightbox.classList.remove("shown");
}

members.forEach((member) => member.addEventListener("click", displayMember));
if (btnClose) {
  btnClose.addEventListener("click", hideLayout);
}
