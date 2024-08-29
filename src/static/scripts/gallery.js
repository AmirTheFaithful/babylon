let imagesContainer = document.querySelector("#images-container");
let gallery = document.querySelector("#gallery");

let images = Array.from(imagesContainer.querySelectorAll("img"));
images.forEach((image) => {
  image.addEventListener("click", () => {
    gallery.classList.remove("unshow");
    gallery.classList.add("show");

    let galleryImage = gallery.querySelector("img");
    galleryImage.src = image.src;
  });
});

let galleryTopSection = gallery.querySelector("#gallery-top");
let closeButton = galleryTopSection.querySelector("button");

closeButton.addEventListener("click", () => {
  gallery.classList.remove("show");
  gallery.classList.add("unshow");
});

let galleryContentSection = gallery.querySelector("#gallery-content");
let previousButton = galleryContentSection.querySelector(".prev-btn");
let nextButton = galleryContentSection.querySelector(".next-btn");

previousButton.addEventListener("click", () => {
  let images = Array.from(imagesContainer.getElementsByTagName("img"));
  let currentImage = gallery.querySelector("img");
  let index = images.findIndex((image) => currentImage.src === image.src);

  if (index === 0) {
    currentImage.src = images[images.length - 1].src;
  } else {
    currentImage.src = images[index - 1].src;
  }

  renderImageIndex(images);
});

nextButton.addEventListener("click", () => {
  let images = Array.from(imagesContainer.getElementsByTagName("img"));
  let currentImage = gallery.querySelector("img");
  let index = images.findIndex((image) => currentImage.src === image.src);

  if (index === images.length - 1) {
    currentImage.src = images[0].src;
  } else {
    currentImage.src = images[index + 1].src;
  }

  renderImageIndex(images);
});

const renderImageIndex = (imagesArray) => {
  let imageElement = galleryContentSection.querySelector("img");
  let index = imagesArray.findIndex((image) => imageElement.src === image.src);
  let galleryTitle = gallery.querySelector("#gallery-title").querySelector("p");
  galleryTitle.innerHTML = `${index + 1} / ${imagesArray.length}`;
};

renderImageIndex(images);
