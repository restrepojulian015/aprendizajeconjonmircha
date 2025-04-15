// // funciones anonimas autoejecutables

// /*
// significa que es una función en la cual englo todo el código que quiero ejecutar
// */

// // Función anónima autoejecutable

// (function(){
//     //Código de la función
//     //Este es uno de los pocos casos que se necesita ";" para la función
//     console.log("Mi primer IIFE");
// })();// muy importante el ";" final

// (function(d,w,c){
//     //Código de la función
//     //Este es uno de los pocos casos que se necesita ";" para la función
//     console.log("Mi segunda IIFE");
//     console.log(d);//imprime document
//     console.log(w);//imprime window
//     console.log(c);//imprime console
// })(document,window,console);/*
// Estoy pasando los parámetros (document,window,console) a los parámetros (d,w,c)
// */

// //Otros formatos de escribir funciones anónimas

// // la Crockford (JavaScript The Good Parts)
// ((function(){
//     console.log("Versión Crockford");
// })());

// //La Uniria
// +function(){
//     console.log("Versión Uniria");
// }();

// //Facebook
// !function(){
//     console.log("Versión Facebook");
// }();