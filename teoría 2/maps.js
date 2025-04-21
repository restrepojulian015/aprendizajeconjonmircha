//Maps

/**
 * Es parecido a un diccionario
 */

// const mapa = new Map();

//para agregar valores

// mapa.set("nombre","jon");
// mapa.set("apellido","restrepo");

// console.log(mapa);//Map(2) {'nombre' => 'jon', 'apellido' => 'restrepo'}

//Para obtener el tamaño

// console.log(mapa.size);//1

//Método para corroborar si existe una llave
// console.log(mapa.has("nombre"));// True

//Método para obtener el valor de la llave

// console.log(mapa.get("nombre"));//jon

//Como cambiar el valor de una llave

// mapa.set("nombre","julian");

// console.log(mapa);// Map(2) {'nombre' => 'julian', 'apellido' => 'restrepo'}

//Método para eliminar una llave

// mapa.delete("nombre");
// console.log(mapa);//Map(1) {'apellido' => 'restrepo'}

//Cómo iterar (se esta usando reestructuración),

// for (let [key,value] of mapa){
//     console.log(`Llave: ${key} - Valor: ${value}`);
// };

//Segunda manera de inicializar mapa

// const mapa2 = new Map([
//     ["nombre","Kneai"],
//     ["edad",7],
//     ["animal","perro"]
// ]);

// console.log(mapa2);// Map(3) {'nombre' => 'Kneai', 'edad' => 7, 'animal' => 'perro'}

//Cómo hacer la destructuración de las llaves y los valores

// const llaves = [...mapa2.keys()],
//     valores = [...mapa2.values()];

// console.log("------");

// console.log(llaves);//['nombre', 'edad', 'animal']
// console.log(valores);// ['Kneai', 7, 'perro']
