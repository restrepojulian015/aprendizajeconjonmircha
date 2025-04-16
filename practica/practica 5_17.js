// Practica 5 _17

/*
Programa una función que dada una fecha válida 
determine cuantos años han pasado hasta el día de 
hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
*/

// const calcularAnios = (fecha = undefined) =>{
//     if (fecha === undefined) return console.warn("No ingresaste la fecha");

//     if(!(fecha instanceof Date)) return console.warn("El valor que ingresaste No es una fecha valida");

//     let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
//     aniosEnMS = 1000 * 60 * 60 * 24 * 365,
//     aniosHumanos = Math.floor(hoyMenosFecha/aniosEnMS);

//     return (Math.sign(aniosHumanos) === -1) ?
//         console.info(`Faltan ${Math.abs(aniosHumanos)} años humanos para el ${fecha.getFullYear()}`) 
//             : (Math.sign(aniosHumanos) === 1) ?
//                 console.info(`Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}`)
//                     : console.info(`Estamos en el año actual ${fecha.getFullYear()}`);
// };

// calcularAnios();
// calcularAnios({});
// calcularAnios(false);
// calcularAnios(new Date());
// calcularAnios(new Date(2006,1,26));
// calcularAnios(new Date(2026,1,26));


