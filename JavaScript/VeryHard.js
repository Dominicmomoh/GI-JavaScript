// VERY HARD: Create a simple calculator that prompts the user for a number, an operator 
// (either +, -, * or /) and another number, and then uses the functions created in the hard challenge to output the value 
// in sentence form. Example output: "3 + 4 = 7"

function add(x, y) {
    return x + y;
}


function subtract(x, y) {
    return x - y;
}


function multiply(x, y) {
    return x * y;
}


function divide(x, y) {
    return x / y;
}


var firstInput;
var SecondInput;
var operator;

firstInput = parseInt(prompt("Enter first Number"));
operator = prompt("Enter operator: +, -, /, *")
secondInput = parseInt(prompt("Enter second Number"));

if (operator === "+") {
    console.log(`${firstInput} + ${secondInput} = ${(add(firstInput, secondInput))}`);
} else if (operator === "-") {
    console.log(`${firstInput} - ${secondInput} = ${(subtract(firstInput, secondInput))}`);
} else if (operator === "*") {
    console.log(`${firstInput} * ${secondInput} = ${(multiply(firstInput, secondInput))}`);
} else {
    console.log(`${firstInput} / ${secondInput} = ${(divide(firstInput, secondInput))}`);
}