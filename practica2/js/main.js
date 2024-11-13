// ** Tipado de variables **
// * string - number *
var userName, message, result;
userName = 'Sara';
message = "Bienvenid@ ".concat(userName);
result = 9.83;
result = 10e2;
console.log(message);
console.log(result);
// * Booleanos *
var adult;
adult = true;
console.log(adult);
// * tipos valor *
var value1, value2;
value1 = null;
value2 = undefined;
console.log(value1, value2);
// ** Inferencia de valores y el tipo "any" **
var id = '12345';
console.log(typeof id); // id toma valor de tipado string
console.log(typeof parseInt(id)); // Para cambiar de tipado debemos usar los métodos de los objetos correspondientes
