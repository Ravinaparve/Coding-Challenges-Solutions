//Print the first 10 Fibonacci numbers without recursion

//1 1 2 3 5 8 13...

function firstNFibonacci(num) {
  if (num == 1) return 0;

  if (num == 2) return 1;
  let n1 = 0,
    n2 = 1,
    nextTerm;
  console.log(n1);
  console.log(n2);

  let count = 2;

  while (count < num) {
    nextTerm = n1 + n2;
    console.log(nextTerm);
    count++;
    n1 = n2;
    n2 = nextTerm;
  }
}
firstNFibonacci(6);
