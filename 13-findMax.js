//Find the maximum number in an array of numbers

//Method 1:.........................................................................................
function findMax(arr) {
  let max = -Infinity;
  for (let elem of arr) {
    if (elem > max) {
      max = elem;
    }
  }
  //   return max;
  console.log(max);
}
findMax([4, 7, 6, 9, 1]);

//Method 2: (using Math.max()).........................................................................................

function findMax(arr) {
  console.log(Math.max(...arr));
}
findMax([4, 7, 6, 9, 1]);

//Method 3: (using sort).........................................................................................

function findMax(arr) {
  arr.sort((a, b) => a - b);
  console.log(arr[arr.length - 1]);
}
findMax([4, 7, 6, 9, 1]);

//Method 4: (using reduce).........................................................................................

function findMax(arr) {
  const max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
  console.log(max);
}
findMax([4, 7, 6, 9, 1]);

//Method 5: (using reduce).........................................................................................

function findMax(arr) {
  const max = arr.reduce((acc, elem) => {
    return elem > acc ? elem : acc;
  }, []);
  console.log(max);
}
findMax([4, 7, 6, 9, 1]);
