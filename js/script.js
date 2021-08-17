// fetch("https://restcountries.eu/rest/v2/all")
//   .then((resp) => {
//     return resp.json();
//   })
//   .then((result) => {
//     console.log(result);
//     // result.forEach(({ name, region, flag }) => {
//     //   console.log(name, region, flag);
//     // });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

``;
let ar = [1, 2, 3, 4, 5];

let arr = [
  {
    name: "Butters",
    age: 3,
    type: "dog",
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog",
  },
  {
    name: "Red",
    age: 1,
    type: "cat",
  },
  {
    name: "Joey",
    age: 3,
    type: "dog",
  },
];

let filtered = arr.filter((element) => element.type === "dog");
let mapped = filtered.map((element) => element.age * 5);
let reduced = mapped.reduce((prev, curr) => {
  return prev + curr;
});

console.log(filtered, mapped, reduced);
