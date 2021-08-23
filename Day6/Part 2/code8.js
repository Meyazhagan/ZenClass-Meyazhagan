// How to get the success in console.
// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>
// script.js
let a = prompt("Enter a number?"); // if there is no input 'a' becomes empty string.
// "" is equivalen to false.
// "0" is also equivalent to true.
// when a = ""  else block will execute.
//Don't modify any code below this
if (a) {
  console.log("OMG it works for any number inc 0");
} else {
  console.log("Success");
}
