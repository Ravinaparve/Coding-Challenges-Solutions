//Rotate an array to the left 1 position

function rotateLeftBy1(arr) {
  let first = arr.shift();
  arr.push(first);
  console.log(arr);
}
let arr = [1, 2, 3, 4, 5];
rotateLeftBy1(arr);
