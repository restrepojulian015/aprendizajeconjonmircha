//Destructuración

/*
Es una nueva forma de asignar valores a valores o objetos
*/


// sin destructuración
const numero = [1,2,3];

let uno = numero[0],
dos = numero[1],
tres = numero[2];

console.log(uno,dos,tres);

// con destructuración

const [one,two,three] = numero;
console.log(one,two,three);

let persona = {
    nombre: 'Julian',
    edad: 18,
    apellido: 'Restrepo'
};

/*
para que la destructuración funcione, la variable que va a recibir el valor del objeto se debe llamar de
la misma manera que la "llave"
*/
let {nombre,edad,apellido} = persona;
console.log(nombre,edad,apellido);