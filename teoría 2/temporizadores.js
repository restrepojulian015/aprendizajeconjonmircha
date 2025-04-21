// temporizadores

/*
una manera de poder ejecutar aposterior funciones o acciones en js
es mediante tekporizadores

setTimeout: recibe una función callback y un tiempo para ejecutarse.
*/

// console.log("Inicio");
// setTimeout(()=>{
//     console.log(`Ejecutando un setTimeout, esto se ejecuta una sóla vez`);
// },1000);

/*
Esta función solo se va a ejecutar una sola vez, cuando se quiere que se ejecute por 
varias veces, se usa setInterval, el cúal recibe una función callback y un tiempo.
*/
// console.log(`Se ejecutará despues del console "INICIO"`);
// setInterval(()=>{
//     console.log(`Esto es una función setInterval que se ejecuta a los tres segundos`);
// },3000);

/*
la función  olínea de código que se pase dentro del setInterval se ejecutará por 
tiempo indefinido, cada x intervalo de tiempo que se pase en el segundo parámetro que
en este caso es `3000`. 
*/

/*
Para lompiar un setTimeout se usa un clearTimeout, pero para esto se debe
guardar el setTimeOut en una variable para poderse identificar
*/

// let temporizador = setTimeout(()=>{
//     console.log(`Ejecutando un setTimeout, encapsulado en iun temporizador`);
// },1000);


/*
El argumento que recibe un clearTimeout() es la variable que contiene el temporizador
*/
// clearTimeout(temporizador);

// el temporizador no se va a ejeciutar, ya que el clear me lo borra

/*
Se puede hacer lo mismo con el setInterval pero esta vez con un clearInterval 
y almanecezando el el setTimeInteralen una variable
*/

//relog con un setTimeOut

// setInterval(()=>{
//     console.log(new Date().toLocaleTimeString())
// },1000);
