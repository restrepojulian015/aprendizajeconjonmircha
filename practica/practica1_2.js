// practica 1_2

/*
Programa una función que te devuelve el texto recortado según el 
número de caracteres indicados, pe miFuncion("Hola Mundo",4) //devolvera "Hola"
*/

// function miFuncion(){
//     let texto = prompt('escribe el texto: '),
//     corte = parseInt(prompt('¿hasta qué posición quieres leer? : '));

//     console.log(texto.substring(0,corte));
// };

// miFuncion();

// solución del profe

// const recortartexto = (cadena="", longitud = undefined)=>{
//     (!cadena) ?
//         console.warn("no hay texto") 
//         :(longitud == undefined) ?
//             console.warn('No ingresaste la longitud a recortar')
//                 : console.info(cadena.slice(0,longitud));
// };

// recortartexto('Hola Mundo',4);//hola mundo
// recortartexto();//no hay texto
// recortartexto('Hola Mundo',0);//
// recortartexto('Hola Mundo');// no ingresaste la longitud a recortar