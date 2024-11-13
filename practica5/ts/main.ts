// ** Herencia y composición de Clases **

// * Herencis de clases en la programación orientada a objetos *

interface Order {
    id : string,
    date : Date,
    positions : Array<any>,
    userId : string
}

class ComputerOrder implements Order {
    
    id : string;
    date : Date;
    positions : Array<any>;
    userId : string;
    
    constructor(id: string, date: Date, userId: string) {
        this.id = id; 
        this.date = date;
        this.userId = userId;
    }

    addPosition(position:any): void {
        this.positions.push(position);
    }

    getPosition(): Array<any> {
        return this.positions;
    }
}



// * Implementación de la herencia de clases *

class Employee {

        protected name : string;
        protected surname : string;
        protected dni : string;
        protected birthDay : Date;

    constructor(name: string, surname: string, dni: string, birthDay: Date) {
        this.name       = name;
        this.surname    = surname;
        this.dni        = dni;
        this.birthDay   = birthDay;
    }

    getName(): string {
        return this.name;
    }
    setName(name: string): void {
        this.name = name;
    }
    getSurname(): string {
        return this.surname;
    }
    setSurname(surname: string): void {
        this.surname = surname;
    }
    getDNI(): string {
        return this.dni;
    }
    setDNI(dni: string): void {
        this.dni = dni;
    } 
    getbirthDay(): any {
        return this.birthDay;
    }
    setbirthDay(birthDay: Date): void {
        this.birthDay = birthDay;
    }
}

class Manager extends Employee {
    role : string;
    
    constructor(
        name : string,
        surname : string,
        dni : string,
        birthDay : Date,
        role : string
    ) {
        super(name,surname,dni,birthDay);
        this.role = role;
    }
}

const manager = new Manager('Juan','López','444336987J',new Date('1978-01-19'),'ventas');
console.log(manager.getName());
console.log(manager.getSurname());
console.log(manager.getDNI());
console.log(manager.getbirthDay());
console.log(manager.role);

// También podemos usar la clase padre para Instanciar objetos
let employeeIn : Employee = new Employee('Andrea','Roa','44433698K',new Date('1980,2,3'));

console.log(employeeIn.getName());
console.log(employeeIn.getSurname());
console.log(employeeIn.getDNI());
console.log(employeeIn.getbirthDay());

// * Implementar mediante clases Abstractas *

abstract class Price {
    abstract setPrice(regularPrice: number, savingPercent: number): void;
}

class ArticlePrice extends Price {
    
    private regularPrice    : number;
    private savingPercent   : number;
    private currency        : string;

    constructor(
        regularPrice    :   number,
        savingPercent   :   number,
        currency        :   string
    ) {
        super();
        this.regularPrice   =   regularPrice;
        this.savingPercent  =   savingPercent;
        this.currency       =   currency;
    }

    setPrice(regularPrice: number, savingPercent: number): void {
        this.regularPrice   =   regularPrice;
        this.savingPercent  =   savingPercent;
    }

    getPrice(): string {
        return (this.regularPrice - this.savingPercent) / 100 * (this.regularPrice)+` `+this.currency;
    }
} 

const articleInPrice = new ArticlePrice(150,0,'€');
console.log(articleInPrice.getPrice());

articleInPrice.setPrice(200,50);
console.log(articleInPrice.getPrice());

// * Composición de Clases *

class User{
    private name    :   string;
    private surname :   string;
    private adress  :   object;
    
    constructor(name: string,surname: string) {
        this.name   =   name;
        this.surname=   surname;
    }

    public setAdress(adress: Adress){
        this.adress =   adress;
    }
}

class Adress{
    city    :   string;
    street  :   string;

    constructor(city: string, street: string){
        this.city   =   city;
        this.street =   street;
    }
}

const userIn = new User('Laura','Abella');
const adressIn = new Adress('New York','7th Aveniue 35-42');

userIn.setAdress(adressIn);

console.log(userIn);

