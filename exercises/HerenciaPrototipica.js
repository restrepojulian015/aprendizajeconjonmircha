// Herencía Prototípada
//const animal
//const animal = {
//     nombre: "snoopy",
//     sonar(){
//         console.log("Hago sonidos por que estoy vivo")
//     },
// };

// const animal2 = {
//     nombre: "Lola bunny",
//     sonar(){
//         console.log("Hago sonidos por que estoy vivo")
//     },
// };

// console.log(animal);
// console.log(animal2);

/*
Para crear una clase y evitar el problema anterior se hace con una función constructora
*/

// class Animal {
//      constructor(nombre, genero) {
//          //Atributos
//          this.nombre = nombre;
//          this.genero = genero;
//      }

// }
// // lOS MÉTODOS QUE NIO QUIERO QUE SE ME REPITAN VAN POR FUAERA, así no se me repiten
// Animal.prototype.sonar = function () {
//      console.log(`Hola me llamo ${this.nombre}, mi genero es ${this.genero}`);
// };

// //Herencia Prototipica
// class Perro extends Animal{
//     constructor(nombre, genero, tamanio) {
//         super(nombre, genero);
//         this.tamanio = tamanio;
//     }
// };

// //Sobre escritura del método padre al hijo
// Perro.prototype.sonar = function(){
//     console.log(`Hola, soy un perro y ,mi sonido es un ladrido`)
// };

// Perro.prototype.ladrar = function(){
//     console.log("GUAU GUAU");
// };

//  const snoopy = new Perro("Snoopy","Macho","Mediano"),
//      LolaBuny = new Animal("Lola Bunny","Hembra");

//  console.log(snoopy);
//  console.log(LolaBuny);

//  //De esta manera aun puedo ejecutar los métodos de la clase madre
//  LolaBuny.sonar();
//  snoopy.sonar();
//  snoopy.ladrar(); //Este método no existe en la clase Animal

