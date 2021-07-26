class rectangle {
  constructor(heigth, width) {
    this.heigth = heigth;
    this.width = width;
  }

  calculateArea() {
    return this.heigth * this.width;
  }
}

var rect = new rectangle(10, 20);
console.log(rect.calculateArea());
