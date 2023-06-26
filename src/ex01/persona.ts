type tipSexo = "H" | "M";
const defSexo = "H";

class Persona{
    // Atributos
    private nombre: string;
    private edad: number;
    private dni: string;
    private sexo: tipSexo;
    private peso: number;
    private altura: number;

    // Constructores
    constructor(newDni:string){
        this.nombre = "";
        this.edad = 0;
        this.dni = newDni;
        this.sexo = defSexo;
        this.peso = 0;
        this.altura = 0;
    }

    // Métodos própios
    getDni(){
        return this.dni;
    }
}