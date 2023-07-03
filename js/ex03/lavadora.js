"use strict";
class Lavadora extends Electrodomestico {
    // 2- Constructor de clase
    constructor(newConsumo) {
        super(newConsumo); // hago llamada a la clase padre
        this.carga = 5;
    }
    // 3- Métodos própios
    getPrecioBase() {
        let pb = super.getPrecioBase();
        return pb + 200;
    }
}
