// valores por defecto
let defResolucion = 20;
let defCuatroK = false;

class Television extends Electrodomestico{
    // ATRIBUTOS
    private resolucion: number;
    private cuatroK: boolean;

    // CONSTRUCTORES
    constructor(newConsumo: string){
        super(newConsumo);

        this.resolucion = defResolucion;
        this.cuatroK = defCuatroK;
    }

    // METODOS

    // Getters
    getResolucion():number{
        return this.resolucion;
    }
    
    getCuatroK():boolean{
        return this.cuatroK;
    }

    precioFinal(){
        super.precioFinal();
        // console.log(`Precio base TV: ${this.precioBase} €`);

        if(this.resolucion > 40){
            console.log("Tamaño superior a 40 pulgadas");
            console.log(`- Incremento del 30%: (${30/100*this.precioBase} €)`);
            this.precioBase = this.precioBase+(30/100*this.precioBase);
        }
        
        if(this.cuatroK == true){
            console.log("Resolucion 4k");
            console.log("- Incremento 50€");
            this.precioBase += 50;
        }
        // console.log(`Precio después del incremento: ${this.precioBase} €`);
    }
}