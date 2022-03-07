const fs = require('fs');

function getData() {
    return (fs.readFileSync('PC2input.txt', 'UTF8').split('\n'));
}

const data = getData();

let x = 0;
let y = 0;

for (let i = 0; i < data.length; i++ ) {
    let line = data[i].split(" ");
    let direction = line[0];
    let amount = parseInt(line[1]);
    if (direction == 'forward'){
        x += amount;
    }
    if (direction == 'up'){
        y += amount
    }
    if (direction == 'down'){
        y -= amount
    }
}
console.log(x)
console.log(y)


