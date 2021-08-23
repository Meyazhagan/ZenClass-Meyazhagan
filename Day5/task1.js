// 1. Do the below programs in anonymous function & IIFE
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("a. Print odd numbers in an array");
let findOdd = function (arr) {
  arr.forEach((element) => {
    if (element % 2 !== 0) {
      console.log(element);
    }
  });
};
findOdd(arr);
console.log("b. Convert all the strings to title caps in a string array");
let str = "convert all the strings to title caps in a string array".split(" ");
for (let i = 0; i < str.length; i++) {
  str[i] = str[i][0].toUpperCase() + str[i].slice(1);
}
console.log(str.join(" "));

console.log("c. Sum of all numbers in an array");
(function (arr) {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  console.log(sum);
})(arr);
console.log("d. Return all the prime numbers in an array");
const isPrime = (n) => {
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (let x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
};

const primeNumbers = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!isPrime(arr[i])) {
      continue;
    }
    result.push(arr[i]);
  }
  return result;
};
console.log(primeNumbers([2, 3, 5, 4, 10, 9, 7, 11, 19, 20]));

console.log("e. Return all the palindromes in an array");

function isPalindrome(num) {
  let str = "" + num;
  let len = str.length;
  for (let i = 0; i < +(len / 2, 10); i++) {
    if (str[i] != str[len - 1 - i]) return false;
  }
  return true;
}

function isPalinArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let ans = isPalindrome(arr[i]);
    if (ans) result.push(arr[i]);
  }
  return result;
}

let palindromes = isPalinArray([121, 131, 20]);
console.log(palindromes);

console.log("f. Return median of two sorted arrays of same size");
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
console.log("g. Remove duplicates from an array");

let removeDuplicate = function (arr) {
  let freq = {};
  for (let value of arr) {
    freq[value] = ++freq[value] || 1;
    if (freq[value] > 1) {
      continue;
    }
    console.log(value);
  }
};
removeDuplicate([1, 2, 2, 4, 5, 4]);
console.log("h. Rotate an array by k times");

let rotate = (arr, k) => {
  while (k != 0) {
    arr.push(arr.shift());
    k--;
  }
};

let array = [1, 2, 3, 4, 5, 6, 7];
rotate(array, 2);
console.log(array.join(" "));
