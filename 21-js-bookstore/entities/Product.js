module.exports = class Product {
    constructor(name, description, price, inStock = 0){
        this.name = name;
        this.description = description;
        this.price = price;
        this.inStock = inStock;
    }

    // Método para adicionar estoque
    addToStock(quantity){
        this.inStock += quantity;
    }
    // Método para remover estoque
    removeFromStock(quantity){
        this.inStock -= quantity;
    }
}