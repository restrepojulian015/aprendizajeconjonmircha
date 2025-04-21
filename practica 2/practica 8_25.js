// Practica 8_25.js

/*
Programa una función que dado un arreglo de elementos, 
elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) 
devolverá ["x", 10, 2, "10", true].
*/

// const quitarDuplicados = (arr = undefined)=>{
//     if (arr === undefined) return console.warn('No ingreaste un arreglo de números');

//     if (!(arr instanceof Array)) return console.warn('El valor que ingresaste no es un arreglo');

//     if (arr.length === 0) return console.warn('El arreglo está vacío');

//     return console.info({
    
//         original : arr,
//         // Se utiliza el arr.fitler para filtrar los valores
//         sinDuplicados: arr.filter((value,index,self) => self.indexOf(value) === index)
//     })

// };

// quitarDuplicados();
// quitarDuplicados({});
// quitarDuplicados([]);
// quitarDuplicados(2);
// quitarDuplicados(["x",2,3,4,5,4,"x"]);
// quitarDuplicados();

// //Segunda Manera
// const SegundaQuitarDuplicados = (arr = undefined)=>{
//     if (arr === undefined) return console.warn('No ingreaste un arreglo de números');

//     if (!(arr instanceof Array)) return console.warn('El valor que ingresaste no es un arreglo');

//     if (arr.length === 0) return console.warn('El arreglo está vacío');

//     // return console.info({
//     //     original : arr,
//     //     // Se utiliza el arr.fitler para filtrar los valores
//     //     sinDuplicados: arr.filter((value,index,self) => self.indexOf(value) === index)
//     // })

//     return console.info(
//         {
//             original: arr,
//             // El objeto se, no me permite duplicar elemetos de su contenidpo
//             sinDuplicados: [...new Set(arr)]
//         }
//     );

// };

// SegundaQuitarDuplicados(["x",2,3,4,5,4,"x"]);



