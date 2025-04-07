// // Manejo de Errores

// try {
// // El código que se va a tratar de ejecutar va a estar en el try
//     console.log("En el Try se agrega el código a evaluar");
// } catch (error) {
//     // El código que se va a ejecutar si se produce un error
//     console.log("Catch, captura cualquier error surgido o lanzado en el try");
// }finally{
//     // Se ejecutará siempre al final de un bloque try-catch
//     console.log("Finally, se ejecuta siempre, independientemente de si se produjo un error");
// }
// // Se puede ejecutar el finally en el lado del back, en la apertura y cierre de la información o en la apertura de una base
// // de datos, para asegurarse de que se cierra correctamente.

// // Como personalizar los mensajes

// try {
//     let numero = 10;

//     // isNaN me verifica que si sea un número, o mejor dicho que no lo sea
//     if (isNaN(numero)){
//         throw new Error('El caracter introducido no es un número');
//     }
//     console.log(numero*numero)
// } catch (error) {
//     console.log(`Se produjo el siguiente error: ${error}`)
// }