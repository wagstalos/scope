const botoes = document.getElementById("menu-mob");
const menuMobile = document.getElementById("menu-mobile");

const iconMobile = document.getElementById("icon");

botoes.addEventListener("click", () => {
  menuMobile.classList.toggle("active");
  iconMobile.classList.toggle("active");
});

var typed3 = new Typed(".element", {
  strings: [" tecnologia", " o digital", " a inovação"],
  typeSpeed: 60,
  backSpeed: 0,
  smartBackspace: true,
  // this is a default
});

("use strict");
class DisclosureButton {
  constructor(buttonNode) {
    this.buttonNode = buttonNode;
    this.controlledNode = false;

    var id = this.buttonNode.getAttribute("aria-controls");

    if (id) {
      this.controlledNode = document.getElementById(id);
    }

    this.buttonNode.setAttribute("aria-expanded", "false");
    this.hideContent();

    this.buttonNode.addEventListener("click", this.onClick.bind(this));
    this.buttonNode.addEventListener("focus", this.onFocus.bind(this));
    this.buttonNode.addEventListener("blur", this.onBlur.bind(this));
  }

  showContent() {
    if (this.controlledNode) {
      this.controlledNode.style.display = "block";
    }
  }

  hideContent() {
    if (this.controlledNode) {
      this.controlledNode.style.display = "none";
    }
  }

  toggleExpand() {
    if (this.buttonNode.getAttribute("aria-expanded") === "true") {
      this.buttonNode.setAttribute("aria-expanded", "false");
      this.hideContent();
    } else {
      this.buttonNode.setAttribute("aria-expanded", "true");
      this.showContent();
    }
  }

  /* EVENT HANDLERS */

  onClick() {
    this.toggleExpand();
  }

  onFocus() {
    this.buttonNode.classList.add("focus");
  }

  onBlur() {
    this.buttonNode.classList.remove("focus");
  }
}

/* Initialize Hide/Show Buttons */

window.addEventListener(
  "load",
  function () {
    var buttons = document.querySelectorAll(
      "button[aria-expanded][aria-controls]"
    );

    for (var i = 0; i < buttons.length; i++) {
      new DisclosureButton(buttons[i]);
    }
  },
  false
);

// Set Error Message
function setError(input, errormsg) {
  const formGroup = input.parentElement;
  const inputAlert = formGroup.querySelector(".input-alert");
  formGroup.className = "form-group error";
  inputAlert.innerText = errormsg;
}

// Set Success Message
function setSuccess(input) {
  const formGroup = input.parentElement;
  formGroup.className = "form-group success";
}

// Check Valid Email
function validEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Form Validation Check
function validateForm(form) {
  if (form.fullname.value.trim() === "") {
    setError(form.fullname, "Fullname cannot be blank");
    return false;
  } else {
    setSuccess(form.fullname);
  }

  if (form.email.value.trim() === "") {
    setError(form.email, "Email cannot be blank");
    return false;
  } else if (!validEmail(form.email.value.trim())) {
    setError(form.email, "Email is not valid");
    return false;
  } else {
    setSuccess(form.email);
  }

  if (form.message.value.trim() === "") {
    setError(form.message, "Message cannot be blank");
    return false;
  } else {
    setSuccess(form.message);
  }

  return true;
}
