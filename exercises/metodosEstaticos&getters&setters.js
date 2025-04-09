// // métodos estáticos, getters y setters

// /*
// Un método estatico es aquel que se ejecuta sin la necidad de crear el objeto
// */

// class Perro{
//     constructor(nombre,raza){
//         this.nombre = nombre;
//         this.raza = raza
//     };

//     //static method
//     static que(){
//         console.log("un perro");
//     }
//     // obtener la propiedad raza
//     get getRaza(){
//         return this.raza;
//     };

//     //darle un valor a la propiedad raz
//     set setRaza(raza){
//         this.raza = raza;
//     };
// };

// const scooby = new Perro("scooby","macho");

// Perro.que();
// scooby.getRaza; // no va a imprimir nada,  ya que se trabaja como un atributo
// console.log(scooby.getRaza);
// scooby.setRaza = "hembra";// cambio el valor de raza del objeto scooby
// console.log(scooby.getRaza);