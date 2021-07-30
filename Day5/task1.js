// 1. Do the below programs in anonymous function & IIFE
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     a. Print odd numbers in an array
let findOdd = function (arr) {
  arr.forEach((element) => {
    if (element % 2 !== 0) {
      console.log(element);
    }
  });
};
findOdd(arr);
//     b. Convert all the strings to title caps in a string array
let str = "convert all the strings to title caps in a string array".split(" ");
for (let i = 0; i < str.length; i++) {
  str[i] = str[i][0].toUpperCase() + str[i].slice(1);
}
console.log(str.join(" "));
//     c. Sum of all numbers in an array
(function (arr) {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  console.log(sum);
})(arr);
//     d. Return all the prime numbers in an array

//     e. Return all the palindromes in an array

//     f. Return median of two sorted arrays of same size
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
findMedianSortedArrays = function (nums1, nums2) {
  let n = nums1.length;
  let m = nums2.length;
  let mid = (n + m) / 2;
  let i = 0,
    j = 0;
  let before = 0,
    after = 0;
  while (i + j - 1 !== mid && i < n && j < m) {
    before = after;
    if (nums1[i] < nums2[j]) {
      after = nums1[i++];
    } else {
      after = nums2[j++];
    }
  }
  while (i + j - 1 !== mid && i < n) {
    before = after;
    after = nums1[i++];
  }
  while (i + j - 1 !== mid && j < m) {
    before = after;
    after = nums2[j++];
  }
  if ((n + m) % 2 === 0) {
    return (after + before) / 2;
  } else {
    return after;
  }
};
let median = findMedianSortedArrays(arr1, arr2);
console.log(median);
//     g. Remove duplicates from an array

//     h. Rotate an array by k times
