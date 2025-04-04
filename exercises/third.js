/*
    * un objeto es una colección de imformación que me permite dar información del objeto
    * Documentación en Mozilla.com
*/

//cadena de texto String
let nombre = "Julian";
let apellido = "Restrepo";
let lorem = "         lorem ipson";

//palabra 'new' utilizada para general un nuevo objeto del tipo que le pido en este caso de tipo string
let saludo = new String("HOLA MUNDO");

console.log(nombre,apellido,saludo);

//propiedad length para obtener la longitud de la cadena
console.log(nombre.length,apellido.length,saludo.length);

//método que me permite poner toda la cadena de texto en mayusculas o minusculas
console.log(nombre.toUpperCase(),apellido.toLowerCase());

//método que me permied buscar una palabra en un parrafo
console.log(lorem.includes("lorem"));

//método que me permite quitar los espacios en blanco al rededor del texto
console.log(lorem.trim());

//método que me separa cada caracter con un espacio en la cadena
console.log(lorem.split(""));
