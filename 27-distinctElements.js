//Create a function that will receive an array of numbers as argument and will return a new array with distinct elements

//Method 1:...................................................................................................
function getDistinctElements(arr) {
  let newArr = [];
  for (let el of arr) {
    if (!isInArray(el, newArr)) {
      newArr.push(el);
    }
  }
  return newArr;
}
function isInArray(elem, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elem) return true;
  }
  return false;
}
// let arr = [1, 2, 3, 6, -1, 2, 9, 7, 10, -1, 100];
console.log(getDistinctElements(arr)); //[1, 2, 3, 6, -1, 9, 7, 10, 100];

//Method 2: (using filter & indexOf)............................................................................

function getDistinctElements(arr) {
  return arr.filter((el, index) => arr.indexOf(el) == index); //[1, 2, 3, 6, -1, 9, 7, 10, 100];
}

//Method 3: ()......................................................................................
function getDistinctElements(ar) {
  let newArr = [];

  let lastIndex = ar.length - 1;

  for (let i = 0; i <= lastIndex; i++) {
    if (!isInArray(ar[i], ar, i + 1, lastIndex)) {
      newArr.push(ar[i]);
    }
  }
  return newArr;
}

function isInArray(n, ar, fromIndex, toIndex) {
  for (let i = fromIndex; i <= toIndex; i++) {
    if (ar[i] === n) return true;
  }

  return false;
}
let arr = [1, 2, 3, 6, -1, 2, 9, 7, 10, -1, 100];
console.log(getDistinctElements(arr)); //[1, 3, 6, 2, 9, 7, 10, -1, 100];
