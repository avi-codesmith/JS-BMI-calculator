const height = document.querySelector(".height");
const weight = document.querySelector(".weight");
const btn = document.querySelector(".btn");
const resultPara = document.querySelector(".result-para");
const result = document.querySelector(".para");
const img = document.querySelector(".img");
const resultBox = document.querySelector(".results");
const again = document.querySelector(".again");

function calculateBMI() {
  let heightValue = parseFloat(height.value);
  let weightValue = parseFloat(weight.value);

  if (
    isNaN(heightValue) ||
    isNaN(weightValue) ||
    heightValue <= 0 ||
    weightValue <= 0
  ) {
    result.innerHTML = "❗ Please enter a valid height and weight!";
    result.style.color = "red";
    resultBox.style.display = "none";
    return;
  }

  let bmi = Math.trunc(weightValue / (heightValue / 100) ** 2);

  if (bmi < 18.5) {
    resultBox.style.display = "block";
    img.src = "like.png";
    resultPara.innerHTML = "You have correct BMI!";
    resultPara.style.color = "green";
  } else if (bmi > 18.5) {
    img.src = "warning.png";
    resultPara.innerHTML = "You are thin!";
    resultPara.style.color = "orange";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    resultBox.style.display = "block";
    img.src = "like.png";
    resultPara.innerHTML = "You have healthy fat!";
    resultPara.style.color = "green";
  } else if (bmi >= 25 && bmi < 29.9) {
    resultBox.style.display = "block";
    img.src = "warning.png";
    resultPara.innerHTML = "You have Overweight!";
    resultPara.style.color = "orange";
  } else {
    resultBox.style.display = "block";
    img.src = "dislike.png";
    resultPara.innerHTML = "You are in Obese!";
    resultPara.style.color = "red";
  }
  resultBox.style.display = "block";
  result.innerHTML = ` Results: <b>${bmi}</b>`;
  result.style.color = "#333";
}

btn.addEventListener("click", calculateBMI);

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    calculateBMI();
  }
});

again.addEventListener("click", () => {
  height.value = "";
  weight.value = "";
  result.innerHTML = ` Results:`;
  resultBox.style.display = "none";
  result.style.color = "#333";
});
