// // Clases y Herencia

// class Animal{
//     constructor(nombre,edad){
//         this.nombre = nombre;
//         this.edad = edad;
//     };
// };

// //Métodos
// Animal.prototype.saludar = function(){
//     console.log(`hola soy ${this.nombre} y hago ruido`);
// }
// Animal.prototype.correr = function(){
//     console.log(`corrooooooo ${this.edad}`);
// };

// //otra clase
// class Gato extends Animal{
//     constructor(nombre,edad,genero,tamanio){
//         super(nombre,edad);
//         this.genero  = genero;
//         this.tamanio = tamanio;
//     };
// };

// //Métodos
// Gato.prototype.ruido= function(){
//     console.log("MIAUUUU");
// }

// // instancio una variable a partir de mi clase Animal
// const jaguar = new Animal("pardo",19);

// // instancio una variable a partir de mi clase Gato
// const gatico = new Gato("crash",2,"femenino",4);

// console.log(gatico);
// gatico.ruido();

// console.log(jaguar);
// jaguar.saludar();
// jaguar.correr();
