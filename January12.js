function myFunc(min, max){
    
    const output = Math.floor(Math.random() * (max - min)) + min;
    return output;
}
// const rand = Math.random()
// const min = 0
// const max = 10000000000000
// const ourRandomNum = Math.floor(rand * (max - min)) + min
// console.log(ourRandomNum)
console.log(myFunc(0, 2000000000))