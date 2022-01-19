
let prompt = require('prompt-sync')();

const number1 = prompt ('What is your first number?')

const number2 = prompt ('What is your operation? (+,-,*,/)')

const number3 = prompt ('What is your second number?')

switch(number2) {
    case "+":
        console.log("addition");
        break;
    case "-":
        console.log("subtraction");
        break;
    case "*":
        console.log("multiplication")
        break;
    case "/":
        console.log("division");
        break;     
}


