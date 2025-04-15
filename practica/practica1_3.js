// Practica 1_3

/*
programa una función que dado un String te devuelva un Array 
de separados por ciertos caracteres,pe miFuncion('hola que tal','')
devolvera ['hola','que','tal]
*/

// let miFunncion = (text,space)=>{
//     const spac = text.split(space);
//     let array = [];

//     for (let i = 0; i < spac.length; i++){
//         array.push(spac[i]);
//     };
//     console.log(array);

// };

// miFunncion('hola que tal', ' ');

// solución del Profe

// const cadenaAArreglo = (cadena="",separador = undefined)=>{
//     (!cadena) ?
//         console.warn("No ingresaste una cadena de texto")
//             : (separador == undefined) ?
//                 console.warn("No ingresaste el caracter separador")
//                     :console.info(cadena.split(separador));
// };

// cadenaAArreglo("hola mundo"," ");// ['hola' ,'mundo']
// cadenaAArreglo(""," ");//no ingresaste una cadena
