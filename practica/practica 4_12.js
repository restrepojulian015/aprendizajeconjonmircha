// practica 4_ 12

/*
Programa una función que determine si un número es primo 
(aquel que solo es divisible por sí mismo y 1) o no, 
pe. miFuncion(7) devolverá true.
*/

// const miFuncion = (numero = undefined) => {
//     if (numero === undefined || numero === 0) {
//       throw new Error('No ingresaste un valor o ingresaste 0');
//     }
  
//     if (typeof numero !== 'number') {
//       throw new Error('Ingresa por favor un tipo de dato correcto (Warning)');
//     }
  
//     if (numero <= 0) {
//       throw new Error('El número ingresado debe ser positivo (Warning)');
//     }
  
//     let esPrimo = true;
//     let i = 2;
//     while (i * i <= numero) {
//       if (numero % i === 0) {
//         esPrimo = false;
//         break;
//       }
//       i++;
//     }
  
//     if (esPrimo) {
//       console.info(`El número ${numero} es primo`);
//     } else {
//       console.info(`El número ${numero} no es primo`);
//     }
//   };

//   miFuncion(7)

//Solución del profe
// const numeroPrimo = (numero = undefined) =>{
//     if (numero === undefined) return console.warn('No ingresaste un número');

//     if ( typeof numero !== 'number') return console.warn(`El valor "${numero}" ingresado.No es un número`);

//     if (numero === 0) return console.error('El Número no puede ser 0');

//     if (numero === 1) return console.error('El Número no puede ser 1');

//     if (Math.sign(numero) === -1) return console.error('El Número no puede ser negativo');

//     let divisible = false;

//     for ( let i = 2 ; i < numero; i++){
//         if ((numero % i) === 0){
//             divisible = true;
//             break;
//         };
//     };

//     return (divisible) ?
//         console.log(`El número ${numero},No es primo`)
//             :console.log(`El número ${numero},Es primo`)
// };

// numeroPrimo();//No ingresaste un número
// numeroPrimo('320');//El valor "320" ingresado.No es un número
// numeroPrimo(true);//El valor "true" ingresado.No es un número
// numeroPrimo(1);//El Número no puede ser 1
// numeroPrimo(0);//El Número no puede ser 0
// numeroPrimo(-13);//El Número no puede ser negativo
// numeroPrimo(200);//El número 200,No es primo
// numeroPrimo(7);//El número 7,Es primo
