class Empleado {
    nombre: string;
    salario: number;

    constructor(name:string, salary:number){
        this.nombre = name;
        this.salario = salary;
    }

    salarioNeto():number{
        let neto = this.salario;

        neto-= this.salario*0.03;
        neto-= this.salario*0.0725;
        neto-= this.salario*0.1;

        return neto;
    }
}

let empl: Empleado = new Empleado("Juan Perez",1500);
console.log("Salairo neto: " + empl.salarioNeto());