let defLongitud = 8;

class Password{
    // Atributos
    private longitud: number;
    private contraseña: number;

    // Constructores
    constructor(){
        this.longitud = defLongitud;
        this.contraseña = this.contraseñaAleatoria();


    }

    // Métodos
    contraseñaAleatoria(){
        let i = 1;
        let valor = Math.floor(Math.random()* 10);
        while(i < this.longitud){
            valor = valor * 10 + Math.floor(Math.random()*10);
            i++;
        }
        

        return valor;
    }

    getContraseña(){
        return this.contraseña;
    }
}