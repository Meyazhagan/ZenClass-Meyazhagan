// 3. Write a “person” class to hold all the details.

class Person {
  constructor(firstName, lastName, age, contactNo, emailID) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.contactNo = contactNo;
    this.emailID = emailID;
  }
}

let person = new Person(
  "Meyazhagan",
  "C N",
  "22",
  "8667283263",
  "meyazhagan.ofcl@gmail.com"
);
console.log(person);
