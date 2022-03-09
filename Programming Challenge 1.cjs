const fs = require('fs');

function getData() {
    return (fs.readFileSync('PC1input.txt', 'UTF8'));
}
let jumps = 0;
let jumpSize = null;

const data = getData()
const numbers = data.split("\n")
function lift() {

    for (let i = 0; i < numbers.length; i++) {
        if (parseInt(numbers[i]) < parseInt(numbers[i + 1])) {
            jumps++;
        }
    }
}
function maxJump() {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i + 1] - numbers[i] > jumpSize) {
            jumpSize = numbers[i + 1] - numbers[i];

        }
    }
}
lift();
console.log("There are a total of", jumps, "jumps");
maxJump();
console.log("The biggest jump was", jumpSize);