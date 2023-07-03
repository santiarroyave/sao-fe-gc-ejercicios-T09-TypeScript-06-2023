


class Lavadora extends Electrodomestico{
    // 1- Atributos de clase    
    // los atributos de la clase padre deben ser 'protected' para poderlos heredar, si son 'private' no dejará
    private carga: number;

    // 2- Constructor de clase
    constructor(newConsumo: string) {
        super(newConsumo); // hago llamada a la clase padre
        this.carga = 5;
    }

    // 3- Métodos própios
    getPrecioBase(): number{
        let pb = super.getPrecioBase();
        return pb+200;
    }
}