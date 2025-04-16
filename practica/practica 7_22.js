// Practica 7_22

/*
Programa una función que dado un array devuelva el número 
mas alto y el más bajo de dicho array, pe. 
miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
*/

// const arrayMinMax = (arr = undefined)=>{
//     if (arr === undefined) return console.error('No ingresaste un arreglo de númeroa');

//     if (!(arr instanceof Array)) return console.error('El valor que ingresaste no es un arreglo');

//     if (arr.length === 0 ) return console.error('El arreglo está vacío');

//     for (let num of arr){
//         if (typeof num !== 'number') return console.error(`El valor "${num}" ingresado, No es un número`);
//     };

//     return console.info(`Arreglo original: ${arr} \nValor mayor: ${Math.max(...arr)}\nValor minimo: ${Math.min(...arr)}`);

// };

// arrayMinMax();
// arrayMinMax({});
// arrayMinMax([]);
// arrayMinMax([1,"3",4]);
// arrayMinMax([1,2,3,4,5]);