const Mage = require('./Mage');
const Thief = require('./Thief');
const Warrior = require('./Warrior');

const arthur = new Mage('Arthur', 90, 4, 2, 14);
const lucas = new Thief('Lucas', 140, 22, 8);
const gabriel = new Warrior('Gabriel', 200, 14, 12, 4);

console.table({arthur, lucas, gabriel});
gabriel.switchStance()
arthur.attack(gabriel);
lucas.attack(arthur)
console.table({arthur, lucas, gabriel});