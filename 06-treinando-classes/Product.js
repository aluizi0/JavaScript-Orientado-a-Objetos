class Product {
    constructor(name, description, price, inStock){
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addToStock(quantity){
        this.inStock += quantity
    }

    calculateDiscount(percent){
        return this.price - (this.price * percent / 100)
    }
}

const product1 = new Product("Smartphone", "Aparelho de telefone", 1000, 15)
product1.addToStock(99)
product1.calculateDiscount(10)
const priceWithDiscount = product1.calculateDiscount(10)


console.log(product1) // Product { name: 'Smartphone', description: 'Aparelho de telefone', price: 1000, inStock: 5 }
console.log(priceWithDiscount) // 900