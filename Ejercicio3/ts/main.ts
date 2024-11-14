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

interface FormTypes {
    name            :   string;
    surname         :   string;
    dni             :   number;
    phoneNumber     :   number;
    mail            :   string;
}

class UserMe implements FormTypes {
    name: string;   
    surname: string;
    dni: number;
    phoneNumber: number;
    mail: string;

    constructor(name: string, dni: number, mail: string) {
        this.name   =   name;
        this.dni    =   dni;
        this.mail   =   mail;    
    }

    setSurname(surname: string): void {
        this.surname    =   surname;
    }

    getSurname():string {
        return this.surname;
    }

    setPhoneNumber(phoneNumber: number): void {
        this.phoneNumber    =   phoneNumber;
    }

    getPhoneNumber(): number {
        return  this.phoneNumber;
    }
}

const user1 = new UserMe('Jorge',44433698,'xurxoster@gmail.com');

user1.setPhoneNumber(648293417);
user1.setSurname('Borrego');

console.log(user1.getPhoneNumber());
console.log(user1.getSurname());


