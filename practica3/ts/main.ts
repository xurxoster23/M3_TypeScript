// ** Tips de Unión - Inserción - Tipos Avanzados **

// * Tipos de Unión - Alias *
// let id : string | number;
// id = '23445';

// id = 21343;

type id = string | number; // Este es un ejemplo de Alias con dos tipos 

let id1 : id;
let id2 : id;

id1 = 344556;
id2 = 'jfjdkfjdkf';
id1 = 'jdkfjdkfj';
id2 = 245454;

console.log(id1,id2);

type dogBreeds = 'Pastor Alemán' | 'Pastor Belga' | 'Mastín'; // Ejemplo de Alias complejo

let tobyBreed : dogBreeds = 'Pastor Alemán';

console.log(tobyBreed);

// ** Tipado de funciones **
function add(op1 : number, op2: number): number {
    return op1 + op2;
}

console.log(add(2,5));

const multiply = (op1,op2 : number): number => op1 * op2; // Ejemplo en arrow function

console.log(multiply(6,8));

// * Void *
function setMessage(text:string, userName: string): void {
    console.log(text+' '+userName);
    
}

setMessage('Hola','xurxoster');

// * Operador Opcional *
const division = (elem1,elem2?: number): number => { // Ejemnplo de operador opcional
    if (!elem2) {
        throw new Error("Operador no válido");
    }
    return elem1/elem2;
}

console.log(division(5,3)); // si quitamos un operados captamos el error

// * Importante orden de parámetros opcionales
function setLyric(word,word1:string): string {// word?,word1:string ejemplo de parámetro obligatorio antes del opcional
    if(!word){
        throw new Error("Un parámetro obligatorio no puede seguir a un parámetro opcional.");
    }
    return word+' '+word1;
}

console.log(setLyric('Hola','mundo')); // Un parámetro obligatorio no puede seguir a un parámetro opcional.

// ** Tipado ENUM **
enum Tags {
    Man = 'Hombre',
    Woman = 'Mujer',
    Boy = 'niño',
    Girl = 'niña'
}

let ecommerceTags : Tags = Tags.Boy;

console.log(ecommerceTags);


// ** Tipado de métodos-propiedades-clases globales **
let birthdayDate : Date;

birthdayDate = new Date(2,3,1980);

console.log(typeof birthdayDate); // El tipo de dato es object

const weekDays = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];

let message: string = `Andrea nació un ${weekDays[birthdayDate.getDay()]}`;

console.log(message);

let city: string;

city = 'Nueva York';

city = city.length > 20 ? 'Demasiados caracteres' : city;

console.log(city);

// ** Tipado de genéricos **

function setResult<T>(result:T): any { // Ejemplo de tipado genérico 
    if (typeof result === 'number') {
        return result > 5 ? 'APTO' : 'NO APTO';
    }
    return result;
}

let result1 = setResult<string>('APTO');
let result2 = setResult<number>(5);

console.log(`Resultado 1: ${result1} y Resultado 2: ${result2}`);


// ** Arrays y objetos en TypeScript **
let fruits : string[];
let results : Array<number> = []; // Es obligatorio su inicialización

fruits = ['pera','naranja','manzana'];

let player : {
    name : string,
    team : string,
    conference : string
}

player = {
    name : 'Larry Bird',
    team : 'Boston Celtics',
    conference : 'East'
}

























