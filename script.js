}
}

function checkSubtraction() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const sum = parseFloat(document.getElementById('sum').value);

    const resultElement = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2) || isNaN(sum)) {
        resultElement.textContent = "Please enter valid numbers.";
        return;
    }

    const isCorrect = num1 - num2 === sum;

    if (isCorrect) {
        resultElement.textContent = "The subtraction is correct!";
    } else {
        resultElement.textContent = "The subtraction is incorrect!";
    }
}

function checkMultiplication() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const sum = parseFloat(document.getElementById('sum').value);

    const resultElement = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2) || isNaN(sum)) {
        resultElement.textContent = "Please enter valid numbers.";
        return;
    }

    const isCorrect = num1 * num2 === sum;

    if (isCorrect) {
        resultElement.textContent = "The multiplication is correct!";
    } else {
        resultElement.textContent = "The multiplication is incorrect!";
    }
}

function checkDivision() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const sum = parseFloat(document.getElementById('sum').value);

    const resultElement = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2) || isNaN(sum)) {
        resultElement.textContent = "Please enter valid numbers.";
        return;
    }

    const isCorrect = num1 / num2 === sum;

    if (isCorrect) {
        resultElement.textContent = "The division is correct!";
    } else {
        resultElement.textContent = "The division is incorrect!";
    }
}

// Display greeting based on the time of day
const hour = new Date().getHours();
let greeting;

if (hour < 18) {
    greeting = "Good day!";
} else {
    greeting = "Good evening!";
}

document.getElementById("demo1").innerHTML = greeting;
