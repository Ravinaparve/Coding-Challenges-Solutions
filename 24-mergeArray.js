//Create a function that will merge two arrays and return the result as a new array
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];

// Method 1 : Spread Syntax .....................................................................................................
function mergeArrays(ar1, ar2) {
  return [...ar1, ...ar2];
}

// Method 2 : Concat method .....................................................................................................
function mergeArrays(ar1, ar2) {
  return ar1.concat(ar2);
}

// Method 3 : for..of method .....................................................................................................
function mergeArrays(ar1, ar2) {
  let newArr = [];
  for (let elem of ar1) {
    newArr.push(elem);
  }
  for (let elem of ar2) {
    newArr.push(elem);
  }
  return newArr;
}

console.log(mergeArrays(ar1, ar2)); // [ 1, 2, 3, 4, 5, 6 ]
