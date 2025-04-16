// Practica 6_29

/*
Programa una función que valide que un texto 
sea un nombre válido, pe. miFuncion("Jonathan MirCha") 
devolverá verdadero.
*/

// const validarNombre = (nombre = undefined)=>{
//     if (!nombre) return console.error(`No ingresaste un nombre`);

//     if(typeof nombre !== "string") return console.error(`El valor ${nombre} ingresado, No es una cadena de texto`)
//     // "\s" ES PARA LOS ESPACIOS EN BLANCO
//     let expReg = /^[A-Za-zÑÁáÉÍÓÚéíóú\s]+$/g.test(nombre);

//     return (expReg)?
//         console.info(`${nombre},es un nombre válido`)
//             :console.warn(`${nombre}, No es nombre valido`);
// };

// validarNombre();
// validarNombre(3);
// validarNombre("Julian Andrés");
// validarNombre("123");
// validarNombre();