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
    let value = num1 / num2;
    if ((num1 / num2) % 1 != 0) {
        value = add(value.toPrecision(9), 0);
    }
    return value;
}

function modulo(num1, num2) {
    return num1 % num2;
}

function operate(op, num1, num2) {
    switch (op) {
        case "+":
            return add(num1, num2);
        case "-":
            return sub(num1, num2);
        case "x":
            return multiply(num1, num2);
        case "÷":
            return divide(num1, num2);
        case "%":
            return modulo(num1, num2);
    }
}

const numbers = document.querySelectorAll(".num-btn");
const display = document.querySelector("#display");
let displayValue = "";
let displayArray = [];
let value1;
let value2;
let op;
let count = 0;
let numCounter = 0;
let decimal = false;
let afterOP = false;

numbers.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (numCounter < 10) {
            displayToScreen(btn);
        }
    });
});

function useKB(btn) {
    if (numCounter < 10) {
        const key = document.querySelector(
            `.num-btn[data-key = "${btn.keyCode}"]`
        );
        displayToScreen(key);
    }
}

window.addEventListener("keydown", useKB);

const operations = document.querySelectorAll(".op-btn");

operations.forEach((btn) => {
    btn.addEventListener("click", () => {
        getValue1();
        op = btn.textContent;
    });
});

function getValue1() {
    if (count >= 1) {
        value1 = calculate();
    } else {
        value1 = displayValue;
    }
    count++;
    displayValue = "";
    numCounter = 0;
    afterOP = true;
}

const posNegBtn = document.querySelector("#pos-neg");
posNegBtn.addEventListener("click", () => {
    const sol = document.createElement("div");
    if (displayValue.charAt(0) != "-") {
        displayValue = "-" + displayValue;
    } else {
        displayValue = displayValue.substring(1, displayValue.length);
    }
    sol.textContent = displayValue;
    clearDisplay(false);
    displayToScreen(sol);
});

const equalsBtn = document.querySelector("#equals");
equalsBtn.addEventListener("click", () => {
    calculate();
});

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
    clearDisplay(true);
});

function calculate() {
    console.log(displayValue);
    value2 = displayValue;
    clearDisplay(true);
    if (value2 == 0 && op == "÷") {
        displayCalculate("I DON'T THINK SO!");
        return;
    }
    displayValue = displayCalculate(operate(op, value1, value2));
    return displayValue;
}

//Calculate and display to screen
function displayCalculate(num) {
    const sol = document.createElement("div");
    sol.textContent = num;
    console.log(value1 + " " + value2);
    displayArray.push(sol);
    console.log(sol.textContent);
    display.appendChild(sol);
    afterOP = true;
    return sol.textContent;
}

//Only display to screen
function displayToScreen(btn) {
    if (checkDecimal(btn)) return;
    if (afterOP == true) {
        clearDisplay(false);
        afterOP = false;
    }
    const num = document.createElement("div");
    num.textContent = btn.textContent;
    displayValue += num.textContent;
    displayArray.push(num);
    display.appendChild(num);
    numCounter++;
}

function checkDecimal(btn) {
    if (decimal === true && btn.textContent === ".") {
        return true;
    }
    if (btn.textContent == ".") {
        decimal = true;
    }
    return false;
}

function clearDisplay(reset) {
    for (let i = 0; i < displayArray.length; i++) {
        display.removeChild(displayArray[i]);
    }
    displayValue = "";
    displayArray = [];
    if (reset == true) {
        count = 0;
        decimal = false;
        numCounter = 0;
    }
}

const delBtn = document.querySelector("#del");
delBtn.addEventListener("click", () => {
    if (displayArray.length >= 1) {
        display.removeChild(displayArray[displayArray.length - 1]);
        if (displayValue.charAt(displayValue.length - 1) == ".") {
            decimal = false;
        }
        displayArray.pop();
        displayValue = displayValue.substring(0, displayValue.length - 1);
    }
});
