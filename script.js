function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
}

function myFunction() {
    document.getElementById("demo").innerHTML = Date();
}

function checkOperation(id, operator) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = parseFloat(document.getElementById(id).value);
    const resultElement = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2) || isNaN(result)) {
        resultElement.textContent = "Please enter valid numbers.";
        return;
    }

    let operationResult;
    switch (operator) {
        case '+':
            operationResult = num1 + num2;
            break;
        case '-':
            operationResult = num1 - num2;
            break;
        case '*':
            operationResult = num1 * num2;
            break;
        case '/':
            operationResult = num1 / num2;
            break;
        default:
            resultElement.textContent = "Invalid operator";
            return;
    }

    if (operationResult === result) {
        resultElement.textContent = "The operation is correct!";
    } else {
        resultElement.textContent = "The operation is incorrect!";
    }
}
