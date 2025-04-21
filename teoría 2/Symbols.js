//Symbols: Nuevos tipos de datos

/**
 * Es un tipo de dato primitivo; una vez creado un symbol el valor se va a mantener privado
 * y para uso interno; los symbols nos permite crear referenciadores unicos
 */

//Como se define un symbol

// let id = Symbol("id");

// let id2 = Symbol("id");
//Symbol crea una referencia unica

// console.log(id === id2); // false
// console.log(id,id2); // Symbol(id) Symbol(id)

// console.log(typeof id, typeof id2);// symbol symbol

/**
 * Un symbol se declara en una constante y en mayúscula, 
 * adentro del symbol se coloca una etiqueta por la cual 
 *  se le va a identificar "Symbol("etiqueta")"
 */

// const NOMBRE = Symbol("nombre");

// const SALUDAR = Symbol("saludar");

// const persona = {
//     [NOMBRE]:"jon"
// }

// console.log(persona);// {Symbol(): 'jon'}Symbol(): "jon"[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (…)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()


// persona.NOMBRE = "julian"; //cambio://NOMBRE: "julian",Symbol(): "jon"

/**
 * Se crea una propiedad NOMBRE con el valor "julian", pero se mantiene el Symbol(): "jon",
 * esto gracias a los [] (corchetes)
 */


// console.log(persona.NOMBRE);// julian
//Si se quiere llamar al symbol, se debe usar de la siguiente manera
// console.log(persona[NOMBRE]);// jon

//Como recorrer sus propiedades y sus Simbols

//Proiedades

// for(let propiedad in persona){
//     console.log(propiedad);
//     console.log(persona[propiedad]);
// };


/**
 * Así se integra una función de tipo Symbol al objeto, se utililza el nombre del objeto,
 * posteriormente se usa "[]" y dentro de el el nombre de la constante Symbol "SALUDAR",
 * por ultimo se le pasa la funcion que va a estar dentro del Sybol
 */
// persona[SALUDAR] = function(){
//     console.log(`Hola`);
// };

// Como se llama a esta funcion

// persona[SALUDAR]();//hola
/**
 *  El "Symbol" se usa en ocasiones especifícas, se usa para identificadores únicos.
 * Se usa para evitar colisiones.
 * Simula propiedades privadas: los símbolos no aparecen en for...in o Object.keys(), 
 * lo que los hace "ocultos" en cierto sentido.
 */

//Symbols
/**
 * Esto me devuelve una array con los Symbols
 */
// console.log(Object.getOwnPropertySymbols(persona));// [Symbol(nombre), Symbol(saludar)]