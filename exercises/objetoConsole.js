// objeto console

console.log(console);

// aviso de error
console.error("Esto es un error");


// Aviso de advertencia
console.warn("Esto es un aviso");

//Dar información
console.info("Dar información");

const edad = 12,
    nombre = "Juan";


//interpolación
console.log(`Hola, mi nombre es ${nombre} y mi edad es ${edad}`);

//variantes de interpolación el %s es para string y el %d es edad
console.log("hola, mi nombre es %s y mi edad %d",nombre,edad);

//se limpia la consola
console.clear();

console.log("hola, mi nombre es %s y mi edad %d",nombre,edad);
console.dir(document);

//grupo de console
console.group("Grupo de julian");
console.log("Julian");
console.log("Julian");
console.log("Julian");
console.log("Julian");
console.groupEnd();

//para imprimir una tabla de un objeto
console.table(Object.entries(console).sort());
/*
me va a imprimir por medio de una tabla todos los métodos que tiene
console
*/

const numeros = [1,2,3,4,5],
vocales = ["a","b","c","d"];

console.table(numeros);
console.table(vocales);

//como seria con un objeto

const perro = {
    nombre : "boni",
    nom : "booooni",
    edad : 19,
    direccion : "boi",
};

console.table(perro);

console.clear();

// Me ceunta cuanto tiempo se demora un proceso;
console.time("Cuenta en tiempo");
const arreglo = Array(10000000);

for(let i = 0; i < arreglo.length; i++){
    arreglo[i] = i;
};

// el mensaje que se pone adentro del timeEnd es un alias, debe ser el mismo que el time();
console.timeEnd("Cuenta en tiempo");


/*
Cunado quiera saber cuantas veces se ejecuta un bloque de código
*/

console.clear();

for(let i = 0; i <= 100; i++){
    //console.count me cuenta cuantas veces se ejecuta
    console.count("Código for")
    console.log(i);
};

console.clear();
let x = 1,
y = 2,
pruebaXY = "Se espera que x sea menor que y";

/*
no pasa nada porque la prueba es positiva, si x fuera mayor que y, arrojaria un mensaje
*/
console.assert(x<y,{x,y,pruebaXY});