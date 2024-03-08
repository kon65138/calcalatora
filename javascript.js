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
const screen = document.querySelector('.screen');

let firstNum = '';
let operator = "";
let secondNum = '';
let displayValue = '0';
let current = 1;

btn0.addEventListener("click", () => {buttonPressed('0')}); 
btn1.addEventListener("click", () => {buttonPressed('1')});
btn2.addEventListener("click", () => {buttonPressed('2')});
btn3.addEventListener("click", () => {buttonPressed('3')});
btn4.addEventListener("click", () => {buttonPressed('4')});
btn5.addEventListener("click", () => {buttonPressed('5')});
btn6.addEventListener("click", () => {buttonPressed('6')});
btn7.addEventListener("click", () => {buttonPressed('7')});
btn8.addEventListener("click", () => {buttonPressed('8')});
btn9.addEventListener("click", () => {buttonPressed('9')});
btnDot.addEventListener("click", () => {buttonPressed('.')});
btnEquals.addEventListener("click", () => {buttonPressed('=')});
btnAdd.addEventListener("click", () => {buttonPressed('+')});
btnSubtract.addEventListener("click", () => {buttonPressed('-')});
btnTimes.addEventListener("click", () => {buttonPressed('*')});
btnAC.addEventListener("click", () => {buttonPressed('AC')});
btnPlusMinus.addEventListener("click", () => {buttonPressed('+/-')});
btnPercent.addEventListener("click", () => {buttonPressed('%')});
btnDivide.addEventListener("click", () => {buttonPressed('/')});



function add (num1, num2) {
    return Number(num1) + Number(num2);
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

function percent (string) {
    return string / 100;
}

function posNeg (string) {
    if (string.indexOf('-') === 0) {
        operator = '';
        return string.slice(1);
    } else {
        return '-' + string;
    }
}


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
        case '%':
            return percent(num1);
            break;
        case '+/-':
            return posNeg(num1);
            break;
    };
};

function buttonPressed (char) {
    if (displayValue === '0' && char != ".") {
        displayValue = '';
    } else if (displayValue === '0' && char === '.') {
        firstNum = '0';
    }
    switch (true) {
        case firstNum.includes("+"):
            current = 2;
            operator = "+";
            break;
        case firstNum.includes("-", 1):
            current = 2;
            operator = '-';
            break;
        case firstNum.includes("*"):
            current = 2;
            operator = '*';
            break;
        case firstNum.includes("/"):
            current = 2;
            operator = '/';
            break;
        default:
            current = 1;
            operator = '';
            break;
    }
    if (current === 1) {
        if (char === '%' || char === "+/-") {
            operator = char;
            firstNum = operate(firstNum, operator, secondNum).toFixed(2);
            displayValue = firstNum;
            screen.textContent = displayValue;
        } else {
            firstNum += char;
            displayValue = firstNum;
            screen.textContent = displayValue;
        }
    } else {
        if (char === '+' || char === '-' || char === '*' || char === '/') {
            firstNum = firstNum.slice(0, firstNum.length -1);
            firstNum = operate(firstNum, operator, secondNum).toFixed(2) + char;
            displayValue = firstNum;
            screen.textContent = displayValue;
            secondNum = '';
        } else if (char === '%' || char === "+/-") {
            operator = char;
            secondNum = operate(secondNum, operator).toFixed(2);
            displayValue = firstNum + secondNum;
            screen.textContent = displayValue;
        } else {
            secondNum += char;
            displayValue = firstNum + secondNum;
            screen.textContent = displayValue;
        }
        
    }
    

}

// case '+':
//             let temp = operate(displayValue, '+', char);
//             displayValue = `${temp}`;
//             screen.textContent = `${displayValue}`;
//             break;


// if (displayValue === '0') displayValue = '';
// screen.textContent = `${displayValue}`;
// switch (displayValue.slice(-1)) {
//     case '+':
//         let temp2 = displayValue.match(/'+'/g);
//         if (temp2.length < 2) break;
//         temp2 = 0;
//         let temp = operate(displayValue, '+', char);
//         displayValue = `${temp}`;
//         screen.textContent = `${displayValue}`;
//         break;
//     default:
//         displayValue += char;
//         screen.textContent = `${displayValue}`;
//         break;
// }