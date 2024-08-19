window.onscroll = () => {
  const nav = document.querySelector("#navbar");

  if (window.scrollY === 0) {
    nav.classList.add("non-scrolled");
    nav.classList.remove("scrolled");
  } else {
    nav.classList.add("scrolled");
    nav.classList.remove("non-scrolled");
  }
};
