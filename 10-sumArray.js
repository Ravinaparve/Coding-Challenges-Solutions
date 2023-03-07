// Calculate the sum of numbers in an array of numbers

function sumArray(arr) {
  let sum = 0;
  for (let i of arr) {
    sum += i;
  }
  console.log(sum);
}
let arr = [2, 3, -1];
sumArray(arr); //4
