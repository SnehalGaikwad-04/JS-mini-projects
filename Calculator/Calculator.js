let display = document.getElementById("display");

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    // Evaluate the expression in the display
    let result = eval(display.value);
    // Check if result is valid
    if (isNaN(result) || !isFinite(result)) {
      display.value = "Error";
    } else {
      display.value = result;
    }
  } catch (error) {
    display.value = "Error";
  }
}
