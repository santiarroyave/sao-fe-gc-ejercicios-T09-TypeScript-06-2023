"use strict";
const defSexo = "H";
class Persona {
    // Constructores
    constructor(newDni) {
        this.nombre = "";
        this.edad = 0;
        this.dni = newDni;
        this.sexo = defSexo;
        this.peso = 0;
        this.altura = 0;
    }
    // Métodos própios
    getDni() {
        return this.dni;
    }
}
