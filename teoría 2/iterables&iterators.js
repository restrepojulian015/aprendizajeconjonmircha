//Iterables & iterators

/**
 * 
 */


// const iterable = [1,2,3,4,5];

//Acceder al iterador de mi variable iterable

// const iterador = iterable[Symbol.iterator]();

// console.log(iterable);//[1,2,3,4,5]

// console.log(iterador.next());// {value: 1, done: false}
// console.log(iterador.next());// {value: 2, done: false}
// console.log(iterador.next());//{value: 3, done: false}
// console.log(iterador.next());//{value: 4, done: false}
// console.log(iterador.next());//{value: 5, done: false}

/**
 * Cuando la llave done se vuelve true, significa que ya ha recorrido todo el arrelo,
 * pero esto se vuelve poco sostenible a largo plazo, por lo cual se recomienda hacer 
 * con un ciclo 
 */

// let next = iterador.next();

// while(!next.done){

//     console.log(next.value);
//     next = iterador.next();
// };

//tambien se pued hacer con otro tipos de valores

// const mapa = new Map([
//     ["llave1", "h"],
//     ["llave2", "o"],
//     ["llave3", "l"],
//     ["llave4", "a"]
// ]);

// const itera = mapa[Symbol.iterator]();

// let next2 = itera.next();

// while(!next2.done){
//     console.log(next2.value);
//     next2 = itera.next();
// };