"use strict";
// Ejemplo POO
// si no vamos a instanciar nada usamos clase abstracta (esto lo veremos mas adelante igual que las interfaces)
// la clase se tiene que llamar igual que el archivo
class VCPersona {
    //2- Todas las clases tendran constructores de clase
    constructor(newNom, newEdad, newCurso) {
        this.nombre = newNom;
        this.edad = newEdad;
        this.curso = newCurso;
    }
    //3- Todas las clases tendrán métodos propios
    setCurso(newCurso) {
        this.curso = newCurso;
    }
    getEdad() {
        return this.edad;
    }
    setEdad(newEdad) {
        this.edad = newEdad; //con el set podemos modificar el valor ya que es un atributo privado
    }
}
//Instancias de la clase Persona
let per1 = new VCPersona("santi", 24, "TS");
per1.setCurso("PY");
let per2 = new VCPersona("Diana", 18, "JS");
per2.nombre = "David"; // podemos entrar a modificar el valor del objeto porque está publico
