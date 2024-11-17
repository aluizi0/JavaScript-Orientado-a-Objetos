class Book {
    //atributos(caracteristicas do objeto)
    //instanciar um objeto
    
    constructor(title){
        this.title = title
        this.published = false
        
    }

    //metodos (ações do objeto)
    publish(){
        this.published = true
    }
}
// "eragon" instancia da classe
const eragon = new Book("Eragon")
const harryPotter = new Book("Harry Potter")

eragon.publish()

console.log(harryPotter) // Book {}
console.log(eragon) // Book {}

console.log([eragon, harryPotter] instanceof Array) // true