// Pracitca 3_10.js

/*
Programa una función que reciba un número 
y evalúe si es capicúa o no (que se lee igual en un 
sentido que en otro), pe. miFuncion(2002) devolverá true.
*/

// const miFuncion = (numero="")=>{
//     (!numero) ?
//         console.log("No ingresaste un número") 
//             : (numero.toString() === numero.toString().split('').reverse().join('')) ?
//                 console.info(`El número: ${numero} es capicúa`)
//                     : console.info(`El número ${numero} no es capicúa`)
// };

// miFuncion(1001);//El número: 1001 es capicúa
// miFuncion(2002);//El número: 2002 es capicúa
// miFuncion(2012);//El número 2012 no es capicúa

//solución del profesor

// const capicua = (numero = 0)=>{
//     if(!numero) return console.warn('No ingresaste un número');
//     if (typeof numero !== "number") return console.error(`El valor ${numero} ingresado no es número`);

//     numero = numero.toString();
//     let alReves = numero.split('').reverse().join('');

//     return(numero === alReves) ?
//         console.info('si es caícúa')
//             : console.info("no es capicúa")
// };

// capicua();// No ingresaste un número
// capicua('19');// El valor 19 ingresado no es número
// capicua({});//El valor [object Object] ingresado no es número
// capicua(2000);// no es capicúa
// capicua(2002);// si es caícúa