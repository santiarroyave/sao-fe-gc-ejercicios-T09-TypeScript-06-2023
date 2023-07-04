type tSexo = "H" | "M";

// Valores por defecto
let defNombre = "";
let defEdad = 0;
let defSexo = "H";
let defPeso = 0;
let defAltura = 0;


class Persona{
    // Atributos
    private nombre: string;
    private edad: number;
    private dni: string;
    private sexo: tSexo;
    private peso: number;
    private altura: number;

    // Constructores
    constructor(newDni:string){
        this.nombre = defNombre;
        this.edad = defEdad;
        this.dni = newDni;
        this.sexo = defSexo;
        this.peso = defPeso;
        this.altura = defAltura;
    }

    // Métodos própios
    getDni(){
        return this.dni;
    }
}