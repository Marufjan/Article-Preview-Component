"use strict";

const grid = document.querySelector(".grid");
const share = document.querySelector(".share");
const body = document.querySelector("body");

const html = `<div class="share-box ">
<p>share</p>
<img src="./images/icon-facebook.svg" alt="facebook" />
<img src="./images/icon-twitter.svg" alt="twitter" />
<img src="./images/icon-pinterest.svg" alt="pinterest" />
</div>`;

grid.insertAdjacentHTML("beforeend", html);

const shareBox = document.querySelector(".share-box");

share.addEventListener("click", function () {
  document.querySelector(".share-box").classList.toggle("hidden");
});

// Removing Content with ESC
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    document.querySelector(".share-box").classList.remove("hidden");
  }
});
