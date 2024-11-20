const Address = require("./Address");
const Person = require("./Person");

const addr = new Address("Rua das Flores", 123, "Centro", "São Paulo", "SP");
const alulol = new Person("Alulol", addr);

console.log(alulol);
console.log(alulol.address.fulladdress());