const fs = require('fs');

function getData() {
    return (fs.readFileSync('PC3input.txt', 'UTF8').split('\n'));
}

const data = getData();

let ones = [0,0,0,0,0,0,0,0,0,0,0,0];
let zeros = [0,0,0,0,0,0,0,0,0,0,0,0];

let gamma = "";
let epsilon = "";

for (let i = 0; i < data.length; i++ ) {
    let number = data[i];
    
    for (let column = 0; column < 12; column++ ){
        if (number[column] == 1){
            ones[column]++
        }
        else {
            zeros[column]++
        }
    }
}
for (let column = 0; column < 12; column++){
    if (ones[column] > zeros[column]){
        gamma += '1';
        epsilon += '0';
        
    }
    else { 
        gamma += '0';
        epsilon += '1';

    }
}



console.log(gamma);
console.log(epsilon);



