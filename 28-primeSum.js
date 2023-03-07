// Calculate the sum of first 100 prime numbers
function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return true;
}

function printPrimeSum(number) {
  let sum = 0;
  let count = 1;
  let i = 2;

  while (count <= number) {
    if (isPrime(i)) {
      sum += i;
      count++;
    }
    i++;
  }
  console.log("Sum of first ", number, " primes is ", sum);
}
printPrimeSum(10);
