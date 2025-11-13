let screen = document.getElementById("result");
let expression = ""; // stores what user types

// Function to add any button press to the display
function press(value) {
  expression += value;
  screen.innerHTML = expression;
}

// Function to delete last character
function deleteLast() {
  expression = expression.slice(0, -1);
  screen.innerHTML = expression;
}

// Function to clear everything
function clearScreen() {
  expression = "";
  screen.innerHTML = "";
}

// Function to calculate the expression
function calculate() {
  try {
    // Use eval carefully - it evaluates the math expression
    let result = eval(expression);
    screen.innerHTML = result;
    expression = result.toString();
  } catch (error) {
    screen.innerHTML = "Error!";
    expression = "";
  }
}
