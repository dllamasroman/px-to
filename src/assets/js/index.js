// var
let pxValue;
let remValue;

let pxToRem;
let remToPx;

// px input
const pxInput = document.getElementById("px");

pxInput.addEventListener("input", function (event) {
  pxValue = event.target.value;

  // delete pxValue if it is not a number
  if (!/^\d*\.?\d*$/.test(pxValue)) {
    pxInput.value = pxValue.slice(0, -1);
    return;
  } // X1

  calc();
  remInput.value = isDecimal(pxValue) ? pxToRem : "";
});

// rem input
const remInput = document.getElementById("rem");

remInput.addEventListener("input", function (event) {
  remValue = event.target.value;

  // delete a remValue if it is not a number
  if (!/^\d*\.?\d*$/.test(remValue)) {
    remInput.value = remValue.slice(0, -1);
    return;
  } // X1

  calc();
  pxInput.value = isDecimal(remValue) ? remToPx : "";
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
  pxToRem = (pxValue / 16).toFixed(3); // rem value
  remToPx = (remValue * 16).toFixed(3); // px value
}

function isDecimal(value) {
  return value.includes(".");
}

/**
 * Spanish (ES):
 *
 * EXPLICACIÓN DE X1
 *
 * - Expresión regular (verificar si la cadena presenta un número válido):
 *    --> ^\d* -> Inicio de la cadena con 0 seguido de más valores
 *    --> \.? -> . opcional para permitir la entrada de números decimales
 *    --> \d*$ -> Final de la cadena con 0 seguido de más valores y se asegura de que no haya caracteres que no sean números
 *
 * - test([...]) --> es un método de las expresiones regulares que se encarga de devolver 'true' si la expresión regular coincide con la cadena proporcionada
 *
 * - slice(0, -1) --> se elimina el carácter que el usuario acaba de ingresar si el valor introducido no es un número válido
 *
 * - return --> para que se detenga la función en el caso de no ser los valores del input correctos y no continue ejecutando el resto del código que está en el evento
 */

//! ES -> NO SE MUESTRA NADA EN EL INPUT SI EL NUMERO ES ENTERO
