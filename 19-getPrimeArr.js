// Create a function that will return in an array the first "nPrimes" prime numbers greater than a particular number "startAt"
function isPrime(n) {
  if (n < 2) return false;
  if (n == 2) return true;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

function getPrimes(nPrimes, startAt) {
  let primeArr = [];
  let i = startAt;
  while (primeArr.length < nPrimes) {
    if (isPrime(i)) {
      primeArr.push(i);
    }
    i++;
  }
  console.log(primeArr);
}
getPrimes(5, 10); //[11, 13, 17, 19, 23]
