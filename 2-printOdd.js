// Print the odd numbers less than 100

//Method 1:
function printOdd(nums) {
  for (let i = 1; i <= nums; i += 2) {
    console.log(i);
  }
}
printOdd(10);

//Method 2:
function printOdd(nums) {
  for (let i = 1; i <= nums; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}
printOdd(10);
