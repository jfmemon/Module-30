const arr = [4, 5, 6];
const newArr = [1, 2, 3, ...arr, 7, 8, 9];
arr.push(10);
newArr.push(10);



console.log(arr);
console.log(newArr);