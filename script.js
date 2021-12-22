function add(num1, num2) {
    return +num1 + +num2;
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
            return multiply(num1, num2);
        case "-":
            return sub(num1, num2);
        case "+":
            return add(num1, num2);
    }
}

const numbers = document.querySelectorAll(".num-btn");
const display = document.querySelector("#display");
let displayValue = "";
let displayArray = [];

numbers.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (afterOP = true) {
            clearDisplay();
            afterOP = false;
        }
        const num = document.createElement("div");
        num.textContent = btn.textContent;
        displayValue += num.textContent;
        displayArray.push(num);
        display.appendChild(num);
    });
});

const operations = document.querySelectorAll(".op-btn");

let value1;
let value2;
let op;
let afterOP = false;

operations.forEach((btn) => {
    btn.addEventListener("click", () => {
        getValue1();
        op = btn.textContent;
    });
});

function getValue1 () {
    value1 = displayValue;
    displayValue = '';
    afterOP = true;
}

const equalsBtn = document.querySelector('#equals');
equalsBtn.addEventListener('click', () => {
    calculate();
});

function calculate() {
    value2 = displayValue;
    clearDisplay();
    let sol = document.createElement('div');
    sol.textContent = operate(op, value1, value2);
    console.log(sol.textContent);
    display.appendChild(sol);
}

function clearDisplay() {
    for (let i = 0; i < displayArray.length; i++) {
        display.removeChild(displayArray[i]);
    }
    displayArray = [];
}