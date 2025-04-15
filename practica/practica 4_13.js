// practica 4_13

/*
Programa una función que determine si un número es par o impar, 
pe. miFuncion(29) devolverá Impar.
*/

// const miFuncion = (numero = null) =>{
//     (!numero) ?
//         console.warn('no ingresaste un dato')
//             : (typeof numero !== 'number') ? 
//                 console.warn('no ingresaste un número')
//                     : (Math.sign(numero) !== 1) ?
//                         console.warn('no ingresaste un número positivo',)
//                             : (numero % 2 === 0)?
//                                 console.log(`El número ${numero} es par`)
//                                     : console.log(`El número ${numero} es impar`);
// };

// miFuncion();// no ingresaste un dato
// miFuncion("l");// no ingresaste un número
// miFuncion({});// no ingresaste un número
// miFuncion(7);// El número 7 es impar
// miFuncion(12);// El número 12 es par

//solución del profe
// const numeroImpar = (numero = undefined) =>{
//     if (numero === undefined) return console.warn('No ingresaste un número');

//     if(typeof numero !== 'number') return console.error(`El valor "${numero} ingresado, No es un número"`);

//     return ((numero % 2 )=== 0) ?
//         console.info(`El numero "${numero}" es Par`)
//             :console.info(`El numero "${numero}" es Par`);
// };

// numeroImpar();//No ingresaste un número
// numeroImpar("23");//El valor "23 ingresado, No es un número"
// numeroImpar(-398);//El numero "-398" es Par
// numeroImpar(10);//El numero "10" es Par
