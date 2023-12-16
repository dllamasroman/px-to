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
  updatePxInputValue();
});

// rem input
const remInput = document.getElementById("rem");

remInput.addEventListener("input", function (event) {
  remValue = event.target.value;
  calc();
  updateRemInputValue();
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

// update inputs values
function updatePxInputValue() {
  pxInput.value = remToPx;
}

function updateRemInputValue() {
  remInput.value = pxToRem;
}

//! improve the update[...]InputValue system, hence when you enter a value in pxInput (for example), change it value too

//! Spanish (ES) -> mejorar el sistema update[...]InputValue, ya que cuando introduces un valor en pxInput (por ejemplo), también cambia el valor de dicho campo
