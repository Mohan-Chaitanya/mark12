let triangleBase = document.getElementById("base");
let triangleHeight = document.getElementById("height");
let areaButton = document.getElementById("calculateBtn");
let areaData = document.getElementById("area");
let dataClearBtn = document.querySelector(".clear");

// console.log(dataClearBtn);

const areaFunction = (heightParam, baseParam) => {
  let calculatedArea = parseFloat((baseParam * heightParam) / 2);
  return calculatedArea;
};

const handleClick = (e) => {
  let areaValue = "";
  e.preventDefault();
  const heightValue = triangleHeight.value;
  const baseValue = triangleBase.value;
  if (heightValue < 0 || baseValue < 0) {
    areaData.textContent = "Inputs should be greater than zero";
  } else {
    areaValue = areaFunction(heightValue, baseValue);
    if (areaValue > 0) {
      areaData.textContent = `Area for the given inputs is:${areaValue}`;
    } else {
      areaData.textContent = "Give Proper inputs";
    }
  }
};

function clearData() {
  triangleBase.value = "";
  triangleHeight.value = "";
  areaData.textContent = "";
}

dataClearBtn.addEventListener("click", clearData);
areaButton.addEventListener("click", handleClick);
