// Practica 6_18

/*
Programa una función que dada una cadena de texto 
cuente el número de vocales y consonantes, pe. 
miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
*/

// const contarLetras = (cadena = undefined)=>{
//     if (!cadena) return console.warn("No ingresaste una cadena de texto");

//     if (typeof cadena !== "string") return console.warn(`El valor ${cadena} ingresado, No es una cadena de texto`);

//     let vocales = 0,
//     consonantes = 0,
//     espacios = 0;

//     for ( let  letra of cadena){
//         if(/[AEIOUÁÉÍÓÚaeiouáéíóú]/.test(letra)){
//             vocales++;
//         }else if (/[ ]/.test(letra)){
//             espacios ++;
//         }else{
//             consonantes++;
//         }
//     };
//     return console.info({
//         cadena,
//         vocales,
//         consonantes,
//         espacios
//     })
// };


// contarLetras();
// contarLetras(3);
// contarLetras("Hola Mundo");
// contarLetras();