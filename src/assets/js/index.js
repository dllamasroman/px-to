// var
let pxValue;
let remValue;

let pxToRem;
let remToPx;

// px input
const pxInput = document.getElementById("px");

pxInput.addEventListener("input", function (event) {
  pxValue = event.target.value;
  calc();
  remInput.value = pxToRem || ""; // "" --> to show the input empty, when the user have deleted the other input value
});

// rem input
const remInput = document.getElementById("rem");

remInput.addEventListener("input", function (event) {
  remValue = event.target.value;
  calc();
  pxInput.value = remToPx || ""; // "" --> to show the input empty, when the user have deleted the other input value
});

/**
 * 16 px --> 1rem
 *
 * to do (example):
 * - 30 px --> X rem
 * - 16 px --> 1 rem
 *
 * - X px --> 2.2 rem
 * - 16 px --> 1 rem
 */
function calc() {
  if (!(pxValue == null && remValue == null)) {
    pxToRem = pxValue / 16; // rem value
    remToPx = remValue * 16; // px value
  }
}
