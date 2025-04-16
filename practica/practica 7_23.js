// Practica 7_23

/*
 Programa una función que dado un array de números devuelva un 
 objeto con 2 arreglos en el primero almacena los números pares y 
 en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) 
 devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
*/

// const separParesImpares = (arr = undefined)=>{

//     if (arr === undefined) return console.error('No ingresaste un aarreglo de números');

//     if (!(arr instanceof Array)) return console.error('El valor que ingresaste no es un arreglo');

//     for (let num of arr){
//         if (typeof num !== 'number') return console.error(`El valo "${num}" ingresaso, No es un número`);
//     };

//     return console.info({
//         arr,
//         pares : arr.filter(num => num % 2 === 0),
//         impares : arr.filter(num => num % 2 === 1),
//     });
// };

// separParesImpares();
// separParesImpares("hola");
// separParesImpares([]);
// separParesImpares([1,2,3,4,5,6,7,8,9]);
