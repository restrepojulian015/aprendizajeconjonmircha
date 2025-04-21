// Asíncronía y el evento Loop

/*
js permite varías solicitudes de red sin bloquear el hilo principal
*/

//PROCESAMINETO

/*
Los "thread" son las unidades básicas de ejecucuión de cada proceso que realiza nuestra
máquina, por ejemplo: cada ves que tú abres el navegador o editor de código en tú computador
se levanta un proceso, e internamente esos procesos pueden correr un hilo o varios hilos. dependiendo el lenguaje
hay lenguajes que trabajan en un hulo "single thread" o, varios hilos "milti thread", 
javaScript es single thread
*/

//OPERACIONES DE CPU Y OPERACIONES DE ENTRADA (I/0)

/*
En un procesamiento en el código de una aplicación podemos tener operaciones de este tipo, 
las operaciones que se consideran como de CPU son aquellas que van a pasar el 
mayor tiempo consumiendo los prcesos de la CPU.

Las operaciones de entrada y salida son las operaciones que van a estar esperando la petición
del recurso que han solicitado 
 */


//CONCURRENCIA Y PARALELISMO

/*
La concurrencia es cuando dos o mas tareas progresan simultaneamente;
el paralelismo es cuando dos o mas tareas se ejecutan al mismo tiempo
*/

//OPERACIÓN BLOQUEANTE Y NO BLOQUEANTE

/**
 * Se refiere a la fase de espera, una operación bloqueante es aquella que no va a devolver
 * el control a la aplicación hasta que termine toda a tarea, mientras que las operaciones
 * no bloqueantes se ejecután y devulven inmediatamente el control al hilo principal
 * sion importar si ha terminado o no.   
 */


//OPERACIONES SÍNCRONAS Y ASÍNCRONOS

/**
 * Se refiere cuanto tendra lugar la respuesta, sincrono se refiere a que el resultado espera el resultado 
 * en tiempo presente, mientras asíncrona no espera el resultado y devuelve el control
 * al hilo principal
 */


//CÓDIGO SÍNCRONO BLOQUEANTE
//-->Función anónima autoejecutable
// (()=>{
//     console.log("Código Síncrono");
//     console.log("Inicio");

//     function dos(){
//         console.log("Dos");
//     };

//     function uno(){
//         console.log("Uno");
//         dos();
//         console.log("Tres");
//     };

//     uno();
//     console.log("Fin");
// })();

// console.log("****************");

//CÓDIGO ASÍNCRONO NO BLOQUEANTE
//-->Función anónima autoejecutable

//CÓMO AGREGAR ASÍNCRONISMO
// (()=>{
//     console.log(`código Asíncrono`);
//     console.log(`Inicio`);

//     function dos(){
//         setTimeout(function (){
//             console.log(`Dos`);
//         },1000);
//     };

//     function uno(){
//         /**
//          * Se va a a ejecutar despues de Fin 2, ya que se toma como
//          * una tarea al igual que la función dos
//          */
//         setTimeout(function (){
//             console.log("Uno");
//         },0)
//         dos();
//         console.log(`Tres`);
//     };

//     uno();
//     console.log("Fin");
//     console.log("FIn2");
//     //El ultimo en entrar, el primero en salir en salir
// })(); 