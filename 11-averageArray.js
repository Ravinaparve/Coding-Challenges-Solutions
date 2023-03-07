//Calculate the average of the numbers in an array of numbers

//11-averageArray.js

function averageArray(arr) {
  let sum = 0;

  for (let i of arr) {
    sum += i;
  }
  console.log(sum / arr.length);
}
let arr = [1, 3, 9, 15, 90];

averageArray(arr);
