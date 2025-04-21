// Callbacks

/**
 * Es una función que se va a ejecutar después de que otra función lo haga, 
 * es la primera herramienta para manejar la asíncronía
 */

//Como trabaja una callback

function CuadradoCallback(value,callback){
    //la función cuadrado no retorna nada, lo que retorna es la callback
    setTimeout(()=>{
            callback(value, value*value);
    //Esto forza un número a un entero usando el operador "|"
    },0 | Math.random()*100);
};

CuadradoCallback(2,(value,result)=>{
    console.log(`Inicia callback`);
    /**
     * El resultado no se obtiene por medio de un "return"
     * se obtiene por medio de la función callback que se
     * ejecuta
     */
    console.log(`Callback ${value}, ${result}`);
    /**
     * el value va a tener el valor de "value" de la función callback
     * de la linea 12, mientras que "result" obtiene su valor de
     * la expresión "value*value" de la linea 12.
     */
    //Si se utilizará otra vez la función CuadradoCallback, se iniciaría el callback hell
})