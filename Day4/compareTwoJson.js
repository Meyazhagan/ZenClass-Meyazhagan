// 1. How to compare two JSON have the same properties without order?
//     a. var obj1 = { name: "Person 1", age:5 };
//     b. var obj2 = { age:5, name: "Person 1" };

var obj1 = { name: "Person 1", age: 5 };
var obj2 = { age: 5, name: "Person 1" };

console.log(isEqual(obj1, obj2));

function isEqual(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}
