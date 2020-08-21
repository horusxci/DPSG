var Rombo = /** @class */ (function () {
    function Rombo(dH, dV) {
        this.DiagonalHorizonal = dH;
        this.DiagonalVertical = dV;
    }
    Rombo.prototype.calcArea = function () {
        return this.DiagonalHorizonal * this.DiagonalVertical;
    };
    return Rombo;
}());
var rombito = new Rombo(7, 8);
console.log("Area de rombito: " + rombito.calcArea());
