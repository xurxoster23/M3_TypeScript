// ** Interfaces y Clases Abstractas **

// * INTERFACES *
interface Article {
    sku : string,
    description : string,
    price : number,
    stock? : number
}

let articleIn : Article = {
    sku : 'A231',
    description : 'Lorem1 ipsum .......',
    price : 10
}

console.log(articleIn); // NO Error ya que la propiedad stock es opcional

// * Diferencias de las interfaces respecto a los tipos de objetos e interacciones *
type Article_01 = {
    sku : string,
    description : string,
    price : number,
}

type StorageArticle = Article_01 & {
    stock : number
} // Ejemplo de combinación de dos alias 

let articleIn_01 : StorageArticle = {
    sku : 'A25678',
    description : 'Loren Ipsum ....',
    price : 12,
    stock : 10
}

console.log(articleIn_01);

// ** Clases en Typescript **
class Article_02 {

    private id : string;
    private _name : string;
    private description : string;
    private stock : number;
    private securityStock : number

    constructor(id: string, name: string, description: string) {
        this.id = id; 
        this._name = name;
        this.description = description;
    }

    public setStock(stock: number, securityStock: number) {
        this.stock = stock;
        this.securityStock = securityStock;
    }

    public getAvaliableStock(): number {
        return this.stock = this.securityStock;
    }
    
    public set name(name: string){
        this._name = name
    }

    public get name() : string {
        return this._name;
    }
    
}

let articleIn_02 : Article_02 = new Article_02('A023','tuerca','Lorem Ipsum...');

articleIn_02.setStock(200,50);
articleIn_02.name = 'tuerca 23-V Especial';

console.log(articleIn_02);

// * Miembros estáticos en TypeScript *

class MessageDate {
    private static days = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];

    static getMessageDate(date: Date): string {
        return `${this.days[date.getDay()]}, ${this.days[date.getDay()]} / ${date.getMonth()} / ${date.getFullYear()}`
    }
}

let birthday: Date = new Date(1978,1,19);

console.log(MessageDate.getMessageDate(birthday));

// * Clases Abstractas en TypeScript *
 
abstract class Price {
    abstract setPrice(regularPrice: number, savingPercent: number);
    // No se pueden instanciar objetos de esta clase y servirá de modelo para la herencia en futuras clases
}

// let laptopPrice : Price = new Price(10,15); ----> NO se pueden crear instancias

// ** Herencia de clases en la programación orientada a objetos **



