const arr1 = [10, 5, 36, 84, 41, 95, 500];
const arr2 = [52, 41, 600, 87, 63, 25, 105, 200];

const getMaxNumber = (arr1, arr2) => {
    let max = 1;
    const newArray = [...arr1,...arr2];
    for(const element of newArray) {
        if( element > max) {
            max = element;
        }
    }
    return max;
}
console.log(getMaxNumber(arr1, arr2));