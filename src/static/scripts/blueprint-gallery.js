let imagesContainer = document.getElementById("images-container");
let blueprintsContainer = document.getElementById("proj-bps");
let gallery = document.getElementById("gallery");
let galleryHead = document.getElementById("gallery-top");
let galleryContent = document.getElementById("gallery-content");
let galleryTitle = document.getElementById("gallery-title");

const enableButtons = (images, currentIndex) => {
  if (images.length === 1) {
    let btns = Array.from(gallery.querySelectorAll(".gallery-btn"));
    btns.shift();

    btns.forEach((btn) => {
      btn.disabled = true;
    });
  }

  let midLftBtn = galleryContent.querySelector(".prev-btn");
  let midRgtBtn = galleryContent.querySelector(".next-btn");

  midLftBtn.addEventListener("click", () => leftButton(images, currentIndex));
  midRgtBtn.addEventListener("click", () => rightButton(images, currentIndex));

  if (window.innerWidth < 769) {
    return;
  }

  let btmLftBtn = galleryTitle.querySelector(".prev-btn");
  let btmRgtBtn = galleryTitle.querySelector(".next-btn");

  btmLftBtn.addEventListener("click", () => leftButton(images, currentIndex));
  btmRgtBtn.addEventListener("click", () => rightButton(images, currentIndex));
};

const leftButton = (imgs, idx) => {
  let currentImage = galleryContent.querySelector("img");

  if (idx === 0) {
    currentImage.src = imgs[imgs.length - 1].src;
  } else {
    currentImage.src = imgs[idx - 1].src;
  }
};

const rightButton = (imgs, idx) => {
  let currentImage = galleryContent.querySelector("img");
  if (idx === imgs.length - 1) {
    currentImage.src = imgs[0].src;
  } else {
    currentImage.src = imgs[idx + 1].src;
  }
};

const renderImageIndex = (images, currentIndex) => {
  let title = galleryTitle.querySelector("p");
  title.innerHTML = `${currentIndex} / ${images.length}`;
};

let gallerize = function (images) {
  let currentImage = galleryContent.querySelector("img");
  let index = images.findIndex((image) => image.src === currentImage.src);

  enableButtons(images, index);
  renderImageIndex(images, index);
};

const clickableImages = (images) => {
  images.map((image) => {
    image.addEventListener("click", () => {
      gallery.classList.remove("unshow");
      gallery.classList.add("show");

      let galleryImage = gallery.querySelector("img");
      galleryImage.src = image.src;
    });
  });
};

function runGallery() {
  let images = Array.from(imagesContainer.querySelectorAll("img"));
  let blueprints = Array.from(blueprintsContainer.querySelectorAll("img"));

  gallerize(images);
  gallerize(blueprints);

  clickableImages(images);
  clickableImages(blueprints);
}

runGallery();
