//Manejo de promesas con Async - Await

/**
 * Van a esperar a que algo se cumpla para seguir ejecutando el proceso
 */

// function cuadradoPromise(value){
//     if (typeof value !== "number"){
//         return Promise.reject(`Error, en el valor ${value}`);
//     }

//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve({
//                 value,
//                 result: value*value
//             });
//         },0| Math.random()* 1000);
//     });
// };

/**
 * Ejemplo de como hacer una función asíncrona, se utiliza la palabra reservada Async
 * se comienza a trabajar las peticiones Asíncronas a partir de una promesa com la que está arriba
 * (cuadradoPromise())
 */


/**
 * Las funciones Async me ayudan al manejao de las promesas al momento de retornar cuando se ejecuta
 * correctamente y cuando no, es una manera alternativa al .then() y al catch()
 */
// async function funcionAsincronaDeclarada(){
//     try{
//         console.log(`inicio ee Async function`);
//         /**
//          * La palabra await me indica que tengo que tengo que esperar 
//          * el valor de la promesa para poder seguir con la ejecución
//          */
//         let obj = await cuadradoPromise(0);
//         console.log(`Async Function: ${obj.value} ${obj.result}`);

//         obj = await cuadradoPromise(1);
//         console.log(`Async Function: ${obj.value} ${obj.result}`);

//         obj = await cuadradoPromise("2");
//         console.log(`Async Function: ${obj.value} ${obj.result}`);

//         console.log(`Fin de Asycn `);
//     }catch (err){
//         console.log(err);
//     }
// };
// funcionAsincronaDeclarada();

//Cómo se hace expresadamente

//en esta parte el async se debe colocar la palabra reservada "Async" después del igual

// const funcionAsincronaExpresada = async()=>{
//     try{
//         console.log(`inicio de Async function`);
//         /**
//          * La palabra await me indica que tengo que tengo que esperar 
//          * el valor de la promesa para poder seguir con la ejecución
//          */
//         let obj = await cuadradoPromise(0);
//         console.log(`Async Function: ${obj.value} ${obj.result}`);

//         obj = await cuadradoPromise(1);
//         console.log(`Async Function: ${obj.value} ${obj.result}`);

//         obj = await cuadradoPromise("2");
//         console.log(`Async Function: ${obj.value} ${obj.result}`);

//         console.log(`Fin de Asycn `);
//     }catch (err){
//         console.log(err);
//     }
// };
