const getSum = (num1, num2) => num1 * num2;
console.log(getSum(3,5));

const getAdd = (a, b, c, d) => a + b + c + d;
console.log(getAdd(1, 2, 3, 4));

const getMultiply = num => num * 2;
console.log(getMultiply(20));

const getMath = (a, b, c) => {
    const firstSum = a + b;
    const secondSum = b + c;
    const thirdSum = a + c;
    const multiply = firstSum * secondSum * thirdSum;
    const division = multiply / 2;
    return division;
}
console.log(getMath(1, 2, 3));