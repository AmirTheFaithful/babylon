let imagesContainer = document.querySelector("#images-container");
let gallery = document.querySelector("#gallery");

let images = Array.from(imagesContainer.querySelectorAll("img"));
images.forEach((image) => {
  image.addEventListener("click", () => {
    gallery.classList.remove("unshow");
    gallery.classList.add("show");

    let galleryImage = gallery.querySelector("img");
    galleryImage.src = image.src;

    renderImageIndex(images);
  });
});

let galleryTopSection = gallery.querySelector("#gallery-top");
let closeButton = galleryTopSection.querySelector("button");

closeButton.addEventListener("click", () => {
  gallery.classList.remove("show");
  gallery.classList.add("unshow");
});

function runButtons() {
  let galleryContentSection = gallery.querySelector("#gallery-content");
  let galleryTitleSection = gallery.querySelector("#gallery-title");

  let previousButton = galleryContentSection.querySelector(".prev-btn");
  let nextButton = galleryContentSection.querySelector(".next-btn");

  let btmPrvBtn = galleryTitleSection.querySelector(".prev-btn");
  let btmNxtBtn = galleryTitleSection.querySelector(".next-btn");

  /* If only single picture is present for current
   * project - disable prev and next buttons,
   * as they are useless */
  if (images.length === 1) {
    previousButton.disabled = true;
    nextButton.disabled = true;
  }

  // Otherwise, enable their functionality
  previousButton.addEventListener("click", () => enableButton("left"));
  nextButton.addEventListener("click", () => enableButton("right"));

  btmPrvBtn.addEventListener("click", () => enableButton("left"));
  btmNxtBtn.addEventListener("click", () => enableButton("right"));
}

// "runButton"'s helper functions
const enableButton = (direction) => {
  let images = Array.from(imagesContainer.getElementsByTagName("img"));
  let currentImage = gallery.querySelector("img");
  let index = images.findIndex((image) => currentImage.src === image.src);

  if (direction === "left") {
    leftButton(images, currentImage, index);
  }

  if (direction === "right") {
    rightButton(images, currentImage, index);
  }

  renderImageIndex(images);
};

const leftButton = (imgs, currImg, idx) => {
  if (idx === 0) {
    currImg.src = imgs[imgs.length - 1].src;
  } else {
    currImg.src = imgs[idx - 1].src;
  }
};

const rightButton = (imgs, currImg, idx) => {
  if (idx === imgs.length - 1) {
    currImg.src = imgs[0].src;
  } else {
    currImg.src = imgs[idx + 1].src;
  }
};

const renderImageIndex = (imagesArray) => {
  let gallery = document.querySelector("#gallery");
  let galleryContentSection = gallery.querySelector("#gallery-content");
  let imageElement = galleryContentSection.querySelector("img");
  let index = imagesArray.findIndex((image) => imageElement.src === image.src);
  let galleryTitle = gallery.querySelector("#gallery-title").querySelector("p");

  galleryTitle.innerHTML = `${index + 1} / ${imagesArray.length}`;
};

runButtons();
renderImageIndex(images);
