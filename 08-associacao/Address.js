class Address {
    constructor(street, number, neighborhood, city, state){
        this.street = street
        this.number = number
        this.neighborhood = neighborhood
        this.city = city
        this.state = state
    }

    fulladdress(){
        return `Rua ${this.street}, N: ${this.number}, Bairro: ${this.neighborhood}, Cidade/Estado: ${this.city}/${this.state}`
    }
}

module.exports = Address