function buildCard(text, imageURL, alignment, id) {
  const card = getDiv();
  card.className = "card";
}

function getDiv() {
  const div = document.createElement("div");

  const fragment = new DocumentFragment();
  fragment.append(div);

  return fragment;
}
