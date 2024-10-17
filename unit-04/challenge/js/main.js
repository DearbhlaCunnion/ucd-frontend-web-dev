function sumOfOddIntegers(N){
    let total_sum = 0
    for (let i = 0; i < N; i++){
        total_sum += 2 * i + 1 
    }
    
    console.log("The sum of the first " + N + "odd integers is:" + total_sum)
}
sumOfOddIntegers(4); 

////////////////

function drawConsolePyramid(height) {
    for (let i = 0; i < height; i++) {
        const spaces = ' '.repeat(height - i - 1);
        const stars = '*'.repeat(2 * i + 1);
        console.log(spaces + stars);
    }
}

drawConsolePyramid(8);

///////////////////
function multiplyArray(numbers) {
    let product = 1;
    for (let i = 0; i < numbers.length; i++) {
        product *= numbers[i];
    }
    return product; 
}

const array = [2, 3, 4];
const result = multiplyArray(array);
console.log(`The product of the array is: ${result}`);

//////////////////////

function randomAverage(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += Math.random(); 
    }
    return sum / n; 
}

console.log(randomAverage(1));
console.log(randomAverage(10));
console.log(randomAverage(100));
console.log(randomAverage(1000));
console.log(randomAverage(10000));
console.log(randomAverage(100000));
console.log(randomAverage(1000000));



