// ** Ejercicio 1 **
// Para comprobar cuál es el uso del tipado estático con los tipos primitivos en TypeScript, crea un proyecto en un directorio denominado
// ejercicio1 y, usando Visual Studio Code, la siguiente estructura de archivos y directorio:
// • Un archivo index.html
// • Un directorio js vacío
// • Un directorio ts con un archivo main.ts
// A continuación, desarrolla los siguientes pasos:
// • En el archivo main.ts, declara una variable con tipo “string”, otra con
// tipo “number” y otra con tipo “boolean”.
// • Inicializa las variables con valores del tipo correspondiente.
// • Imprime por consola con “console.log()” cada variable.
// • Transpila el archivo main.ts a un archivo main.js.
// • Comprueba su correcta ejecución en el navegador.
// • Demuestra que, al cambiar el valor de una variable a un tipo distinto, se produce un error.
// • Implementa el tipo “any” para corregir el error
// let user    :   string  =   'xurxoster';
// let edad    :   number  =   46;
// let married :   boolean =   true;
let user = 'xurxoster';
let age = 46;
let married = true;
console.log(`user: ${user}, age: ${age}, married: ${married}`);
user = 45;
age = 'Veinte y cinco';
married = 48;
console.log(`user: ${user}, age: ${age}, married: ${married}`);
