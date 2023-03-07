//Print the multiplication table with 7

function printTable(num) {
  for (let i = 1; i <= 12; i++) {
    let mul = i * num;
    console.log(`${num}x${i}=${mul}`);
  }
}
printTable(7);
