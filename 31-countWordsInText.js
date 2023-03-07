//Create a function that will return the number of words in a text

function countWords(text) {
  let separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];

  let str = text.split("");

  str = str.filter((char) => separators.includes(char));
  console.log(str);
  console.log(str.length);
}
countWords("JavaScript!!!   ");

// ..............................................................................................................................

// function countWords(text) {
//   var wasSeparator = true;
//   var words = 0;

//   for (var c of text) {
//     // if current character is separator then advance and
//     // set that the previous character was separator
//     if (isSeparator(c)) {
//       wasSeparator = true;
//       continue;
//     }

//     // if current character is not separator
//     // ... but if previous was separator...
//     if (wasSeparator) {
//       words++;
//       wasSeparator = false;
//     }
//   }

//   return words;
// }

// function isSeparator(c) {
//   var separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];
//   return separators.includes(c);
// }

// console.log(countWords("")); //0
// console.log(countWords("            ")); //0
// console.log(countWords("JavaScript!!!   ")); //1
// console.log(countWords("     JavaScript")); //1
// console.log(countWords("    JavaScript is cool      ")); //3
console.log(countWords("I like to learn JavaScript with codeguppy")); //7
