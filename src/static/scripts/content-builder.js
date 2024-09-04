// That's where the building of whole page starts!

let currentPageID;

// Gets ready to include block
function addBlock(imageURL, headingText, text, align, animation = "") {
  // First, create the section - which will
  // serve as a bulding block of the page
  const block = document.createElement("section");
  // Next - create it's smaller components
  const image = document.createElement("img");
  const textContainer = document.createElement("div");
  const heading = document.createElement("h2");

  heading.className = "block-heading";
  heading.innerHTML = headingText;

  textContainer.append(heading);

  // Call the text manager helper function
  placeText(text, textContainer);

  image.src = imageURL;

  if (align == "l") {
    block.append(image);
    block.append(textContainer);
  } else if (align == "r" && window.innerWidth >= 769) {
    block.append(textContainer);
    block.append(image);
  } else if (align == "r" && window.innerWidth < 769) {
    block.append(image);
    block.append(textContainer);
  }

  // Style block itself
  block.className = "block";

  if (animation.includes("movable")) {
    block.classList.add(animation);
  }

  const currentPage = document.querySelector(`#${currentPageID}`);
  currentPage.append(block);
}

function addLine(imageURL, headingText, text) {
  const line = document.createElement("section");
  const textContainer = document.createElement("div");
  const heading = document.createElement("h1");

  line.className = "content-line";
  line.classList.add("movable-top");
  line.style.backgroundImage = `url('${imageURL}')`;

  heading.innerHTML = headingText;
  textContainer.append(heading);

  // Similarly to the "addBlock" function, call the text manager function here
  placeText(text, textContainer);

  line.append(textContainer);

  const currentPage = document.querySelector(`#${currentPageID}`);
  currentPage.append(line);
}

const placeText = (text, container) => {
  if (typeof text == "object") {
    text.map((prgrph) => {
      const paragraph = document.createElement("p");
      paragraph.innerHTML = prgrph;
      container.append(paragraph);
    });
  } else {
    const paragraph = document.createElement("p");
    paragraph.innerHTML = text;

    container.append(paragraph);
  }
};
