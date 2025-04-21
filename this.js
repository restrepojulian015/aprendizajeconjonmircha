//this

/**
 * El this es una palabra que hace referencia al 
 * objeto en el cual se está trabajando para invocar propiedades
 * y métodos según su contexto
 */

/**
 * El this depende del contexto, si se utilizará sin nigún contexto,
 * haría referencia al object window
 */

console.info(this);// imprime el objeto window
this.nombre = "contexto global";
console.info(this.nombre)//imprime "contexto global"
function imprimir(){
    console.log(this.nombre);
}

imprimir()//imprime contexto global


const obj = {
    nombre: "contexto global",
    imprimir: function(){
        console.log(this.nombre);
    }
}

obj.imprimir();// imprime "contexto global"

const obj2 = {
    nombre: "contexto global",
    imprimir
}

obj2.imprimir();// imprime "contexto global"


