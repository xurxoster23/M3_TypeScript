// ** Herencia y composición de Clases **
class ComputerOrder {
    constructor(id, date, userId) {
        this.id = id;
        this.date = date;
        this.userId = userId;
    }
    addPosition(position) {
        this.positions.push(position);
    }
    getPosition() {
        return this.positions;
    }
}
// * Implementación de la herencia de clases *
class Employee {
    constructor(name, surname, dni, birthDay) {
        this.name = name;
        this.surname = surname;
        this.dni = dni;
        this.birthDay = birthDay;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getSurname() {
        return this.surname;
    }
    setSurname(surname) {
        this.surname = surname;
    }
    getDNI() {
        return this.dni;
    }
    setDNI(dni) {
        this.dni = dni;
    }
    getbirthDay() {
        return this.birthDay;
    }
    setbirthDay(birthDay) {
        this.birthDay = birthDay;
    }
}
class Manager extends Employee {
    constructor(name, surname, dni, birthDay, role) {
        super(name, surname, dni, birthDay);
        this.role = role;
    }
}
const manager = new Manager('Juan', 'López', '444336987J', new Date('1978-01-19'), 'ventas');
console.log(manager.getName());
console.log(manager.getSurname());
console.log(manager.getDNI());
console.log(manager.getbirthDay());
console.log(manager.role);
// También podemos usar la clase padre para Instanciar objetos
let employeeIn = new Employee('Andrea', 'Roa', '44433698K', new Date('1980,2,3'));
console.log(employeeIn.getName());
console.log(employeeIn.getSurname());
console.log(employeeIn.getDNI());
console.log(employeeIn.getbirthDay());
// * Implementar mediante clases Abstractas *
class Price {
}
class ArticlePrice extends Price {
    constructor(regularPrice, savingPercent, currency) {
        super();
        this.regularPrice = regularPrice;
        this.savingPercent = savingPercent;
        this.currency = currency;
    }
    setPrice(regularPrice, savingPercent) {
        this.regularPrice = regularPrice;
        this.savingPercent = savingPercent;
    }
    getPrice() {
        return (this.regularPrice - this.savingPercent) / 100 * (this.regularPrice) + ` ` + this.currency;
    }
}
const articleInPrice = new ArticlePrice(150, 0, '€');
console.log(articleInPrice.getPrice());
articleInPrice.setPrice(200, 50);
console.log(articleInPrice.getPrice());
// * Composición de Clases *
class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    setAdress(adress) {
        this.adress = adress;
    }
}
class Adress {
    constructor(city, street) {
        this.city = city;
        this.street = street;
    }
}
const userIn = new User('Laura', 'Abella');
const adressIn = new Adress('New York', '7th Aveniue 35-42');
userIn.setAdress(adressIn);
console.log(userIn);
