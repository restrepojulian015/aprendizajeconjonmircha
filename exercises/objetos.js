// //objetos

// let a = new String("Hola");
// console.log(a);

// //un objeto en js es una colección de llaves y valores
// const b = {
//     nombre: "julian",
//     apellido: "Restrepo",
//     edad:19,
//     pasaTimepos: ["correr","trotar","leer"],
//     soltero:true,
//     contacto:{
//         email:"restrepojulian015@gmail.com",
//         telefono:"3003360232"
//     },
//     // dentro de un objeto a las variables se les van a llamar 
//     // atributos/propiedades y las funciones métodos
//     saludar : function(){
//         console.log("Hola");
//     },
//     decirMiNombre : function(variable){
//         console.log(`Mi nombre es ${this.nombre} y mio apellido es ${this.apellido}, ademas me gusta \n ${variable}
//         `);
//     }
// }

// //Dos maneras diferentes de solicitar un atributo o método de un objeto
// console.log(b["nombre"])
// console.log(b.pasaTimepos[1]);
// console.log(b.contacto.telefono);
// b.saludar();
// b.decirMiNombre("bailar");

// //métodos de el objeto objeto que me permite hacer diferentes cosas

// //método que me trae todas las llaves del objeto
// console.log(Object.keys(b));

// //método que me trae todos los valores de objeto
// console.log(Object.values(b))

// //método que me sirve para saber si un atributo pertenece al objeto
// console.log(b.hasOwnProperty("nacimiento")); //false, porque no tengo
// console.log(b.hasOwnProperty("nombre")); //True, porque si lo tengo