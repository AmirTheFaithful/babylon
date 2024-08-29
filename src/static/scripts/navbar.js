function toggleDropdown() {
  let dropdown = document.getElementById("dropdown-menu");

  // Open dropdown itself
  if (dropdown.className == "dropdown-disabled") {
    dropdown.className = "dropdown-enabled";
  } else if (dropdown.className == "dropdown-enabled") {
    dropdown.className = "dropdown-disabled";
  }

  // Toggle button's icon
  let icon = document.getElementById("hamburger-icon");

  if (icon.classList.contains("menuIcon")) {
    icon.classList.remove("menuIcon");
    icon.classList.add("closeIcon");
    icon.innerHTML = "close";
  } else {
    icon.classList.remove("closeIcon");
    icon.classList.add("menuIcon");
    icon.innerHTML = "menu";
  }
}
