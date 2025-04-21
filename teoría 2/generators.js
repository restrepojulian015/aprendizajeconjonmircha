//Generators

/**
 * Es una función que me permite trabajar con la interfaz de una manera más amigable,
 * me sirve para volver iterable una función
 */

//sintaxis de un generador

// function* iterable (){
//     // yield  viene siendo al return, donde se va a detener la función
//     yield "hola";

//     console.log("hola 2");

//     yield " hola 2";

//     console.log("hola 3");

//     yield "hola 3"
// }

// let iterador = iterable();

// console.log(iterador.next()); // {value: 'hola', done: false}

// console.log(iterador.next());// hola 2 {value: ' hola 2', done: false}

//Esto se puede hacer de manera automatica

// for(let y of iterador){
//     console.log(y);// me va a imprimir todo lo que tiene mi función iterable
// }

//Esta es una manera dee guardar los yield de la función
// const arr = [...iterable()];

// console.log(arr);//['hola', ' hola 2', 'hola 3']

// function cuadrado (valor){
//     setTimeout(()=>{
//         return console.log({valor, resultado: valor * valor})
//     },Math.random()* 10000);

//     // return {
//     //     valor,
//     //     resultado: valor*valor
//     // };
// }

// function* generador(){
//     console.log("Inicia generator");
//         yield cuadrado(0);
//         yield cuadrado(1);
//         yield cuadrado(2);
//         yield cuadrado(3);
//         yield cuadrado(4);
//         yield cuadrado(5);
//     console.log("Termina generator");
// }

// let gen = generador();

// for(let y of gen){
//     console.log(y);
// };

//Al final de esta linea de codigo se va a imprimir lo siguiente:
// Inicia generator
// undefined
// Termina generator
// {valor: 2, resultado: 4}
// {valor: 0, resultado: 0}
// {valor: 4, resultado: 16}
//  {valor: 5, resultado: 25}
// {valor: 3, resultado: 9}

/**
 * Esto debido a que cuando imprime el yield, aun no ha retornado el valor, 
 * despues de que lo devuelva, segú el tiempo aletorio, se imprime lo que debe devolver cada yield
 */


/**
 * Este es un caso de asíncronia no bloqueante, porque se va ejecutando cada uno de
 * los yield sin que termine el anterior;
 */