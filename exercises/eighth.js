// funciones : una función puede o no recibir parámetros

//Funciones declaradas
function estoEsUnaFuncion(){
    console.log("Uno")
    console.log("dos")
    console.log("tres")
};

//una función que devuelve valor
function unaFuncionQueDevuleveValor(){
    console.log("Uno")
    console.log("dos")
    console.log("tres")
    return "la función ha retornado una cadena de Texto";
};


//funciones que reciben parametros
function saludo(nombre,apellido){
    console.log(`Hola, mi nombre es ${nombre} y mi apellido es ${apellido}`);
};

//función contenida en una variable, se debería declarar con un "const"

const funcionExpresada = function(){
    return "Hola, soy una función expresada";
};

//llamado de la función
estoEsUnaFuncion();

// capturo el retorno de mi función
let valorDeFuncion = unaFuncionQueDevuleveValor();


//imprimo el valor de la variable
console.log(valorDeFuncion);

//invoco la función con parametros
saludo("julian","Restrepo");

// imprimir la variable que contiene la funciuón expresada
console.log(funcionExpresada);

