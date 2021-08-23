// Fix the code to disarm the bomb.
// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>
// script.js
let countdown = 100;
while (countdown > 0) {
  if (countdown == 0) {
    console.log("bomb triggered");
  }
  countdown--;
}
