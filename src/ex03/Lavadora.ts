// Crearemos una subclase llamada Lavadora con las siguientes características:
// ● Su atributo es carga, además de los atributos heredados.
// ● Por defecto, la carga es de 5 kg. Usa una constante para ello.
// Recuerda que debes llamar al constructor de la clase padre.
// Los métodos que se implementara serán:
// ● Método get de carga.
// ● precioFinal():, si tiene una carga mayor de 30 kg, aumentara el precio 50 €, sino es así no se incrementara el precio. Llama al método padre y añade el código necesario.
// Recuerda que las condiciones que hemos visto en la clase Electrodomestico también
// deben afectar al precio.


// Valores por defecto
const defCarga = 5;

class Lavadora extends Electrodomestico{
    // 1- Atributos de clase    
    // los atributos de la clase padre deben ser 'protected' para poderlos heredar, si son 'private' no dejará
    private carga: number;

    // 2- Constructor de clase
    constructor(newConsumo: string) {
        super(newConsumo); // hago llamada a la clase padre
        this.carga = defCarga;
    }

    // 3- Métodos própios
    // Getter
    getCarga():number{
        return this.carga;
    };

    // precioFinal():, si tiene una carga mayor de 30 kg, aumentara el precio 50 €, sino es así no se incrementara el precio. Llama al método padre y añade el código necesario.
    precioFinal(){
        super.precioFinal();
        // console.log(`Precio base Lavadora: ${this.precioBase} €`);

        if(this.carga > 30){
            console.log("Pesa más de pesar 30kg");
            console.log("- Incremento 50€");
            this.precioBase += 50;
        }
    };


    // Apuntes profe
    // getPrecioBase(): number{
    //     let pb = super.getPrecioBase();
    //     return pb+200;
    // }

}