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