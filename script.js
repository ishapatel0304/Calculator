let display = document.getElementById('display');
let currentOperand = '';
let previousOperand = '';
let operator = null;

function appendNumber(number) {
    currentOperand += number;
    updateDisplay();
}

function chooseOperator(selectedOperator) {
    if (currentOperand === '') return;
    if (previousOperand !== '') calculate();
    operator = selectedOperator;
    previousOperand = currentOperand;
    currentOperand = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    currentOperand = result.toString();
    operator = null;
    previousOperand = '';
    updateDisplay();
}

function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    operator = null;
    updateDisplay();
}

function updateDisplay() {
    display.innerText = currentOperand || '0'; // Default to '0' when the display is empty
}
