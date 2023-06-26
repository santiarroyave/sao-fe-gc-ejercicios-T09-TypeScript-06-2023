// Definimos codigo TS

let valorA: number | boolean | string;
//let valorA: any;
valorA = 30;
valorA = true;

valorA = "Hola";

const IVA = 0.21;
const sumaDos = (valorA:number, valorB:number) =>{
    //return valorA + valorB;
    console.log(valorA + valorB);
}

sumaDos(4,6);

// Puedo crear mis propios tipos
type dias = "martes" | "domingo";

// let diaSemana:dias = "lunes"; // no lo cogerá
let diaSemana:dias = "martes"; // no lo cogerá