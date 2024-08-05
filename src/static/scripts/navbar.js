function toggleDropdown() {
  let dropdown = document.getElementById("dropdown-menu");

  if (dropdown.className == "dropdown-disabled") {
    dropdown.className = "dropdown-enabled";
  } else if (dropdown.className == "dropdown-enabled") {
    dropdown.className = "dropdown-disabled";
  }
}