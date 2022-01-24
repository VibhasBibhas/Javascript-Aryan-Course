
let prompt = require('prompt-sync')();

const number1 = prompt ('What is your first number?')

const number2 = prompt ('What is your operation? (+,-,*,/)')

const number3 = prompt ('What is your second number?')

switch(number2) {
    case "+":
        console.log(Number(number1)+Number(number3));
        break;
    case "-":
        console.log(number1-number3);
        break;
    case "*":
        console.log(number1*number3)
        break;
    case "/":
        console.log(number1/number3);
        break;     
}


