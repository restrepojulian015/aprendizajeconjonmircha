// Practica 2_ 6

/*
Programa una función para contar el número de veces que se repite una palabra en un texto largo
, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
*/

// const miFuncion = (text = "",cadena="")=>{

//     if (text){console.warn("no existe la cadena de texto")};
//     if (!cadena){console.warn("no existe la cadena a buscar")}
//     else{
//         const palabras = text.split(/\s+/); // Usa \s+ para dividir por espacios en blanco

//                     // Filtra las palabras que coinciden con la cadena
//                     const resultado = palabras.filter(palabra => palabra === cadena);
                
//                     // Muestra el resultado
//                     console.info(resultado);
// };}
 

// miFuncion('hola mundo adios mundo', 'mundo');

//solución del profe

// const textoEnCadena = (cadena ="",texto="") =>{
//     if(!cadena){console.warn('No ingresaste el texto largo')};
//     if(!texto){console.warn('No ingresaste la palabra a evaluar')};

//     let i = 0,
//     contador = 0;

//     while (i !== -1){
//         i = cadena.indexOf(texto,i);
//         if (i !== -1){
//             i++;
//             contador++;
//         };
//     };
//     return console.info(`la variable texto se repite ${contador} veces`);
// };

// textoEnCadena("hola mundo adios mundo", "mundo")
// textoEnCadena("", "mundo")
// textoEnCadena("hola mundo adios mundo", "")