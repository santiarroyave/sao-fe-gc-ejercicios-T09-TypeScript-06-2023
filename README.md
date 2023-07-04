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