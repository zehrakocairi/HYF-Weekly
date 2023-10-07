"use strict";

const STEP_SIZE_PX = 10;
const STEP_INTERVAL_MS = 50;
const DANCE_TIME_MS = 5000;
const DANCING_CAT_URL =
  "https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif";

async function walk(img, startPos, stopPos) {
  img.style.left = startPos + "px";

  return new Promise((resolve) => {
    let moveCat = setInterval(() => {
      let currentPos = img.style.left;
      let fixedCurrentPos = Number(currentPos.replace("px", ""));
      img.style.left = fixedCurrentPos + STEP_SIZE_PX + "px";

      if (fixedCurrentPos >= stopPos) {
        clearInterval(moveCat);
        resolve();
      }
    }, STEP_INTERVAL_MS);
  });
}

async function dance(img) {
  return new Promise((resolve) => {
    img.src = DANCING_CAT_URL;
    setTimeout(() => {
      img.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
      resolve();
    }, DANCE_TIME_MS);
  });
}

async function catWalk() {
  const img = document.querySelector("img");
  const startPos = -img.width;
  const centerPos = (window.innerWidth - img.width) / 2;
  const stopPos = window.innerWidth;

  for (var i = 0; i < 1; ) {
    await walk(img, startPos, centerPos);
    await dance(img);
    await walk(img, centerPos, stopPos);
  }
}

window.addEventListener("load", catWalk);
