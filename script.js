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

  // ✅ Corrected BMI calculation with proper rounding
  let bmi = (weightValue / (heightValue / 100) ** 2).toFixed(1);

  if (bmi < 18.5) {
    resultBox.style.display = "block";
    img.src = "warning.png";
    resultPara.innerHTML = "You are underweight!";
    resultPara.style.color = "orange";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    resultBox.style.display = "block";
    img.src = "like.png";
    resultPara.innerHTML = "You have a healthy BMI!";
    resultPara.style.color = "green";
  } else if (bmi >= 25 && bmi < 29.9) {
    resultBox.style.display = "block";
    img.src = "warning.png";
    resultPara.innerHTML = "You are overweight!";
    resultPara.style.color = "orange";
  } else if (bmi >= 30 && bmi < 34.9) {
    resultBox.style.display = "block";
    img.src = "dislike.png";
    resultPara.innerHTML = "You have Obesity (Class 1)!";
    resultPara.style.color = "red";
  } else if (bmi >= 35 && bmi < 39.9) {
    resultBox.style.display = "block";
    img.src = "dislike.png";
    resultPara.innerHTML = "You have Obesity (Class 2)!";
    resultPara.style.color = "red";
  } else {
    resultBox.style.display = "block";
    img.src = "dislike.png";
    resultPara.innerHTML = "You have Extreme Obesity (Class 3)!";
    resultPara.style.color = "red";
  }

  resultBox.style.display = "block";
  result.innerHTML = `Results: <b>${bmi}</b>`;
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
  result.innerHTML = `Results:`;
  resultBox.style.display = "none";
  result.style.color = "#333";
});
