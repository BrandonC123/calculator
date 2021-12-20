function add (num1, num2) {
    return num1 + num2;
}

function sub (num1, num2) {
    return num1 - num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    return num1 / num2;
}

function operate (num1, num2) {
    divide(num1 / num2);
}

const numbers = document.querySelectorAll('.num-btn');
const display = document.querySelector('#display');
let displayValue = '';

numbers.forEach((btn) => {
    btn.addEventListener('click', () =>{
        const num = document.createElement('div');
        num.textContent = btn.textContent;
        displayValue += num.textContent;
        display.appendChild(num);
        console.log(displayValue)
    });
});