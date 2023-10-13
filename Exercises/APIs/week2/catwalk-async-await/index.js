"use strict";

const STEP_INTERVAL_MS = 50;
const STEP_SIZE_PX = 10;
const DANCE_TIME_MS = 5000;
const DANCING_CAT_URL =
  "https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif";
const WALKING_CAT_URL =
  "http://www.anniemation.com/clip_art/images/cat-walk.gif";

function walk(img, startPos, stopPos) {
  return new Promise((resolve) => {
    let currentPos = startPos;

    let interval = setInterval(() => {
      currentPos += STEP_SIZE_PX;
      img.style.left = `${currentPos}px`;

      if (currentPos >= stopPos) {
        clearInterval(interval);
        resolve();
      }
    }, STEP_INTERVAL_MS);
  });
}

function dance(img) {
  img.src = DANCING_CAT_URL;

  return new Promise((resolve) => {
    setTimeout(() => {
      img.src = WALKING_CAT_URL;
      resolve();
    }, DANCE_TIME_MS);
  });
}

async function catWalk() {
  const img = document.querySelector("img");
  const startPos = -img.width;
  const centerPos = (window.innerWidth - img.width) / 2;
  const stopPos = window.innerWidth;

  for (let i = 0; i < 1; ) {
    await walk(img, startPos, centerPos);
    await dance(img);
    await walk(img, centerPos, stopPos);
  }

  // Use async/await syntax to loop the walk and dance functions
}

window.addEventListener("load", catWalk);
