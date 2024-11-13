// ** Tipado de variables **

// * string - number *

let userName: string,
message: string,
result: number;

userName = 'Sara';
message = `Bienvenid@ ${userName}`;

result = 9.83;
result = 10e2;


console.log(message);
console.log(result);


// * Booleanos *
let adult: boolean;
adult = true;

console.log(adult);

// * tipos valor *
let value1 : null,
    value2 : undefined;

value1 = null;
value2 = undefined;

console.log(value1, value2);


// ** Inferencia de valores y el tipo "any" **
let id = '12345'; 
console.log(typeof id); // id toma valor de tipado string


console.log(typeof parseInt(id)); // Para cambiar de tipado debemos usar los métodos de los objetos correspondientes






