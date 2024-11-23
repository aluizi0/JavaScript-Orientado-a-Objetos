class Property{
    constructor(area, price){
        this.area = area;
        this.price = price;
    }
    getPricePerSquareMeter(){
        return this.price / this.area;
    }
}
class House extends Property{}

const land = new Property(200, 50000)
const someHouse = new House(120, 200000)

console.log(land);
console.log(someHouse);
console.log(someHouse instanceof Property);

class Apartament extends Property{
    constructor(area, price, number){
        super(area, price);
        this.number = number;
    }

    getFloor(){
        //return `Apartament is on the ${Math.floor(this.number / 10)} floor`;
        return this.number.slice(0, -2);
    }
}

const apt = new Apartament(100, 200000, '12A');

console.log(apt);
console.log(apt.getFloor());