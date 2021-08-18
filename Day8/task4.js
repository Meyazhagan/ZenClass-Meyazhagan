// 4. write a class to calculate uber price.

class Uber {
  constructor(ratePerKm) {
    this.ratePerKm = ratePerKm;
  }
  calculatePrice(distance) {
    return distance * this.ratePerKm;
  }
}

var uber = new Uber(15);
var price = uber.calculatePrice(100);
console.log(price);
