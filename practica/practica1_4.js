// Practica 1_4.js

/*
Programa una función que repita un texto x veces, 
pe miFunción('Hola mundo',3)
*/

// let miFuncion= (text,times)=>{
//     for (let i = 0; i < times; i++){
//         console.log(text);
//     };
// };

// miFuncion('hola Mundo',parseInt(3));

//solución del profe

// const repetirTexto = (texto="",veces = undefined)=>{
//     if (!texto){
//         // si coloco el return no va a seguir leyendo lo demás del condicional
//         return console.warn("No ingresaste un texto")
//     };
//     // otra manera de hacer el if
//     if (veces === undefined){return console.warn("No ingresaste el número de vecces")};
//     // otra manera de hacer el if
//     if (veces === 0)return console.error("El número de veces no puede ser 0");
//     if (Math.sign(veces) === -1){
//         // si coloco el return no va a seguir leyendo lo demás del condicional
//         return console.warn("El número de veces no puede ser negativo")
//     };
//     for ( let i = 0; i <= veces; i ++){
//         console.info(`${texto}, ${i}`);
//     };
// };

// repetirTexto("Hola Mundo",3);// resultado esperado
// repetirTexto("Hola Mundo",0);// El número de veces no puede ser 0
// repetirTexto("Hola Mundo",-3); // El número de veces no puede ser negativo
// repetirTexto("Hola Mundo");// No ingresaste el número de vecces
