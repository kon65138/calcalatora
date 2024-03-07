const btn0 = document.querySelector('.r5b1');
const btnDot = document.querySelector('.r5b2');
const btnEquals = document.querySelector('.r5b3');
const btn1 = document.querySelector('.r4b1');
const btn2 = document.querySelector('.r4b2');
const btn3 = document.querySelector('.r4b3');
const btnAdd = document.querySelector('.r4b4');
const btn4 = document.querySelector('.r3b1');
const btn5 = document.querySelector('.r3b2');
const btn6 = document.querySelector('.r3b3');
const btnSubtract = document.querySelector('.r3b4');
const btn7 = document.querySelector('.r2b1');
const btn8 = document.querySelector('.r2b2');
const btn9 = document.querySelector('.r2b3');
const btnTimes = document.querySelector('.r2b4');
const btnAC = document.querySelector('.r1b1');
const btnPlusMinus = document.querySelector('.r1b2');
const btnPercent = document.querySelector('.r1b3');
const btnDivide = document.querySelector('.r1b4');

btn0.addEventListener("click", () => {displayValue += 0});
btn1.addEventListener("click", () => {displayValue += 1});
btn2.addEventListener("click", () => {displayValue += 2});
btn3.addEventListener("click", () => {displayValue += 3});
btn4.addEventListener("click", () => {displayValue += 4});
btn5.addEventListener("click", () => {displayValue += 5});
btn6.addEventListener("click", () => {displayValue += 6});
btn7.addEventListener("click", () => {displayValue += 7});
btn8.addEventListener("click", () => {displayValue += 8});
btn9.addEventListener("click", () => {displayValue += 9});


function add (num1, num2) {
    return num1 + num2;
};

function subtract (num1, num2) {
    return num1 - num2;
};

function multiply (num1, num2) {
    return num1 * num2;
};

function divide (num1, num2) {
    return num1 / num2;
};

let firstNum = 0;
let operator;
let secondNum = 0;
let displayValue = 0;

function operate (num1, curOperator, num2) {
    switch (curOperator) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
    };
};