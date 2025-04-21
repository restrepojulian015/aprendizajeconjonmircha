// Sets

/**
 * Es una estructura similar a un array pero de datos únicos, solo permite un tipo de dato
 */

// const set = new Set([1,2,3,4,5,6,4,true,true]);

// console.log(set);
/**
 * En este caso no se puede utilizar length, se utiliza size
 */

// console.log(set.size);//7

//Como añadir elementos, si el elemento ya está en el set, no lo agregara

// set.add("hola");
// set.add(2);
// set.add(false);
// set.add(false);
// set.add("hOla");

// console.log(set);

// for (item of set){
//     console.log(item);
// }

//Se puede recorrer con un forEach()
// console.log(`ForEach`);
// set.forEach(item => console.log(item));

//cómo se puede obtener el valor del set

// let arr = Array.from(set);

// console.log(arr[0]);
// console.log(arr[2]);

//Método para borrar

// set.delete("hOla");
// console.log(set);

//Método para comprar si existe

//  console.log(set.has("hola"));//devulve true

//Método para limpiar

// set.clear();
// console.log(set);// set(0) {size: 0}