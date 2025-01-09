// Deposit: Deverá possuir um atributo para o valor e um atributo para a data de criação.
module.exports = class Deposit {
    // O construtor é chamado quando uma nova instância da classe é criada
    constructor(value) {
        // Atribui o valor passado como argumento à propriedade 'value' da instância
        this.value = value;
        // Atribui a data e hora atuais à propriedade 'createdAt' da instância
        this.createdAt = new Date();
    }
}