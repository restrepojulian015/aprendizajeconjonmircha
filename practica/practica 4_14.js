// Practica 4_14

/*
Programa una función para convertir grados Celsius 
a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
*/

// const miFuncion = (number= undefined, type = undefined) =>{
//     if (! number){
//         console.warn('No ingresaste un número');
//     }else if (typeof number !== 'number'){
//         console.warn('El tipo de dato de los grados no es correcto');
//     }else if (!type){
//         console.warn('No ingresaste un caracter en el tipo de grados a convertir');
//     }else if (typeof type !== 'string'){
//         console.warn('El tipo de dato no es el correcto');
//     }else if (type.toLocaleUpperCase() !== 'C' && type.toLocaleUpperCase() !== 'F'){
//         console.warn('No ingresaste una letra correcta');
//     }else{
//         if (type === 'C'){
//             console.info(`${(number * 9/5) + 32}°F`)
//         }else{
//             console.info(`${(number -32) * 5/9}°C`)
//         };  
//     };
// };

// miFuncion();// No ingresaste un número
// miFuncion('f');//El tipo de dato de los grados no es correcto
// miFuncion(12,'t');//No ingresaste una letra correcta
// miFuncion(16);//No ingresaste un caracter en el tipo de grados a convertir
// miFuncion(19,"C");//66.2°F
// miFuncion(19,'F');//-7.222222222222222°C

//Solición del profe

// const convertirGrados = (grados = undefined, unidad = undefined) =>{
//     if ( grados === undefined) return console.warn("No ingresaste grados a convertir");
    
//     if(typeof grados !== 'number') return console.warn(`El valor "${grados}" ingresado, No es un número`);

//     if (typeof unidad !== 'string') return console.error(`El valor "${unidad}" ingresado, No es una cadena de texto`);

//     if (unidad.lenth !== 1 || !/(C|F)/.test(unidad))  return console.warn(`valor de unidad reconocido`);

//     if (unidad === "C" ){
//         return console.info(`${(grados * 9/5) + 32}°F`)
//     }else{
//         return console.info(`${(grados -32) * 5/9}°C`)
//     };
// };

// convertirGrados();//
// convertirGrados('2');//
// convertirGrados(2);//
// convertirGrados(2,true);//
// convertirGrados(2,'hola');//
// convertirGrados(2,'E');//
// convertirGrados(2,'C');//
// convertirGrados(2,'F');//

