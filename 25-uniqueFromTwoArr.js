//Create a function that will receive two arrays of numbers as arguments
//and return an array composed of all the numbers that are either in the first array or second array but not in both
let ar1 = [1, 2, 3, 10, 5, 3, 14];
let ar2 = [1, 4, 5, 6, 14];
// o/p : [ 2, 3, 10, 3, 4, 6 ]

//Method 1:..........................................................................................................
// function mergeExclusive(ar1, ar2) {
//   let ar = [];

//   for (let el of ar1) {
//     if (!ar2.includes(el)) {
//       ar.push(el);
//     }
//   }

//   for (let el of ar2) {
//     if (!ar1.includes(el)) {
//       ar.push(el);
//     }
//   }

//   return ar;
// }

//Method 2:..........................................................................................................
// function mergeExclusive(ar1, ar2) {
//   let temp1 = ar1.filter((elem) => ar2.indexOf(elem) == -1);
//   let temp2 = ar2.filter((elem) => ar1.indexOf(elem) == -1);

//   return temp1.concat(temp2);
// }

//Method 3...............................................................................................................
// let ar1 = [1, 2, 3, 10, 5, 3, 14];
// let ar2 = [1, 4, 5, 6, 14];
// o/p : [ 2, 3, 10, 3, 4, 6 ]
function isInArray(elem, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == elem) return true;
  }
  return false;
}
function mergeExclusive(ar1, ar2) {
  let newArr = [];
  for (let elem of ar1) {
    if (!isInArray(elem, ar2)) {
      newArr.push(elem);
    }
  }
  for (let elem of ar2) {
    if (!isInArray(elem, ar1)) {
      newArr.push(elem);
    }
  }
  return newArr;
}
console.log(mergeExclusive(ar1, ar2)); // o/p : [ 2, 3, 10, 3, 4, 6 ]
