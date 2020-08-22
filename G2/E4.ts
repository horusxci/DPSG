class Calculator{
    numero1: number;
    numero2: number;

    constructor(n1:number, n2:number){
        this.numero1 = n1;
        this.numero2 = n2;
    }

    operacionesBasicas(){        
        console.log(`Operando ${this.numero1} y ${this.numero2}`);
        console.log(`${this.numero1} + ${this.numero2} = ${this.numero1+this.numero2}`);
        console.log(`${this.numero1} - ${this.numero2} = ${this.numero1-this.numero2}`);
        console.log(`${this.numero1} * ${this.numero2} = ${this.numero1*this.numero2}`);
        console.log(`${this.numero1} / ${this.numero2} = ${this.numero1/this.numero2}`);
    }
}

let calc:Calculator = new Calculator(42,77)
calc.operacionesBasicas();