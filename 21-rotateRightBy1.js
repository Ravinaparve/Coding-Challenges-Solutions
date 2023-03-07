function rotateRightBy1(arr) {
  let last = arr.pop();
  arr.unshift(last);
  console.log(arr);
}

let arr = [1, 2, 3, 4, 5];
rotateRightBy1(arr);
