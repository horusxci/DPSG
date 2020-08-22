/*
var spiderman = {
nombre: "Peter parket",
poderes: ["trepar", "fuerza", "agilidad", "telas de araña"]
};
*/
interface Heroe{
    nombre: string;
    poderes: Array<string>;
}

let spiderMan:Heroe = {nombre: "Peter Parker", poderes:['Trepar','Fuerza','Agilidad','Telas de arania']};

console.log(spiderMan.nombre);
console.log(spiderMan.poderes);
