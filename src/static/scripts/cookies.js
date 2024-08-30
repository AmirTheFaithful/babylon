const cookiesBox = document.querySelector("#cookies-box");
const consentBtn = document.querySelector(".consent-btn");
const rejectBtn = document.querySelector(".reject-btn");

const hideBox = () => {
  cookiesBox.classList.add("hide");
};

consentBtn.onclick = function () {
  if (document.cookie) {
    hideBox();
  } else {
    document.cookie = `CookieBy=Babylon, max-age=${60 * 60 * 24};`;
    hideBox();
  }
};

rejectBtn.onclick = function () {
  document.cookie = "CookieBy=Babylon, rejected=true;";
  hideBox();
};

let checkCookie = document.cookie.indexOf("CookieBy=Babylon");

checkCookie !== -1 ? hideBox() : cookiesBox.classList.remove("hide");

// window.addEventListener("load", () => {
//   cookiesBox.classList.remove("hide");
// });
