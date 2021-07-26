// Task 2: Simple Programs todo for Operators
// 1. Square of a number
(function (a) {
  console.log("square of", a, "is", a * a);
})(4);

// 2. Swapping 2 numbers
var a = 10,
  b = 5;
var swap = function () {
  let temp = a;
  a = b;
  b = temp;
};
console.log("before swapping", a, b);
swap();
console.log("after swapping", a, b);

// 3. Addition of 3 numbers
var sum3 = function (a, b, c) {
  return a + b + c;
};
console.log("adding of 3 num", sum3(1, 2, 3));

// 4. Celsius to Fahrenheit conversion
var CtoF = function (celsius) {
  return (celsius * 9) / 5 + 32 + " F";
};
console.log("Celsius to Fahrenheit conversion - 36 C-", CtoF(36));
// 5. Meter to miles
var meterToMiles = function (meter) {
  return meter * 0.00062137 + " miles";
};
console.log("Meter to miles 2000m -", meterToMiles(2000));

// 6. Pounds to kg
var poundsToKg = function (pounds) {
  return pounds / 2.2046;
};
console.log("Pounds to kg 2 lbs -", poundsToKg(2).toFixed(3), "kg");
// 7. Calculate Batting Average
// 8. Calculate five test scores and print their average
var average = function (scores) {
  let sum = 0;
  for (let run of scores) {
    sum += run;
  }
  return sum / scores.length;
};
console.log("Calculate Batting Average", average([1, 2, 3, 5, 2]).toFixed(3));

// 9. Power of any number x ^ y.
var pow = function (base, power) {
  return base ** power;
};
console.log("Power of any number 2 ^ 4", pow(2, 4));

// 10. Calculate Simple Interest
var SI = function (p, r, t) {
  return (p * r * t) / 100;
};
console.log("Calculate Simple Interest p-1000, r-5%, t-3", SI(1000, 5, 3));

// 11. Calculate area of an equilateral triangle
var areaEquilateralTri = function (a) {
  return (Math.sqrt(3) / 4) * a ** 2;
};
console.log(
  "Calculate area of an equilateral triangle a = 2",
  areaEquilateralTri(2).toFixed(5)
);
// 12. Area Of Isosceles Triangle
// 15. Find area of a triangle.
var areaTriangle = function (b, h) {
  return (b * h) / 2;
};
console.log("Area Of Triangle", areaTriangle(5, 10));
// 13. Volume Of Sphere
var volumeOfSphere = function (r) {
  return (4 / 3) * Math.PI * r ** 3;
};
console.log("volume of sphere", volumeOfSphere(5).toFixed(5));
// 14. Volume Of Prism
var volumeOFPrism = function (l, b, h) {
  return l * b * h;
};
console.log("Volume Of Prism", volumeOFPrism(7, 9, 13));

// 16. Give the Actual cost and Sold cost, Calculate Discount Of Product
var calcDiscount = function (actual, sold) {
  return ((actual - sold) * 100) / actual;
};
console.log("Calculate Discount Of Product", calcDiscount(1000, 800));

// 17. Given their radius of a circle and find its diameter, circumference and area.
var diameter = function (r) {
  return 2 * r;
};
var circumference = function (r) {
  return Math.PI * r;
};
var area = function (r) {
  return Math.PI * r * r;
};
console.log(
  "find its diameter, circumference and area for radius of circle 5 -",
  diameter(5),
  circumference(5).toFixed(3),
  area(5).toFixed(3)
);

// 18. Given two numbers and perform all arithmetic operations.
(function (a, b) {
  console.log("+", a + b);
  console.log("-", a - b);
  console.log("*", a * b);
  console.log("/", a / b);
})(10, 5);

// 19. Display the asterisk pattern as shown below(No loop needed):
// *****
// *****
// *****
// *****
// *****
console.log("*****");
console.log("*****");
console.log("*****");
console.log("*****");
console.log("*****");

// 20. Calculate electricity bill?
// For example, a consumer consumes 100 watts per hour daily for one month.
//Calculate the total energy bill of that consumer if per unit rate is 10?
var calcElectricityBill = function (wph) {
  return ((wph * 24 * 28) / 1000) * 10;
};
console.log(calcElectricityBill(100));
// 21. Program To Calculate CGPA
var cgpa = function (marks) {
  var total = 0;
  for (let mark of marks) {
    total += mark;
  }
  return total / marks.length;
};
console.log("Calculate CGPA", cgpa([8, 9, 7, 9, 8]).toFixed(1));
