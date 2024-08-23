const images = [
  "../assets/proj-1/img-1.jpg",
  "../assets/proj-2/img-1.jpg",
  "../assets/proj-3/img-1.jpg",
];

const bigImage = document.querySelector(".big-image");

setTimeout(() => (bigImage.style.opacity = 0.2), 600);

bigImage.style.opacity = 1;

play(0);
