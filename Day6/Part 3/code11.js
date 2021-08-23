// Write a code to replace the array value — If the index is even, replace it with ‘even’.
// Output: [ [“even”, 2, “even”, 4, “even”], [6, “even”, 8, “even”, 10, …] ]
// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var str_all=0;
// for (var i = 0; i < numsArr.length; i++) {
//  var inner_array = numsArr[i];
//  for(var j = 0 ; j < inner_array.length;i++ )
//       if(numsArr[i] %2 == 0 )
//       {
//          numsArr[i] = even
//        }
// }
// console.log(numsArr);
var numsArr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11],
];
var pos = 0;
for (var i = 0; i < numsArr.length; i++) {
  var inner_array = numsArr[i];
  for (var j = 0; j < inner_array.length; j++) {
    if (pos % 2 == 0) {
      inner_array[j] = "even";
    }
    pos++;
  }
}
console.log(numsArr);
