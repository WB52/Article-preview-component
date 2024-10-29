const share = document.querySelector(".share");
const shareBarContainer = document.querySelector(".share-bar-container");
const shareIconImg = document.querySelector(".share-icon-img");
share.addEventListener("click", show);

function show() {
  shareBarContainer.classList.toggle("hide");
  share.classList.toggle("active-share");
  shareIconImg.classList.toggle("active-share-icon");
}
