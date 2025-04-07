// // Parámetros REST & Operador Spread;

// /*
// Son una fomra de virtualmente ir agregando parámetros infinitos a una función o una variable
// */


// // función normar
// function sumar(a,b){
//     return a + b;
// };

// // parámetro rest
// function sum(a,b,...c){
//     let result = a + b;

//     // Se trata a la 'c' cómo un objeto iterable permitiendo ir agregando  mas elementos
//     c.forEach(function(n){
//         result += n;
//     });

//     return result;
// };

// console.log(sum(1,2));

// // A partir del tercer valor se un inicia como un arreglo agregando a la variable result
// console.log(sum(1,2,3,4,5));


// // como funciona el Spred Operator
// const arr1 = [1,2,3,4,5,6],
// arr2 = [7,8,9,10,11,12];

// const arr3 = [...arr1,...arr2];
// console.log(arr3); // [1, 2, 3, 4, 5,6,7,8,9,10,11,12]