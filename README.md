# T09 TypeScript

## Notas de clase
### Instalación
1. [Instala nodeJS 18.16.1](https://nodejs.org/en)
2. Comprobar si se ha instalado. `node --version`
3. Instalar typescript en el proyecto con [npm](https://www.npmjs.com/package/typescript). `npm i -g typescript`

### Pasos de preparación typescript
* Crearemos una carpeta en el proyecto donde se alojará el javascript. `./js`
* Crearemos una carpeta en el proyecto dodne se alojará el typescript. `./src`
* Abriremos el terminal en Code. `Ctrl + Ñ`

* Inicializaremos el typescript desde el terminal. `tsc --init`
    * Si falla podemos usar `npx tsc --init`

Esto creará un archivo tsconfig.json donde tendremos que hacer algunas configuraciones:
    * l14: `"target": "ES6"`
    * l29: `"rootDir": "./src"`
    * l58: `"outDir": "./js"`

### Otros comandos en terminal
* Compilar typescript. `tsc`
* Activar compilación automatica. `tsc --watch`