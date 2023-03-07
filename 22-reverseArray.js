//method 1:  //not an optimized solution
function reverseArray(arr, n) {
  let first = 0;
  let last = arr.length - 1;

  while (first < last) {
    let temp = arr[first];
    arr[first] = arr[last];
    arr[last] = temp;

    first++;
    last--;
  }
  console.log(arr);
}

//method 2: optimised solution:
function reverseArray(arr) {
  let reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
}
