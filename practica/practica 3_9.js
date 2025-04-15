//Practica 3_9

/*
 Programa una función que obtenga un numero aleatorio entre 501 y 600.
*/

// const miFuncion = (min=undefined,max=undefined)=>{
//     ((min === undefined || max === undefined) || (min === NaN || max === NaN))?
//         console.warn("Error, debes tener un limite inferior y superior")
//             : console.log(`numero aleatorio: ${Math.random() * (max-min) + min}`);
// };

// miFuncion(); //Error, debes tener un limite inferior y superior
// miFuncion(501);//Error, debes tener un limite inferior y superior
// miFuncion('l','j');//numero aleatorio: NaNl
// miFuncion(501,600);//numero aleatorio: NUMERO ALEATORIO

//solución del profesor

// const aleatorio = ()=>{console.info(Math.round((Math.random()* 100)+500))};
// aleatorio(); //NUMERO ALEATORIO