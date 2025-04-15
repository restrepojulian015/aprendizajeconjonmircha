// Practica 2 _8

/*
Programa una función que elimine cierto patrón de caracteres de un texto dado
, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5
*/

//no funciona
// const miFuncion = (...array)=>{
//     array.forEach(e => {
//        let storage = e.repleceAll('xy','');
//        return storage 
//     });
//     console.info(storage);
// };

// miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") ;

// solución del profe

// const eliminarCaracteres = (texto="",patron="")=>{
//     (!texto)?
//         console.warn("No ingresaste un texto")
//             : (!patron) ?
//                 console.warn('No hay un patron')
//                 /*
//                 se usa una Expresión regular para buscar un patrón de texto,
//                 se usa el parámetro 'i' para que no distinga entre mayusculas y minusculas
//                 y se usa el parámetro 'g' para que no se detenga en la primera coincidencia,
//                 dino que qiue siga hasta el final, y se usa el 'patron' como lo que debe buscar
//                  */ 
//                     :console.info(texto.replace(new RegExp(patron,"ig"),""));
// };

// eliminarCaracteres();// No ingresaste un texto
// eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"); //1, 2, 3, 4 y 5
// eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", );// No hay un patron
// eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xy");// z1, z2, z3, z4 y z5
