//Promesas

/**
 * Una promesa se debe ver como un if else, las promesas van a trabajar con dos recursos principales
 * el resolve y el reject, si la promesa se cumple  se ejecutara el resolve, en caso contrario
 * se ejecutará el reject (ambos métodos)
 */

// function cuadradoPromise(value){
//     //Manejo de erores
//     if (typeof value !== "number") return Promise.reject(
//         new Error (`Error en el tip de dato`)
//     );
//     /**
//      * Una promesa recibe ujna función con los dos valores (resolve, reject);
//      */
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             //El resolve es una especie de return en caso que si se cumpla la promesa
//             resolve({
//                 value,
//                 result : value*value
//             });
//         },0 | Math.random()*1000); 
//     });
// };

//HAY DOS MANERAS PARA TRABAJAR LA ASÍNCRONIA

/**
 * then() es el que va a ejecutar una vez se cumpla, podemos tener tantos como necesitemos.
 * catch() es el que va a manejar el reject, es decir cuando la promesa no se cumple
 */
// cuadradoPromise(0)
//     .then((obj)=>{
//         // console.log(obj);
//         console.log(`Inicio Promise`);
//         console.log(`promsie: ${obj.value}: ${obj.result}`);
//         return cuadradoPromise(1)
//     })
//     /**
//      * Esta es una manera de manejar el callback hell, anidando .then() tras otro .then()
//      */
//     .then(obj =>{
//         console.log(`promsie: ${obj.value}: ${obj.result}`);
//         return cuadradoPromise(1);
//     })
//     .then(obj =>{
//         console.log(`promsie: ${obj.value}: ${obj.result}`);
//         return cuadradoPromise(2);
//     })
//     .then(obj =>{
//         console.log(`promsie: ${obj.value}: ${obj.result}`);
//         return cuadradoPromise("3");
//     })
//     /**
//      * En el cactch se maneja en los errores
//      */
//     .catch();

