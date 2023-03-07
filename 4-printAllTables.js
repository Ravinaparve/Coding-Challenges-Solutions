//4-printAllTables.js
//Print all the multiplication tables with numbers from 1 to 10
function printTable(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} * ${i} =${n * i}`);
  }
}

function printUpTo(number) {
  for (let i = 1; i <= number; i++) {
    console.log(`Table of ${i}`);
    printTable(i);
  }
}
printUpTo(2);
