// function in normal or declaration
function getSum (num1, num2) {
    const sum = num1 + num2;
    return sum;
}

// console.log(getSum(10, 20)); ei kajta onno vabeo kora jay
const result = getSum(10, 20);
console.log(result); 


// function in expression method
const getSumValue = function getSumValue(num1, num2) {
    const sum = num1 + num2;
    return sum;
}

// another way of function in expression method

// const getSumValue = function (num1, num2) {
//     const sum = num1 + num2;
//     return sum;
// }
 
console.log(getSumValue(5,5));


// function in arrow method
const getAddValue = (num1, num2) => num1 + num2;
console.log(getAddValue(10,5));