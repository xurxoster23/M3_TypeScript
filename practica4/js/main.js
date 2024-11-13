// ** Interfaces y Clases Abstractas **
var articleIn = {
    sku: 'A231',
    description: 'Lorem1 ipsum .......',
    price: 10
};
console.log(articleIn); // NO Error ya que la propiedad stock es opcional
var articleIn_01 = {
    sku: 'A25678',
    description: 'Loren Ipsum ....',
    price: 12,
    stock: 10
};
console.log(articleIn_01);
// ** Clases en Typescript **
var Article_02 = /** @class */ (function () {
    function Article_02(id, name, description) {
        this.id = id;
        this._name = name;
        this.description = description;
    }
    Article_02.prototype.setStock = function (stock, securityStock) {
        this.stock = stock;
        this.securityStock = securityStock;
    };
    Article_02.prototype.getAvaliableStock = function () {
        return this.stock = this.securityStock;
    };
    Object.defineProperty(Article_02.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    return Article_02;
}());
var articleIn_02 = new Article_02('A023', 'tuerca', 'Lorem Ipsum...');
articleIn_02.setStock(200, 50);
articleIn_02.name = 'tuerca 23-V Especial';
console.log(articleIn_02);
// * Miembros estáticos en TypeScript *
var MessageDate = /** @class */ (function () {
    function MessageDate() {
    }
    MessageDate.getMessageDate = function (date) {
        return "".concat(this.days[date.getDay()], ", ").concat(this.days[date.getDay()], " / ").concat(date.getMonth(), " / ").concat(date.getFullYear());
    };
    MessageDate.days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    return MessageDate;
}());
var birthday = new Date(1978, 1, 19);
console.log(MessageDate.getMessageDate(birthday));
