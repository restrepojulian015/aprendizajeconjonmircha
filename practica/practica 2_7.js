// Practica 2_7 js

/*
Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro)
, pe. mifuncion("Salas") devolverá true
*/

// const  miFunciion = (cadena)=>{
//     if(!cadena){
//         console.log('Cadena no existente');
//     }else{
//         let palindromo = cadena.split('').reverse().join('');
//         (palindromo !== cadena)? 
//             console.info('no es palindromo')
//                 :console.info('es palindromo');
//     };
// };

// miFunciion('salas');
// miFunciion('hola');  // no es palindromo

//solución del profe

// const palindromo = (palabra="") =>{
//     if(!palabra){
//         console.warn('no hay una palabra o frase')
//     }else{
//         palabra = palabra.toLocaleLowerCase();
//         let alReves = palabra.split('').reverse().join('');
//         return (palabra === alReves)?
//             console.info(`Es palindromo, palabra original: '${palabra}', palabra al reves: '${alReves}'`)
//                 :console.info(`No es palindromo, palabra original: '${palabra}', palabra al reves: '${alReves}'`);
//     };
// };

// palindromo();// no hay una palabra o frase
// palindromo('hola mundo');// No es palindromo, palabra original: 'hola mundo', palabra al reves: 'odnum aloh'
// palindromo('Salas');// Es palindromo, palabra original: 'salas', palabra al reves: 'salas'