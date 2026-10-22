
let box = document.getElementById("hoverBox");

box.addEventListener("mouseover", function () {
    box.style.backgroundColor = "#bde8d1";
    box.textContent = "The mouse is over the box!";
});

box.addEventListener("mouseout", function () {
    box.style.backgroundColor = "#dbe7fb";
    box.textContent = "Hover over me!";
});


let input = document.getElementById("liveInput");
let output = document.getElementById("liveOutput");

input.addEventListener("keyup", function () {
    output.textContent = input.value;
});


function calculate(operation) {
    let first = document.getElementById("firstNumber").value;
    let second = document.getElementById("secondNumber").value;
    let resultBox = document.getElementById("calculatorResult");

    if (first === "" || second === "") {
        resultBox.textContent = "Enter both numbers";
        return;
    }

    let a = Number(first);
    let b = Number(second);
    let result;

    if (operation === "+") {
        result = a + b;
    } else if (operation === "-") {
        result = a - b;
    } else if (operation === "*") {
        result = a * b;
    } else if (operation === "/") {
        if (b === 0) {
            resultBox.textContent = "Cannot divide by zero";
            return;
        }
        result = a / b;
    }

    resultBox.textContent = result;
}

document.getElementById("addButton").addEventListener("click", function () {
    calculate("+");
});
document.getElementById("subtractButton").addEventListener("click", function () {
    calculate("-");
});
document.getElementById("multiplyButton").addEventListener("click", function () {
    calculate("*");
});
document.getElementById("divideButton").addEventListener("click", function () {
    calculate("/");
});
