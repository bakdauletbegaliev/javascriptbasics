// Task 0: First script
let studentName = "Begaliev Bakdaulet"; // string
let studentGroup = "SE2526";          // string
let assignmentNumber = 5;           // number
let learningJS = true;                // boolean

console.log("Student: " + studentName);
console.log("Group: " + studentGroup);
alert("Hello, JavaScript World!");

document.getElementById("helloButton").addEventListener("click", function () {
    alert("Hello, JavaScript World!");
});

// Task 1: Variables and operators
function showVariables() {
    let a = 12;
    let b = 4;

    console.log("Assignment: " + assignmentNumber);
    console.log("Learning JavaScript: " + learningJS);
    console.log("12 + 4 = " + (a + b));
    console.log("12 - 4 = " + (a - b));
    console.log("12 * 4 = " + (a * b));
    console.log("12 / 4 = " + (a / b));
    console.log("Hello, " + studentName + " from " + studentGroup);

    document.getElementById("variablesResult").innerHTML =
        "12 + 4 = " + (a + b) + "<br>" +
        "12 - 4 = " + (a - b) + "<br>" +
        "12 × 4 = " + (a * b) + "<br>" +
        "12 ÷ 4 = " + (a / b) + "<br>" +
        "Hello, " + studentName + " from " + studentGroup;
}

document.getElementById("runVariables").addEventListener("click", showVariables);
