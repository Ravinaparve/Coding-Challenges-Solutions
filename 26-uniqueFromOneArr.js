//Create a function that will receive two arrays...
//..and will return an array with elements that are in the first array but not in the second

var ar1 = [1, 2, 3, 10, 5, 3, 14];
var ar2 = [-1, 4, 5, 6, 14];

//output:  [ 1, 2, 3, 10, 3 ]
//Method 1 : alternative for filter ........................................................................................
function mergeLeft(ar1, ar2) {
  let newArr = [];

  function isInArray(elem, arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == elem) return true;
    }
    return false;
  }

  for (let el of ar1) {
    if (!isInArray(el, ar2)) {
      newArr.push(el);
    }
  }
  return newArr;
}

//Method 2 : using indexOf    ...............................................................................................
function mergeLeft(ar1, ar2) {
  return ar1.filter((elem) => ar2.indexOf(elem) == -1);
}

//Method 3 : using includes()...............................................................................................
function mergeLeft(ar1, ar2) {
  return ar1.filter((elem) => !ar2.includes(elem));
}

//Method 4 : using for..of   ...............................................................................................

function mergeLeft(ar1, ar2) {
  var ar = [];

  for (let el of ar1) {
    if (!ar2.includes(el)) {
      ar.push(el);
    }
  }

  return ar;
}

console.log(mergeLeft(ar1, ar2));
