'use strict'

function Calculator() {
    this.res = 0;

    this.init = (num) => this.res = num;
    this.add = (num) => this.res += num;
    this.mul = (num) => this.res *= num;
    this.div = (num) => this.res /= num;
    this.sub = (num) => this.res -= num;
    this.alert = () => setTimeout(() => alert(this.res), 5000);
}

const calc = new Calculator();

console.log(
    calc.init(2),
    calc.add(2),
    calc.mul(3),
    calc.div(4),
    calc.sub(2),
    calc.res // 1
);

calc.alert();
