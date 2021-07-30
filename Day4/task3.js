// Task 3: Simple Programs todo for Condition , Looping and Arrays
// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######
let n = 7;
let str = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    str += "#";
  }
  str += "\n";
}
console.log(str);
// 2. Iterate through the string array and print it contents
console.log("Iterate through the string array and print it contents");
var strArray = [
  "<option>Jazz</option>",
  "<option>Blues</option>",
  "<option>New Age</option>",
  "<option>Classical</option>",
  "<option>Opera</option>",
];
strArray.forEach((element) => {
  console.log(element);
});
// Arrays:
// write a code to count the elements in the array . Don’t use length property
console.log(
  "write a code to count the elements in the array . Don’t use length property"
);
var myarray = [11, 22, 33, 44, 55];
let count = 0;
myarray.forEach(() => count++);
console.log(count);
// Declare an empty array;
let emptyArray = [];
// Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.
let foods = [
  "Cabbage",
  "cake",
  "carrots",
  "carne asada",
  "celery",
  "cheese",
  "chicken",
  "catfish",
  "chips",
  "chocolate",
  "chowder",
  "clams",
  "coffee",
  "cookies",
  "corn",
  "cupcakes",
  "crab",
  "curry",
  "cereal",
  "chimichanga",
];
// Foods variable holds the names of your top 20 favorite foods, starting with the best food. How can you find your fifth favorite food?
console.log("find your fifth favorite food", foods[4]);
// Find the length of your foods array
console.log("the length of your foods array", foods.length);
// Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”.
let friends = [
  "Mari",
  "MaryJane",
  "CaptianAmerica",
  "Munnabai",
  "Jeff",
  "AAK chandran",
];
function dataHandling(input) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] === "Mari") {
      input[i] = "Munnabai";
    }
  }
}
dataHandling(friends);
console.log("“Mari” to “Munnabai”-", friends.toString());
// — — — — — — — — — — — — — — — -
// Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.
const friends2 = [
  "Mari",
  "MaryJane",
  "CaptianAmerica",
  "Munnabai",
  "Jeff",
  "AAK chandran",
];
console.log("Print the names till you meet CaptianAmerica.");
function dataHandling2(input) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] === "CaptianAmerica") {
      break;
    }
    console.log(input[i]);
  }
}
dataHandling2(friends2);
// — — — — — — — — — — — — — — — -
// Find the person is ur friend or not.
// const friends = [
// “Mari”,
// “MaryJane”,
// “CaptianAmerica”,
// “Munnabai”,
// “Jeff”,
// “AAK chandran”
// ];
function dataHandling(input, name) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] === name) {
      return true;
    }
    return false;
  }
}
let found = dataHandling(friends2, "Jeff");
console.log(found);
// — — — — — — — — — — — — — — — -
// We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.
let friend1 = [
  "Mari",
  "MaryJane",
  "CaptianAmerica",
  "Munnabai",
  "Jeff",
  "AAK chandran",
];
let friend2 = ["Gabbar", "Rajinikanth", "Mass", "Spiderman", "Jeff", "ET"];

console.log(friend1.concat(friend2).sort().join(","));
// — — — — — — — — — — — — — — — -
// Get the first item, the middle item and the last item of the array
let array = [1, 2, 3, 4, 5];
let len = array.length;
console.log(array[0], array[Math.floor(len / 2)], array[len - 1]);
let friend = [
  "Mari",
  "MaryJane",
  "CaptianAmerica",
  "Munnabai",
  "Jeff",
  "AAK chandran",
];
// 2. Add your name to the end of the friends array, and add another name to beginning.
friend.unshift("At front");
friend.push("end");
console.log(friend.toString());

// 3. Add Mr or Ms to the names in the friends array.
for (let i = 0; i < friend.length; i++) {
  friend[i] = "Mr " + friend[i];
}
// 4. Concat all the names the friends array and return as comma “," seperated string.
console.log(friend.join(","));
// 5. Find the friends names who has letter ‘a’ and return the list.
for (let i = 0; i < friend.length; i++) {
  //for case insensitive - /a/i
  if (friend[i].search(/a|A/) !== -1) console.log(friend[i]);
}
// 6. Find the avg length of all the friends names. Get the individual length of the names and do the avg.
let total = 0;
for (let i = 0; i < friend.length; i++) {
  total += friend[i].length;
}
let avg = total / friend.length;
console.log(Math.floor(avg));
// 7. Find the names and return the list starting with letter M.
console.log("7. Find the names and return the list starting with letter M.");
for (let i = 0; i < friend.length; i++) {
  if (friend[i][3] === "M") {
    console.log(friend[i]);
  }
}
// 8. Find the name with max characters and return the name.
console.log("8. Find the name with max characters and return the name.");
let max = "";
for (let i = 0; i < friend.length; i++) {
  if (max.length < friend[i].length) {
    max = friend[i];
  }
}
console.log(max);
// 9. Find the name with min characters and return the name.
console.log("9. Find the name with min characters and return the name.");
let min = "";
let leng = Number.MAX_VALUE;
for (let i = 0; i < friend.length; i++) {
  if (leng > friend[i].length) {
    min = friend[i];
    leng = min.length;
  }
}
console.log(min);
// — — — — — — — — — — — — — — — -
// Find the average in the array below.
// Make sure you add only the numbers and do avg.
console.log("Find the average in the array below.");
const friendsInfo = [
  6,
  12,
  "Mari",
  1,
  true,
  "Munnabai",
  "200",
  "CaptianAmerica",
  8,
  10,
];
let sum = 0;
friendsInfo.forEach((element) => {
  if (typeof element === "number") {
    sum += element;
  }
});
console.log(sum / friendsInfo.length);
// — — — — — — — — — — — — — — — -
// Print the contents of the input variable
console.log("Print the contents of the input variable");
var input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
];
function dataHandling3(input) {
  for (var i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      console.log(input[i][j]);
    }
  }
}
dataHandling3(input);
// — — — — — — — — — — — — — — — -
// Objects:
// What the output
console.log("What the output");
myobject = { 1: "one", 11: 1, name: "arun" };
console.log(myobject[11]);
console.log(myobject.name);
// Add a new key value pair to myobject
// key : ten
// value : ten
// //your code goes here
console.log("Add a new key value pair to myobject");
myobject["ten"] = "ten";
console.log(Object.keys(myobject).toString());
// {"1":"one","11":1,"name":"arun","ten":"ten"} // Quotes might not get displayed that fine.
