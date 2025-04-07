// prototipos

/*
En POOhay cuatro conceptos muy importantes
- Las clases: un modelo a seguir.
-Los objetos : Es una instancia de una clase
    Atributos: Es una característica del objeto(los atributos son variables dentro del método)
    Métodos: Son las acciones que un objeto puede realizar (son funciones dentro de un objeto)
*/

//Esto no es funcional porque si quiero hacer diferentes objetos del mismo caracter, debo hacer diferentes 
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
//     constructor(nombre, genero) {
//         //Atributos
//         this.nombre = nombre;
//         this.genero = genero;
//     }

// }
// // lOS MÉTODOS QUE NIO QUIERO QUE SE ME REPITAN VAN POR FUAERA, así no se me repiten
// Animal.prototype.sonar = function () {
//     console.log(`Hola me llamo ${this.nombre}, mi genero es ${this.genero}`);
// };

// const snoopy = new Animal("Snoopy","Macho"),
//     LolaBuny = new Animal("Lola Bunny","Hembra");

// console.log(snoopy);
// console.log(LolaBuny);

// //De esta manera aun puedo ejecutar los métodos de la clase madre
// LolaBuny.sonar();

