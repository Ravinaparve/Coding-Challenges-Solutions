// Create a function that receives an array of numbers and returns an array containing only the positive numbers
//Method 1
function getPositives(arr) {
  let newArr = [];
  for (let i of arr) {
    if (i >= 0) newArr.push(i);
  }
  console.log(newArr);
}

//Method 2
function getPositives(arr) {
  return arr.filter((item) => item >= 0);
}
var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
getPositives(arr);
