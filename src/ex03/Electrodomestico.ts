
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
}

// Por defecto, el color será blanco, el consumo energético será F, el precio Base es de 100 € y el peso de 5 kg. Usa constantes para ello.
// • Los colores disponibles son blanco, negro, rojo, azul y gris. No importa si el nombre está en mayúsculas o en minúsculas