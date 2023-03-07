//Calculate the sum of digits of a positive integer number

function digitSum(n) {
  if (n === "" || n === undefined) return "enter a valid number";
  let str = n.toString();
  let sum = 0;
  for (let char of str) {
    sum += parseInt(char);
  }
  return sum;
}
console.log(digitSum());
