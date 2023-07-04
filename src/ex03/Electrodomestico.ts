
type tColor = "blanco" | "negro" | "rojo" | "azul" | "gris";

const defColor = "blanco";
const defConsumo = "F";
const defPrecio = 100;
const defPeso = 5;

class Electrodomestico{
    // 1- Atributos
    // Sus atributos son precio base, color, consumo energético (letras entre A y F) y peso. Indica que se podrán heredar.
    protected precioBase: number;
    protected color: tColor;
    protected consumo: string;
    protected peso: number;

    // 2- Constructores
    constructor(newConsumo:string){
        this.color = defColor;
        this.consumo = this.comprobarConsumoEnergetico(newConsumo);
        this.precioBase = defPrecio;
        this.peso = defPeso;
    }

    // 3- Métodos própios
    getPrecioBase():number{
        return this.precioBase;
    }

    getColor():tColor{
        return this.color;
    }

    getCon():string{
        return this.consumo;
    }

    getPeso(){
        return this.peso;
    }

    // comprobarConsumoEnergetico(char letra): comprueba que la letra es correcta, sino es correcta usara la letra por defecto. Se invocara al crear el objeto y no será visible.
    comprobarConsumoEnergetico(letra: string){
        switch (letra){
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

    // comprobarColor(String color): comprueba que el color es correcto, sino lo es usa el color por defecto. Se invocara al crear el objeto y no será visible.
    comprobarColor(color: string){
        switch (color) {
            case "blanco":
                return "blanco";
                break;
            case "negro":
                return "negro";
                break;
            case "rojo":
                return "rojo";
                break;
            case "azul":
                return "azul";
                break;
            case "blanco":
                return "blanco";
                break;
            case "gris":
                return "gris";
                break;
        
            default:
                return defColor;
                break;
        }
    }

    // precioFinal(): según el consumo energético, aumentara su precio, y según su tamaño, también
    precioFinal(){

        // aumentando precio segun consumo
        switch (this.consumo){
            case "A":
                this.precioBase += 100;
                break;
            case "B":
                this.precioBase += 80;
                break;
            case "C":
                this.precioBase += 60;
                break;
            case "D":
                this.precioBase += 50;
                break;
            case "E":
                this.precioBase += 30;
                break;
            case "F":
                this.precioBase += 10;
                break;
        }

        // aumentando precio segun tamaño
        if( 0 < this.peso && this.peso <= 19){
            this.precioBase += 20;
        }
        if( 20 < this.peso && this.peso <= 49){
            this.precioBase += 50;
        }
        if( 50 < this.peso && this.peso <= 79){
            this.precioBase += 80;
        }
        if( 80 < this.peso){
            this.precioBase += 100;
        }

        // console.log(`Precio base electrodomestico: ${this.precioBase} €`);
    }
}

// Por defecto, el color será blanco, el consumo energético será F, el precio Base es de 100 € y el peso de 5 kg. Usa constantes para ello.
// • Los colores disponibles son blanco, negro, rojo, azul y gris. No importa si el nombre está en mayúsculas o en minúsculas