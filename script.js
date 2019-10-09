// Popup

function togglePopup() {
  var popup = document.getElementById("popup");

  if (popup.classList.contains("show")) {
    popup.classList.remove("show");
  } else {
    popup.classList.add("show");
  }
}

// Mobile menu

function toggleMenu() {
  var menu = document.getElementById("mob-nav");

  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
  } else {
    menu.classList.add("show");
  }
}
