// ** Ejercicio 2 **
// Para comprobar cómo se utilizan los alias de tipos de unión y el tipado de funciones en TypeScript, crea un proyecto en un directorio
// denominado ejercicio2 y, usando Visual Studio Code, la siguiente
// estructura de archivos y directorio:
//     • Un archivo index.html
//     • Un directorio js vacío
//     • Un directorio ts con un archivo main.ts
// A continuación, desarrolla los siguientes pasos:
//     • En el archivo main.ts, declara un alias de tipo de unión que permita
//     recibir valores de tipo “number”, “string” o “null” a aquellos elementos en los que se implemente.
//     • A continuación, declara una función que reciba un parámetro de
//     edad con cualquier tipo de los especificados en el alias anterior y
//     retorne un valor con el tipo “string”.
//     • El cuerpo de la función deberá tener la lógica para que, si entra un
//     tipo “number”, lo redondee con “Math.floor()” y lo concatene a un
//     mensaje; si entra un tipo “string”, lo concatene al mismo mensaje; y
//     si entra un tipo “null”, devuelva un mensaje de valor incorrecto.
//     • Imprime por consola con “console.log()” una invocación que devuelva cada uno de los tipos especificados en el tipo de unión.
//     • Transpila el archivo main.ts a un archivo main.js.
//     • Comprueba su correcta ejecución en el navegador

type tipo = string | number | null;

let tipo1   :   tipo    =   'cuarenta y seis';
let tipo2   :   tipo    =   46;
let tipo3   :   tipo    =   null

function getAge(edad:tipo): string {
    if (typeof edad === 'number') {
        return `Mi edad es de ${Math.floor(edad)}`;
    }
    if (typeof edad === 'string') {
        return `Mi edad es de ${edad}`; 
    }else{
        return `Datos no válidos`;
    }
}

console.log(getAge(tipo1));
console.log(getAge(tipo2));
console.log(getAge(tipo3));



