"use strict";
const defColor = "blanco";
const defConsumo = "F";
const defPrecio = 100;
const defPeso = 5;
class Electrodomestico {
    // 2- Constructores
    constructor(newConsumo) {
        this.color = defColor;
        this.consumo = this.comprobarConsumoEnergetico(newConsumo);
        this.precioBase = defPrecio;
        this.peso = defPeso;
    }
    // 3- Métodos própios
    getPrecioBase() {
        return this.precioBase;
    }
    getColor() {
        return this.color;
    }
    getCon() {
        return this.consumo;
    }
    getPeso() {
        return this.peso;
    }
    comprobarConsumoEnergetico(letra) {
        switch (letra) {
            case "A":
                return "A";
                break;
            case "B":
                return "B";
                break;
            case "C":
                return "C";
                break;
            case "D":
                return "D";
                break;
            case "E":
                return "E";
                break;
            default:
                return defConsumo;
                break;
        }
    }
}
// Por defecto, el color será blanco, el consumo energético será F, el precio Base es de 100 € y el peso de 5 kg. Usa constantes para ello.
// • Los colores disponibles son blanco, negro, rojo, azul y gris. No importa si el nombre está en mayúsculas o en minúsculas
