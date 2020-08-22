var Calculator = /** @class */ (function () {
    function Calculator(n1, n2) {
        this.numero1 = n1;
        this.numero2 = n2;
    }
    Calculator.prototype.operacionesBasicas = function () {
        console.log("Operando " + this.numero1 + " y " + this.numero2);
        console.log(this.numero1 + " + " + this.numero2 + " = " + (this.numero1 + this.numero2));
        console.log(this.numero1 + " - " + this.numero2 + " = " + (this.numero1 - this.numero2));
        console.log(this.numero1 + " * " + this.numero2 + " = " + this.numero1 * this.numero2);
        console.log(this.numero1 + " / " + this.numero2 + " = " + this.numero1 / this.numero2);
    };
    return Calculator;
}());
var calc = new Calculator(42, 77);
calc.operacionesBasicas();
