let firstNumber = "";
let operator = "";
let secondNumber = "";
let resetDisplay = false;

const display=document.getElementById("display");
function addNumber(number) {
    if (resetDisplay) {
        display.value = "";
    }
    display.value += number;
}

function chooseOperator(selectedOperator) {
    if (display.value === "" || operator !== "") {
        return;
    }
    firstNumber = Number(display.value);
    operator = selectedOperator;
    resetDisplay = true;
}

function calculate() {
    if (operator === "" || display.value === "") {
        return;
    }
    let secondNumber = Number(display.value);
    let result;

    if (operator === "+") {
        result = firstNumber + secondNumber;
    } else if (operator === "-") {
        result = firstNumber - secondNumber;
    } else if (operator === "*") {
        result = firstNumber * secondNumber;
    } else if (operator === "/") {
        if (secondNumber === 0) {
            display.value = "Error";
            operator = "";
            resetDisplay = true;
            return;
        }
        result = firstNumber / secondNumber;
    }
    display.value = result;
    operator = "";
    resetDisplay = true;
}