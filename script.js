// popup

function togglePopup() {
  var popup = document.getElementById("popup");

  if (popup.classList.contains("show")) {
    popup.classList.remove("show");
  } else {
    popup.classList.add("show");
  }
}
