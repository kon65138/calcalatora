const buttons = document.querySelectorAll('button');
const screen = document.querySelector('.screen');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => buttonPressed(`${buttons[i].textContent}`))
}

let firstNum = '';
let operator = "";
let secondNum = '';
let displayValue = '0';
let current = 1;

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
        return Number(string.slice(1));
    } else {
        return Number('-' + string);
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

function display () {
    displayValue = firstNum + secondNum;
    screen.textContent = displayValue;
}

function buttonPressed (char) {
    if (displayValue.length == 11 && !(char === '+' || char === '-' || char === '*' || char === '/' || char === '%' || char === "+/-" || char === '='|| char === 'AC')) {
        return;
    } else if (displayValue.length > 11 && char != 'AC') return;
    if (char === 'AC') {
        firstNum = '';
        operator = "";
        secondNum = '';
        displayValue = '0';
        current = 1;
        screen.textContent = displayValue;
        return;
    }
    if (displayValue === '0' && !(char === "." || char === '+' || char === '-' || char === '*' || char === '/' || char === '%' || char === "+/-" || char === '=')) {
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
        if ((firstNum.includes(".") && char === ".") || firstNum === '' && (char === '+' || char === '-' || char === '*' || char === '/' || char === '%' || char === "+/-" || char === '=')) return;
        if (char === "=") return;
        if (char === '%' || char === "+/-") {
            operator = char;
            firstNum = (Math.round(operate(firstNum, operator, secondNum) * 100) / 100).toString();
            display();
        } else {
            firstNum += char;
            display();
        }
    } else {
        if ((secondNum.includes(".") && char === ".") || secondNum === '' && (char === '.' || char === '+' || char === '-' || char === '*' || char === '/' || char === '%' || char === "+/-" || char === '=')) return;
        if (char === '+' || char === '-' || char === '*' || char === '/') {
            firstNum = firstNum.slice(0, firstNum.length -1);
            firstNum = (Math.round(operate(firstNum, operator, secondNum) * 100) / 100).toString() + char;
            secondNum = '';
            display();
        } else if (char === '%' || char === "+/-") {
            operator = char;
            secondNum = (Math.round(operate(secondNum, operator) * 100) / 100).toString();
            display();
        } else if (char === '=') {
            firstNum = firstNum.slice(0, firstNum.length -1);
            firstNum = (Math.round(operate(firstNum, operator, secondNum) * 100) / 100).toString();
            secondNum = '';
            display();
        } else {
            secondNum += char;
            display();
        }
        
    }
    

}
