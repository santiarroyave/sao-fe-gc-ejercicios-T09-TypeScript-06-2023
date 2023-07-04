// Ahora crea una clase mainApp que realice lo siguiente:
// 1. Crea un array de Electrodomésticos de 10 posiciones.
// 2. Asigna a cada posición un objeto de las clases anteriores con los valores que desees.
// 3. Ahora, recorre este array y ejecuta el método precioFinal().
// 4. Deberás mostrar el precio de cada clase, es decir, el precio de todas las televisiones por un lado, el de las lavadoras por otro y la suma de los Electrodomésticos (puedes crear objetos Electrodoméstico, pero recuerda que Televisión y Lavadora también son electrodomésticos). Por ejemplo, si tenemos un Electrodoméstico con un precio final de 300, una lavadora de 200 y una televisión de 500, el resultado final será de 1000 (300+200+500) para electrodomésticos, 200 para lavadora y 500 para televisión.

// 1. Crea un array de Electrodomésticos de 10 posiciones.
let electrodomesticos = new Array(10);

// 2. Asigna a cada posición un objeto de las clases anteriores con los valores que desees.
electrodomesticos[0] = new Electrodomestico("A");
electrodomesticos[1] = new Television("D");
electrodomesticos[2] = new Lavadora("C");
electrodomesticos[3] = new Television("B");
electrodomesticos[4] = new Television("E");
electrodomesticos[5] = new Lavadora("X");
electrodomesticos[6] = new Electrodomestico("F");
electrodomesticos[7] = new Electrodomestico("D");
electrodomesticos[8] = new Lavadora("A");
electrodomesticos[9] = new Television("C");
electrodomesticos[10] = new Electrodomestico("B");

// 3. Ahora, recorre este array y ejecuta el método precioFinal().
console.log("---------------------------------");
console.log("3. Mostrando información individual de cada Electrodomestico");
console.log("---------------------------------");
for (let i = 0; i < electrodomesticos.length; i++) {
    // Obtenemos y mostramos el nombre de tipo de clase    
    console.log(Object.getPrototypeOf(electrodomesticos[i]).constructor.name);

    // Mostramos informacion de los precios
    console.log(`Objeto ${i+1} letra ${electrodomesticos[i].getCon()}`);
    electrodomesticos[i].precioFinal();
    console.log(`Precio final: ${electrodomesticos[i].getPrecioBase()} €`);
    console.log();
}


// 4. Deberás mostrar el precio de cada clase, es decir, el precio de todas las televisiones por un lado, el de las lavadoras por otro y la suma de los Electrodomésticos (puedes crear objetos Electrodoméstico, pero recuerda que Televisión y Lavadora también son electrodomésticos). Por ejemplo, si tenemos un Electrodoméstico con un precio final de 300, una lavadora de 200 y una televisión de 500, el resultado final será de 1000 (300+200+500) para electrodomésticos, 200 para lavadora y 500 para televisión.
console.log("---------------------------------");
console.log("4. Mostrando precios por tipo de clase y una suma total");
console.log("---------------------------------");

let nombreTipoClase = "";
let sumaTotal = 0;
let sumaParcial = 0;

// Mostrando precios de los objetos tipo Electrodomestico
console.log("Precio de cada electrodomestico");
for (let i = 0; i < electrodomesticos.length; i++) {
    nombreTipoClase = Object.getPrototypeOf(electrodomesticos[i]).constructor.name;
    
    // Discriminamos por tipo de clase
    if (nombreTipoClase == "Electrodomestico"){
        // Imprimimos precio de la clase de este tipo
        console.log(`- ${electrodomesticos[i].getPrecioBase()} €`);

        // Vamos sumando todos los precios
        sumaTotal += electrodomesticos[i].getPrecioBase();
        sumaParcial += electrodomesticos[i].getPrecioBase();
    };
}
// Mostramos la suma total de esta clase en concreto
console.log(`(Total: ${sumaParcial} €)`);
sumaParcial = 0;
console.log("----------------");


// Mostrando precios de los objetos tipo Lavadora
console.log("Precio de cada lavadora");
for (let i = 0; i < electrodomesticos.length; i++) {
    nombreTipoClase = Object.getPrototypeOf(electrodomesticos[i]).constructor.name;
    
    // Discriminamos por tipo de clase
    if (nombreTipoClase == "Lavadora"){
        // Imprimimos precio de la clase de este tipo
        console.log(`- ${electrodomesticos[i].getPrecioBase()} €`);

        // Vamos sumando todos los precios
        sumaTotal += electrodomesticos[i].getPrecioBase();
        sumaParcial += electrodomesticos[i].getPrecioBase();
    };
}
// Mostramos la suma total de esta clase en concreto
console.log(`(Total: ${sumaParcial} €)`);
sumaParcial = 0;
console.log("----------------");


// Mostrando precios de los objetos tipo Television
console.log("Precio de cada tele");
for (let i = 0; i < electrodomesticos.length; i++) {
    nombreTipoClase = Object.getPrototypeOf(electrodomesticos[i]).constructor.name;
    
    // Discriminamos por tipo de clase
    if (nombreTipoClase == "Television"){
        // Imprimimos precio de la clase de este tipo
        console.log(`- ${electrodomesticos[i].getPrecioBase()} €`);
        sumaParcial += electrodomesticos[i].getPrecioBase();

        // Vamos sumando todos los precios
        sumaTotal += electrodomesticos[i].getPrecioBase();
    };
}
// Mostramos la suma total de esta clase en concreto
console.log(`(Total: ${sumaParcial} €)`);
sumaParcial = 0;
console.log("=====================");

// Mostrando precio total
console.log(`Suma total de los electrodomesticos:
${sumaTotal} €`);
console.log("=====================");