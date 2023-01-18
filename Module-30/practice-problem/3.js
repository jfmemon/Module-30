const arr = [2, 5, 20, 14, 36];
const getAverage = (arr) => {
    let sum = 0;
    let avg;
    let length = arr.length;
    for (const element of arr) {
        const squared = Math.pow(element, 2);
        sum = sum + squared;
        avg = sum / length;
    }
    return avg;
}
console.log(getAverage(arr));