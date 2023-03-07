// Create a function that will find the nth Fibonacci number using recursion

function findFibonacci(n) {
  if (n == 0) return 0;

  if (n == 1) return 1;

  return findFibonacci(n - 1) + findFibonacci(n - 2);
}

var n = findFibonacci(1);
console.log(n);
