// Object responsible for providing appearing animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // If the movable element reached the viewport
    if (entry.isIntersecting) {
      // Play it's animation
      entry.target.classList.add("animated");

      // If the element appears from the top and it is below the viewport
      if (
        entry.target.classList.contains("movable-top") &&
        entry.boundingClientRect.top > 0
      ) {
        // Then, encourage it appear from the bottom
        entry.target.classList.remove("movable-top");
        entry.target.classList.add("movable-bottom");
        // Otherwise, if the element is located upon the viewport
      } else if (
        entry.target.classList.contains("movable-bottom") &&
        entry.boundingClientRect.top > 0
      ) {
        // Make it appear from the top
        entry.target.classList.remove("movable-bottom");
        entry.target.classList.add("movable-top");
      }

      return;
    }

    // Let the animation play when it is
    // seen again every time
    if (entry.target.classList.contains("infinite-play")) {
      entry.target.classList.remove("animated");
    }
  });
});

// Shoud be DRYed later..
const leftMovables = document.querySelectorAll(".movable-left");
const rightMovables = document.querySelectorAll(".movable-right");
const topMovables = document.querySelectorAll(".movable-top");
const bottomMovables = document.querySelectorAll(".movable-bottom");

leftMovables.forEach((element) => observer.observe(element));
rightMovables.forEach((element) => observer.observe(element));
topMovables.forEach((element) => observer.observe(element));
bottomMovables.forEach((element) => observer.observe(element));
