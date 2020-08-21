class Rombo{
    DiagonalVertical: number;
    DiagonalHorizonal: number;

    constructor(dH:number, dV:number){
        this.DiagonalHorizonal = dH;
        this.DiagonalVertical = dV;
    }

    calcArea(): number{
        return this.DiagonalHorizonal*this.DiagonalVertical;
    }
}

let rombito:Rombo = new Rombo(7,8);

console.log("Area de rombito: " + rombito.calcArea());