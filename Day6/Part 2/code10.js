// Fix the code to welcome the Employee
// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>
// script.js
// let login = 'Employee';
// let message = (login == 'Employee') ? :
//   (login == 'Director')
//      ? 'Greetings' :
//   (login == '') ? 'No login' :
//   '';
// console.log(message);
let login = "Employee";
let message =
  login == "Employee"
    ? "welcome Employee"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : "";
console.log(message);
