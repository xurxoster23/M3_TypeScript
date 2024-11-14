// ** Interfaces **
// Ejercicio 3 
// Para comprobar cómo emplear interfaces y clases en TypeScript, crea
// un proyecto en un directorio denominado ejercicio3 y, usando Visual
// Studio Code, la siguiente estructura de archivos y directorio:
//     • Un archivo index.html
//     • Un directorio js vacío
//     • Un directorio ts con un archivo main.ts
// A continuación, desarrolla los siguientes pasos:
//     • En el archivo main.ts, declara una interfaz con propiedades comunes
//     para objetos de una entidad de formulario de inscripción, con sus
//     correspondientes tipos.
//     • A continuación, declara una clase que implemente la interfaz y las
//     propiedades adicionales para una entidad de formulario de inscripción específico de cursos o formación.
//     • Añade a la clase el método constructor para inicializar los valores de
//     las propiedades.
//     • Añade a la clase los métodos para establecer y obtener los valores
//     de esas propiedades.
//     • Instancia un objeto de la clase en una variable con unos valores de
//     inicialización.
//     • Imprime por consola con “console.log()” varios ejemplos de invocación de los métodos.
//     • Transpila el archivo main.ts a un archivo main.js.
//     • Comprueba su correcta ejecución en el navegador.
var UserMe = /** @class */ (function () {
    function UserMe(name, dni, mail) {
        this.name = name;
        this.dni = dni;
        this.mail = mail;
    }
    UserMe.prototype.setSurname = function (surname) {
        this.surname = surname;
    };
    UserMe.prototype.getSurname = function () {
        return this.surname;
    };
    UserMe.prototype.setPhoneNumber = function (phoneNumber) {
        this.phoneNumber = phoneNumber;
    };
    UserMe.prototype.getPhoneNumber = function () {
        return this.phoneNumber;
    };
    return UserMe;
}());
var user1 = new UserMe('Jorge', 44433698, 'xurxoster@gmail.com');
user1.setPhoneNumber(648293417);
user1.setSurname('Borrego');
console.log(user1.getPhoneNumber());
console.log(user1.getSurname());
