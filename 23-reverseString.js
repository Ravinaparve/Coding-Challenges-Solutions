// method1
// function reverseStr(str) {
//   let reversedStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedStr += str[i];
//   }
//   console.log(reversedStr);
// }
reverseStr("Hello");

// method2:

function reverseStr(str) {
  let newStr = str.split("").reverse().join("");
  console.log(newStr);
  //split() returns new array
  // reverse the new created array
  //join all elements of the array into a string
}

//method 3 :

//The substr() method returns the characters in a string beginning at the specified location through the specified number of characters.
//The charAt() method returns the specified character from a string.
//This solution is not the best one and will be really slow if the String is very long and the stack size is of major concern.
function reverseString(str) {
  if (str === "") return "";
  else return reverseString(str.substr(1)) + str.charAt(0);
}
reverseString("hello");
