let bodyElement = document.querySelector("body");
let scrollPosition = localStorage.getItem("scroll-position");

if (scrollPosition !== null) {
  bodyElement.scrollTop = Number(scrollPosition);
}

window.addEventListener("beforeunload", () => {
  localStorage.setItem("scrollPosition", bodyElement.scrollTop);
});
