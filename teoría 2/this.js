//this

/**
 * El this es una palabra que hace referencia al 
 * objeto en el cual se está trabajando para invocar propiedades
 * y métodos según su contexto
 */

/**
 * El this depende del contexto, si se utilizará sin nigún contexto,
 * haría referencia al object window
 */

// console.info(this);// imprime el objeto window
// this.nombre = "contexto global";
// console.info(this.nombre)//imprime "contexto global"
// function imprimir(){
//     console.log(this.nombre);
// }

// imprimir()//imprime contexto global


// const obj = {
//     nombre: "contexto global",
//     imprimir: function(){
//         console.log(this.nombre);
//     }
// }

// obj.imprimir();// imprime "contexto global"

// const obj2 = {
//     nombre: "contexto global 2",
//     imprimir
// };

// obj2.imprimir();// imprime "contexto global"


// const obj3 = {
//     nombre: "contexto objeto 3",
//     imprimir: ()=>{
//         console.log(this.nombre);
//     }
// }

// obj3.imprimir();
 /***
 * me imprime el "contexto global" ya que las arrow
 * function hace referencia al contexto global, por eso
 * se recomienda no utilizar.
 */


//Clausula: se retorna una función en otra función
// function Persona (nombre){
//     this.nombre = nombre;
//     // return console.log(this.nombre);
//     return function(){
//         console.log(this.nombre);
//     };
// };

// let jon = new Persona("jhon");
// jon();// me devulve contexto global

/**
 * Me devuelve "contexto global", ya que cuando creo una función
 * anonima, va a crear un nuevo scope, por lo tanto el this.nombre
 * que se define dentro de la función persona, en este momento no va a estar
 * definida, por lo tanto me devulve el this.nombre del contexto
 * global.
 */


//Para solucionar esto se puede hacer lo siguiente

// function Persona2 (nombre){
//     this.nombre = nombre;
//     this.logNombre = () => (console.log(this.nombre))
// };

// let juan = new Persona2("juan");
// juan.logNombre();// me devulve juan0

