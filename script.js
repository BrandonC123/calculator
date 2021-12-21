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
let value2;
let counter = 0;

operations.forEach((btn) => {
    btn.addEventListener("click", () => {
        value1 = operator(displayValue);
        op = btn.textContent;
    });
});

function operator(value1) {
    let screen = true;
    if (counter >= 1) {
        console.log("t");
        calculate();
        value1 = displayValue;
        screen = false;
    }
    clear(screen);
    counter++;
    return value1;
}

function clear(screen) {
    if (screen) {
        for (let i = 0; i < displayArray.length; i++) {
            display.removeChild(displayArray[i]);
        }
        displayArray = [];
    }
    displayValue = "";
    counter = 0;
}

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
    clear(true);
});

const equalsBtn = document.querySelector("#equals");
equalsBtn.addEventListener("click", () => {
    calculate();
});

function calculate() {
    const sol = document.createElement("div");
    sol.textContent = operate(op, value1, displayValue);
    console.log(`${value1} ${displayValue}`);
    clear(true);
    display.appendChild(sol);
    displayValue = sol.textContent;
    console.log(sol.textContent);
    displayArray.push(sol);
}
