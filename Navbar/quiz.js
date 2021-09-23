let questionsArray = document.querySelectorAll("questions");
let scoreButton = document.getElementById("score");
let quizForm = document.querySelector(".quiz-form");
let result = document.getElementById("output");

scoreButton.addEventListener("click", handleSubmit);

let answers = ["right", "Equilateral", "pythagorus", "scalene", "six"];

function handleSubmit() {
  let userAnswers = [];
  let formOutput = new FormData(quizForm);
  for (let value of formOutput.values()) {
    userAnswers.push(value);
  }
  getScore(userAnswers);
}

function getScore(params) {
  let score = 0;
  if (params.length < 5) {
    result.innerText = "Answer all the questions";
  } else {
    params.map((x) => {
      if (params.indexOf(x) === answers.indexOf(x)) {
        score = score + 1;
      }
    });
    result.innerText = `Your score is ${score}`;
  }
}
