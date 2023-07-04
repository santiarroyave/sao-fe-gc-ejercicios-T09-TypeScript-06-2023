# T09 TypeScript

## Notas de clase
### Instalación
1. [Instala nodeJS 18.16.1](https://nodejs.org/en)
2. Comprobar si se ha instalado. `node --version`
3. Instalar typescript en el proyecto con [npm](https://www.npmjs.com/package/typescript). `npm i -g typescript`

### Preparación typescript
#### Creación de carpetas
* Crearemos una carpeta en el proyecto donde se alojará el javascript. `./js`
* Crearemos una carpeta en el proyecto dodne se alojará el typescript. `./src`

#### Inicializar typescript
* Abriremos el terminal en Code. `Ctrl + Ñ`
* Inicializaremos el typescript desde el terminal. `tsc --init`
    * Si da error, podemos usar `npx tsc --init`

#### Configuración del archivo tsconfig.json
* l14: `"target": "ES6"` indicaremos el estándar del lenguaje de salida.
* l29: `"rootDir": "./src"` indicaremos dónde se ubican los archivo typescript.
* l58: `"outDir": "./js"` indicaremos dónde se ubicarán los archivos javascript de salida.

#### Compilar typescript
* Compilar typescript. `tsc`
* Activar compilación automatica. `tsc --watch`

## Ejercicio 1
Haz una clase llamada Persona que siga las siguientes condiciones:
* Sus atributos son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura.
* Por defecto, todos los atributos menos el DNI serán valores por defecto según su tipo (0 números, cadena vacía para String, etc.). Sexo será hombre por defecto, usa una constante para ello.
* Instancia al menos tres objetos.

## Ejercicio 2
Haz una clase llamada Password que siga las siguientes condiciones:
* Que tenga los atributos longitud y contraseña . Por defecto, la longitud será de 8.
* Los constructores serán los siguientes:

Incluye el método que genere una contraseña aleatoria con esa longitud.

## Ejercicio 3
* Crear superclase Electrodomestico
* Crear subclase Lavadora
* Crear subclase Televsion

### Superclase Electrodoméstico
Crearemos una superclase llamada Electrodoméstico con las siguientes características:
* Sus atributos son precio base, color, consumo energético (letras entre A y F) y peso. Indica que se podrán heredar.
* Por defecto, el color será blanco, el consumo energético será F, el precio Base es de 100 € y el peso de 5 kg. Usa constantes para ello.
* Los colores disponibles son blanco, negro, rojo, azul y gris. No importa si el nombre está en mayúsculas o en minúsculas.


Los métodos que implementara serán:
* Métodos get de todos los atributos.
* comprobarConsumoEnergetico(char letra): comprueba que la letra es correcta,
sino es correcta usara la letra por defecto. Se invocara al crear el objeto y no será visible.
* comprobarColor(String color): comprueba que el color es correcto, sino lo es usa el color por defecto. Se invocara al crear el objeto y no será visible.
* precioFinal(): según el consumo energético, aumentara su precio, y según su tamaño, también.

### Subclase Lavadora
Crearemos una subclase llamada Lavadora con las siguientes características:
* Su atributo es carga, además de los atributos heredados.
* Por defecto, la carga es de 5 kg. Usa una constante para ello.

Recuerda que debes llamar al constructor de la clase padre.

Los métodos que se implementara serán:
* Método get de carga.
* precioFinal():, si tiene una carga mayor de 30 kg, aumentara el precio 50 €, sino es así no se incrementara el precio. Llama al método padre y añade el código necesario. Recuerda que las condiciones que hemos visto en la clase Electrodomestico también deben afectar al precio.

### Subclase Televisión
Crearemos una subclase llamada Televisión con las siguientes características:
* Sus atributos son resolución (en pulgadas) y 4K(booleano), además de los atributos heredados.
* Por defecto, la resolución será de 20 pulgadas y el 4k será false.

Recuerda que debes llamar al constructor de la clase padre.

Los métodos que se implementara serán:
* Método get de resolución y atributo de 4K.
* precioFinal(): si tiene una resolución mayor de 40 pulgadas, se incrementará el precio un 30% y si tiene 4k incorporado, aumentará 50 €. Recuerda que las condiciones que hemos visto en la clase Electrodoméstico también deben afectar al precio.

### Clase mainApp
Ahora crea una clase mainApp que realice lo siguiente:
* Crea un array de Electrodomésticos de 10 posiciones.
* Asigna a cada posición un objeto de las clases anteriores con los valores que desees.
* Ahora, recorre este array y ejecuta el método precioFinal().
* Deberás mostrar el precio de cada clase, es decir, el precio de todas las televisiones por un lado, el de las lavadoras por otro y la suma de los Electrodomésticos (puedes crear objetos Electrodoméstico, pero recuerda que Televisión y Lavadora también son electrodomésticos). Por ejemplo, si tenemos un Electrodoméstico con un precio final de 300, una lavadora de 200 y una televisión de 500, el resultado final será de 1000 (300+200+500) para electrodomésticos, 200 para lavadora y 500 para televisión.