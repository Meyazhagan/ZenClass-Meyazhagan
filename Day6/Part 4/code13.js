// Fix the code to give the below output:
// Sum of odd numbers in an array
// Code:

// var as=[12,34,5,6,2,56,6,2,1];
// var s=as.reduce(function(a,c){
//  if(c%2!=0)
//  {
//  return a+c;
//  }
//  return a;});
// console.log(s);
var as = [12, 34, 5, 6, 2, 56, 6, 2, 1];
var s = as.reduce(function (a, c) {
  if (c % 2 != 0) {
    return a + c;
  }
  return a;
}, 0);
console.log(s);
