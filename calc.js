// function displayData(data) {
//     result.value+=data
// }

// function allClear() {
//     result.value=""
// }

// function findOut() {
//     result.value=eval(result.value)
// }

// function backSpace() {
//     result.value=result.value.slice(0,-1)
// }

let displayValue = "";

function addToDisplay(value) {
  displayValue += value;
  document.getElementById("display").value = displayValue;
}

function clearDisplay() {
  displayValue = "";
  document.getElementById("display").value = "";
}

function calculateResult() {
  try {
    const result = eval(displayValue);
    document.getElementById("display").value = result;
    displayValue = result.toString();
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}