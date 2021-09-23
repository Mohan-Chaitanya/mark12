var firstAngle = document.querySelector(".angle1");
var secondAngle = document.querySelector(".angle2");
var thirdAngle = document.querySelector(".angle3");
var formData = document.querySelector(".anglesForm");
var output = document.getElementById("message");
var refresh = document.getElementById("clear");

formData.addEventListener("submit", submitFunction);
refresh.addEventListener("click", clearInputs);

function clearInputs() {
  firstAngle.value = null;
  secondAngle.value = null;
  thirdAngle.value = null;
  output.innerText = "";
}

function submitFunction(e) {
  e.preventDefault();
  const angle1 = parseInt(firstAngle.value);
  const angle2 = parseInt(secondAngle.value);
  const angle3 = parseInt(thirdAngle.value);
  const total = sum(angle1, angle2, angle3);
  if (total === 180) {
    output.innerText = "These inputs will form a triangle";
  } else {
    output.innerText = "The angle sum should be equal to 180 Degreees";
  }
}

const sum = (x, y, z) => {
  return x + y + z;
};
