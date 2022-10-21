const form = document.querySelector(".js-form");
const formName = document.querySelector(".js-form-input-name");
const formEmail = document.querySelector(".js-form-input-email");
const formOrganisaton = document.querySelector(".js-form-input-organisation");
const formTextarea = document.querySelector(".js-form-textarea-message");
const formSuccessMsg = document.querySelector(".js-contact-success-msg-box");

function inputIsValid(input) {
  if (input.value === "") {
    input.closest(".form__item").querySelector(".form__label").style.color =
      "red";
    input.style.borderBottom = "1px solid red";
    input.focus();

    formSuccessMsg.classList.add("hidden");
    return false;
  }
  return true;
}

function restartInput(input) {
  input.closest(".form__item").querySelector(".form__label").style.color =
    "black";
  input.style.borderBottom = "1px solid silver";
}

function submitForm(e) {
  e.preventDefault();

  if (!inputIsValid(formName)) {
    return;
  }
  restartInput(formName);

  if (!inputIsValid(formEmail)) {
    return;
  }
  restartInput(formEmail);

  if (!inputIsValid(formOrganisaton)) {
    return;
  }
  restartInput(formOrganisaton);

  if (!inputIsValid(formTextarea)) {
    return;
  }
  restartInput(formTextarea);

  formName.value = "";
  formEmail.value = "";
  formOrganisaton.value = "";
  formOrganisaton.value = "";
  formTextarea.value = "";
  formSuccessMsg.classList.remove("hidden");
}

if (form) {
  form.addEventListener("submit", submitForm);
}
