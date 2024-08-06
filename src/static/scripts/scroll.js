function renderCard(direction="row", point="top", data, color="#a9a0ff70") {
  let card = document.createElement("section");
  card.className = "card";
  card.style.flexDirection = direction;

  let main = document.getElementById("main")
  main.append(card);
}