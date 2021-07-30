// 2. https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
let log = (...data) => console.log(...data);
class Circle {
  constructor(radius = 1.0, color = "red") {
    this.radius = radius;
    this.color = color;
  }
  getRadius() {
    return this.radius;
  }
  getColor() {
    return this.color;
  }
  setRadius(radius) {
    this.radius = radius;
  }
  setColor(color) {
    this.color = color;
  }
  toString() {
    return `Circle [${this.radius}, ${this.color}]`;
  }
  getArea() {
    return 2 * Math.PI * this.radius * this.radius;
  }
  getCircumference() {
    return Math.PI * this.radius;
  }
}

let myCircle = new Circle();
log(myCircle);
myCircle.setRadius(5);
myCircle.setColor("blue");
log(myCircle.toString());
log(myCircle.getArea());
log(myCircle.getCircumference());
