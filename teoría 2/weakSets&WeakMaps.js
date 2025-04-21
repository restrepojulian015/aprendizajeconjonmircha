//WeakSets & WeakMaps //sets debiles y mapas debiles

/**
 * Las llaves deben ser de tipo objeto; no se pueden iterar, tampoco se pueden borrrar
 * todos los elementos a la vez, tampoco se puede verificar el tamaño
 */


// const ws = new WeakSet();

// let valor1 = {"valor1":1},
//     valor2 = {"valor2":2},
//     valor3 = {"valor3":3};
// solo me deja añadir tipo objeto
// ws.add(valor1);
// ws.add(valor2);
// ws.add(valor3);

// console.log(ws);

// console.log(ws.has(valor1));
// console.log(ws.has(valor3));

//Cómo se borra
// ws.delete(valor2);
// console.log(ws);


//Cómo limpiar los ws

// setInterval(()=>{console.log(ws)},1000);

// setTimeout(()=>{
//     valor1 = null;
//     valor2 = null;
//     valor3 = null;
// },5000)


//WeakMaps

// const wm = new WeakMap();

// let valor11 = {},
//     valor22 = {},
//     valor33 = {};

// wm.set(valor11,1);//Valor 11 toma el valor de 1 
// wm.set(valor22,2);
// wm.set(valor33,3);

//Cómo si existen el el wm

// console.log(wm.has(valor33));//true
