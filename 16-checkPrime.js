//Create a function that will return a Boolean specifying if a number is prime

// function checkPrime(n){
//     // program to check if a number is prime or not
// // check if number is equal to 1
// let isPrime = true;
// if (n === 1)  console.log("1 is neither prime nor composite number.");

// // check if number is greater than 1
// else if (n > 1) {

//     // looping through 2 to n-1
//     for (let i = 2; i < n; i++) {
//         if (n % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     isPrime ? console.log(`${n} is a prime number`) : console.log(`${n} is a not prime number`);
// }

// // check if n is less than 1
// else console.log("The number is not a prime number.");

// }

function checkPrime(n) {
  const isPrime = (n) => {
    if (n < 2) return false;
    if (n === 2) return true;

    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {
        return false;
      }
    }
    return true;
  };

  return isPrime(n)
    ? console.log("is a prime number")
    : console.log("not a prime number");
}
console.log(checkPrime(5));
