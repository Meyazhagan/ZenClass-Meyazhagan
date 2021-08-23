// How to get the correct score in console.
// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>
// script.js
let value = prompt("How many runs you scored in this ball");
if (value === "4") {
  console.log("You hit a Four");
} else if (value === "6") {
  console.log("You hit a Six");
} else {
  console.log("I couldn't figure out");
}
