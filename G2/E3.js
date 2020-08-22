var Empleado = /** @class */ (function () {
    function Empleado(name, salary) {
        this.nombre = name;
        this.salario = salary;
    }
    Empleado.prototype.salarioNeto = function () {
        var neto = this.salario;
        neto -= this.salario * 0.03;
        neto -= this.salario * 0.0725;
        neto -= this.salario * 0.1;
        return neto;
    };
    return Empleado;
}());
var empl = new Empleado("Juan Perez", 1500);
console.log("Salairo neto: " + empl.salarioNeto());
