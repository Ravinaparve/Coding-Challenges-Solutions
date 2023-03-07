//Print the first 100 prime numbers
function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return true;
}

function printPrime(number) {
  let count = 1;
  let i = 2;

  while (count <= number) {
    if (isPrime(i)) {
      console.log(count, " ==> ", i);
      count++;
    }
    i++;
  }
}
printPrime(10);
// 1 --> 2
// 2 --> 3
// 3 --> 5
// 4 --> 7
// 5 --> 11
// 6 --> 13
// 7 --> 17
// 8 --> 19
// 9 --> 23
// 10 --> 29
