let baseLength = document.getElementById("base");
let heightLength = document.getElementById("height");
let hypoButton = document.getElementById("hypo-Btn");
let outputMessage = document.getElementById("hypotenuse");
let clearData = document.getElementById("clear");

function clickHandler(e) {
  e.preventDefault();
  if (baseLength.value > 0 && heightLength.value > 0) {
    let hypoLength = calculate(baseLength.value, heightLength.value);
    if (hypoLength > 0) {
      outputMessage.textContent = `Length of Hypotenuse for above inputs is ${hypoLength}`;
    } else {
      outputMessage.textContent = `Give proper inputs`;
    }
  } else {
    outputMessage.textContent = `Inputs should be greater than zero`;
  }
}

function calculate(x, y) {
  let output;
  let baseSquare = Math.pow(x, 2);
  //   console.log(baseSquare);
  let heightSquare = Math.pow(y, 2);
  //   console.log(heightSquare);
  output = Math.sqrt(baseSquare, heightSquare);
  //   console.log(output);
  return output;
}

function clearFunction() {
  baseLength.value = "";
  heightLength.value = "";
  outputMessage.textContent = "";
}

clearData.addEventListener("click", clearFunction);
hypoButton.addEventListener("click", clickHandler);
