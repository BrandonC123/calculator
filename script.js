function add(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(op, num1, num2) {
  switch (op) {
    case "÷":
      return divide(num1, num2);
    case "x":
      return multiply(num1, num2)
    case "-":
      return sub(num1, num2);
    case "+":
      return add(num1,num2);
  }
}

const numbers = document.querySelectorAll(".num-btn");
const display = document.querySelector("#display");
let displayValue = "";
let displayArray = [];

numbers.forEach((btn) => {
  btn.addEventListener("click", () => {
    const num = document.createElement("div");
    num.textContent = btn.textContent;
    displayValue += num.textContent;
    displayArray.push(num);
    display.appendChild(num);
  });
});

const operations = document.querySelectorAll(".op-btn");
let value1;
let op;

operations.forEach((btn) => {
  btn.addEventListener("click", () => {
    value1 = operator(displayValue);
    op = btn.textContent;
  });
});

function operator(value1) {
  clear();
  return value1;
}

function clear() {
  for (let i = 0; i < displayValue.length; i++) {
    display.removeChild(displayArray[i]);
  }
  displayArray = [];
  displayValue = "";
}

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
  clear();
});

const equalsBtn = document.querySelector("#equals");
equalsBtn.addEventListener("click", () => {
  const sol = document.createElement('div');
  sol.textContent = operate(op, value1, displayValue);
  clear();
  display.appendChild(sol);
  displayArray.push(sol);
});
