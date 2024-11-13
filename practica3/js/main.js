// ** Tips de Unión - Inserción - Tipos Avanzados **
var id1;
var id2;
id1 = 344556;
id2 = 'jfjdkfjdkf';
id1 = 'jdkfjdkfj';
id2 = 245454;
console.log(id1, id2);
var tobyBreed = 'Pastor Alemán';
console.log(tobyBreed);
// ** Tipado de funciones **
function add(op1, op2) {
    return op1 + op2;
}
console.log(add(2, 5));
var multiply = function (op1, op2) { return op1 * op2; }; // Ejemplo en arrow function
console.log(multiply(6, 8));
// * Void *
function setMessage(text, userName) {
    console.log(text + ' ' + userName);
}
setMessage('Hola', 'xurxoster');
// * Operador Opcional *
var division = function (elem1, elem2) {
    if (!elem2) {
        throw new Error("Operador no válido");
    }
    return elem1 / elem2;
};
console.log(division(5, 3)); // si quitamos un operados captamos el error
// * Importante orden de parámetros opcionales
function setLyric(word, word1) {
    if (!word) {
        throw new Error("Un parámetro obligatorio no puede seguir a un parámetro opcional.");
    }
    return word + ' ' + word1;
}
console.log(setLyric('Hola', 'mundo')); // Un parámetro obligatorio no puede seguir a un parámetro opcional.
// ** Tipado ENUM **
var Tags;
(function (Tags) {
    Tags["Man"] = "Hombre";
    Tags["Woman"] = "Mujer";
    Tags["Boy"] = "ni\u00F1o";
    Tags["Girl"] = "ni\u00F1a";
})(Tags || (Tags = {}));
var ecommerceTags = Tags.Boy;
console.log(ecommerceTags);
// ** Tipado de métodos-propiedades-clases globales **
var birthdayDate;
birthdayDate = new Date(2, 3, 1980);
console.log(typeof birthdayDate); // El tipo de dato es object
var weekDays = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
var message = "Andrea naci\u00F3 un ".concat(weekDays[birthdayDate.getDay()]);
console.log(message);
var city;
city = 'Nueva York';
city = city.length > 20 ? 'Demasiados caracteres' : city;
console.log(city);
// ** Tipado de genéricos **
function setResult(result) {
    if (typeof result === 'number') {
        return result > 5 ? 'APTO' : 'NO APTO';
    }
    return result;
}
var result1 = setResult('APTO');
var result2 = setResult(5);
console.log("Resultado 1: ".concat(result1, " y Resultado 2: ").concat(result2));
// ** Arrays y objetos en TypeScript **
var fruits;
var results = [];
fruits = ['pera', 'naranja', 'manzana'];
