// Practica 8_25.js

/*
Programa una función que dado un arreglo de elementos, 
elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) 
devolverá ["x", 10, 2, "10", true].
*/

const miFuncion = (arr = undefined) =>{
    if ( arr === undefined) return console.error(`No ingresaste un tipo de dato`);

    if (!(arr instanceof Array)) return console.error(`El tipo de dato ingresado no es el correcto`);

    for (let i = 0; i< arr.length; i++){
        for (let j = 1; j< arr.length - 1;i++){
            if (arr[i] === arr[j]){
                arr.splice(arr[j],1);
            };
        };
    };
    return console.info(arr);

};

// miFuncion("d");
// miFuncion(2);
// miFuncion(true);
miFuncion([1,2,3,4]);
miFuncion([1,2,2,3,4,4]);
miFuncion();
