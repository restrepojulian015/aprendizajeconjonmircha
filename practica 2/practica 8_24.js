/*
// Practica 8_24

/*
 Programa una función que dado un arreglo de números devuelva un objeto 
 con dos arreglos, el primero tendrá los numeros ordenados en forma 
 ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) 
 devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
*/

// const miFuncion = (arr = undefined)=>{
//     if (!arr) return console.error('Ingresa un dato correcto');

//     if (!(arr instanceof Array)) return console.error('Por favor ingresa un tipo de dato correcto');

//     for (let num of arr){
//         if (typeof num !== 'number') return console.error(`El valor: ${num} no es un tipo de dato corecto`);
//     };

//     let n = arr.length;
//     for ( let i = 0; i < n -1; i++){
//         for ( let j = 0; j < n - i - 1; j++){
//             if (arr[j] > arr[j + 1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j + 1] = temp;
//             };
//         };
//     };

//     let arrMayores = arr;
//     let m = arr.length;
//     for ( let i = 0; i < m -1; i++){
//         for ( let j = 0; j < m - i - 1; j++){
//             if (arr[j] < arr[j + 1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j + 1] = temp;
//             };
//         };
//     };
//     let arrMenores = arr;
//     return ({
//         arrMayores,
//         arrMenores,  
//     });
// };

// console.info(miFuncion([2,3,4,1]));
// console.info(miFuncion([2,3,"f",1]));
// console.info(miFuncion(new Date()));
// console.info(miFuncion(2));
// console.info();

// solución del profe

// const ordenarArrelgo = (arr = undefined) =>{

//     if(arr === undefined) return console.warn('No ingresaste un arreglo de números');

//     if (!(arr instanceof Array)) return console.error('El valor que ingresaste no es un arreglo');

//     if(arr.length === 0) return console.error('El arreglo esta vacío');

//     for (let num of arr){
//         if (typeof num !== 'number') return console.error(`El valor "${num}" ingresaste,No es un nUmero`);
//     };

//     return console.info({
//         arr,
//         asc: arr.map(el => el).sort(),
//         desc: arr.map(el => el).sort().reverse()
//     });

// };

// ordenarArrelgo();
// ordenarArrelgo("gola");
// ordenarArrelgo([]);
// ordenarArrelgo([3,4,{}]);
// ordenarArrelgo([6,5,4,5,67]);
