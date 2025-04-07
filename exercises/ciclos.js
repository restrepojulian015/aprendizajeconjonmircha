// // ciclos

// let contador = 0;

// // cilo while, se inicia y se termina mientras la condición sea verdadera
// while (contador < 10){
//     console.log(contador);
//     contador ++;
// }

// //ciclo do while, este ciclo se ejeciuta almenos una vez
// do {
//     console.log(contador);
//     contador ++;
// }while (contador < 10);

// /* 
// en el do while, se va a ejecutar por lo menos uba vez, en el while, solo y solo si es verdadero
// */

// /*
// El ciclo for es una variable finita
// */

// // for(inicializacion de la variable; condicion; decremento o incremento){
// //     sentencias que ejecuta el for;
// // }

// for (let i = 0; i < 10; i++) {
//     console.log(i);
    
// }

// let numero = [10,20,30,40,50,60,70,80,90];

// for ( let i = 0; i < numero.length;i++){
//     console.log(numero[i]);
// }

// // variantes del for (for of - for in)

// const julian = {
//     nombre: 'Julian',
//     edad : 18
// }

// // variable for in
// for (const key in julian){
//     console.log(`llave : ${key}- valor :${julian[key]}`);
// }

// // varible for of
// const iterableObject = [1,2,3,4,5,6,7]
// for (const iterable of iterableObject){
//     console.log(iterable);
// }

// // forEach es usada para ejecutar una funcion por cada elemento del aray

// /*
// array.forEach(function(currentValue, index, array) {
//     // Your code here
// });
// */

// const fruits = ['apple','banana','cherry'];


// // la variable fruit funciona como un index, imprimiento cada elememto del arreglo
// fruits.forEach(function(fruit){
//     console.log(fruit);
// });