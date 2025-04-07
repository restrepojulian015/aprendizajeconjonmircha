// // Arrow Functions

// const saludar = ()=> {
//     console.log('Hola');
// };
// saludar();

// //para recibir parámetros
// const saludo = (nombre)=> {
//     console.log(`Hola ${nombre}`);
// };
// saludo("Karla");


// const sumar = (a,b) => {return a + b};
// console.log(sumar(5,7));

// const sum = (a,b,...c) =>{
//     let result = a+b;
//     c.forEach(function(n){
//         result += n;
//     });
//     return result;
// };

// console.log(sum(1,2,3,4,5));

// const numero = [1,2,3,4,5];

// // una manera de recorrer un arreglo
// numero.forEach((i,index) => {console.log(`El elemento ${i} está en la posición ${index}`)});

// const perro = {
//     nombre: "Bobby",
//     /* 
//     si se cambia a una arrow funtion, el .this cambia a un contexto global
//     e imprime el objeto windows y no el objeto perro
//     */

//     // pero si se puee utilizar una functión como objeto literal
//     ladrar(){console.log(this)}
// };

// perro.ladrar();