const getMobileOSName = () => {
  let userAgent = navigator.userAgent;

  if (/android/i.test(userAgent)) {
    return "Android";
  } else if (/iPad|Iphone|Ipod/.test(userAgent)) {
    return "iOS";
  }

  return "Other";
};

function responsiveBigText() {
  let bigTextContainer = document.querySelector(".big-text-container");

  if (!bigTextContainer) {
    return;
  }

  let osName = getMobileOSName();
  let pText = bigTextContainer.querySelector("p");
  let h1Text = bigTextContainer.querySelector("h1");

  if (osName === "Android") {
    pText.classList.add("android-p-text");
    h1Text.classList.add("android-h1-text");
  } else if (osName === "iOS") {
    pText.classList.remove("android-p-text");
    h1Text.classList.remove("android-h1-text");
  }
}

responsiveBigText();
