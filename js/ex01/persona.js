"use strict";
// Valores por defecto
let defNombre = "";
let defEdad = 0;
let defSexo = "H";
let defPeso = 0;
let defAltura = 0;
class Persona {
    // Constructores
    constructor(newDni) {
        this.nombre = defNombre;
        this.edad = defEdad;
        this.dni = newDni;
        this.sexo = defSexo;
        this.peso = defPeso;
        this.altura = defAltura;
    }
    // Métodos própios
    getDni() {
        return this.dni;
    }
}
