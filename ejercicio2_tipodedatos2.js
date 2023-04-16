// Tipo de dato boolean
var bandera = false;
console.log(typeof bandera);

// Tipo  de dato function 
function mifunction(){}
console.log(typeof mifunction);

// Tipo de dato Symbol
var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo);

// Tipo clase es una function 
class Persona{
    constructor (nombre,apellido){
        this.nombre =  nombre;
        this.apellido = apellido;
    }
}

console.log(typeof Persona);

// Tipo undefined
var x;
console.log (typeof x);

x = undefined;
console.log(typeof x);

// ausencia de valor 
var y = null;
console.log(typeof y)
