class OldCalculator {
  constructor(value1, value2) {
    this.value1 = value1;
    this.value2 = value2;
  }
  sum() {
    console.log(this.value1 + this.value2);
  }
  subt() {
    console.log(this.value1 - this.value2);
  }
}

class Calculator extends OldCalculator {
  constructor(value1, value2) {
    super(value1, value2);
    this.value1 = value1;
    this.value2 = value2;
  }
  multiply() {
    console.log(this.value1 * this.value2);
  }
  divide() {
    console.log(this.value1 / this.value2);
  }
}

var calc = new Calculator(10, 5);
calc.sum();
calc.subt();
calc.multiply();
calc.divide();
