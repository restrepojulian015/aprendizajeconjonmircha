// Pracitca 3 _11.js

/*
Programa una función que calcule el factorial 
de un número (El factorial de un entero positivo n, 
se define como el producto de todos los números enteros 
positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
*/

// solución del profe

// const factorial = (numero = undefined)=>{
//     if ( numero === undefined) return console.warn('No ingresaste un número');
//     if ( typeof numero !== 'number') return console.error(`EL valor "${numero} ingresado.No es un número"`);
//     if ( numero === 0) return console.error('El número no puede ser 0');
//     if (Math.sign(numero) === -1) return console.error('El número no puede ser negativo');

//     let factorial = 1;

//     for (let i = numero; i > 1; i--){
//         factorial *= i;
//     };

//     return console.info(`El factorial de ${numero} es ${factorial}`);
// };


// factorial(); // No ingresaste un número
// factorial('5'); // EL valor "5 ingresado.No es un número"
// factorial(0);// El número no puede ser 0
// factorial(-5); // El número no puede ser negativo
// factorial(5); // 120

