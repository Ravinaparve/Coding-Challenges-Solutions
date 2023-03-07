// Print the distance between the first 100 prime numbers
function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return true;
}
function printDistances(n) {
  var lastPrime = 2;
  var i = lastPrime + 1;
  var foundPrimes = 1;

  while (foundPrimes < n) {
    if (isPrime(i)) {
      console.log(i - lastPrime, "\t", i, " - ", lastPrime);

      foundPrimes++;
      lastPrime = i;
    }

    i++;
  }
}
printDistances(10);
// 1        3  -  2
// 2        5  -  3
// 2        7  -  5
// 4        11  -  7
// 2        13  -  11
// 4        17  -  13
// 2        19  -  17
// 4        23  -  19
// 6        29  -  23
