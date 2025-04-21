//Proxies

/**
 * Me permite crear un objeto a partir de un objeto literal inicial
 */

const persona = {
    nombre: "",
    apellido: "",
    edad: 0
}

const manejador = {

    /**
     * Para que los valores que se le quire asignar al proxy, se añadan se deben pasar por aquí
     */
    set(obj,prop,valor){

        //if que no me permite agregar nuevos elementos
        if(Object.keys(obj).indexOf(prop) === -1){
            return console.error(`La propiedad ${prop} no existe en el objeto persona`);
        };

        //Me valida que sea el tipo de dato correcto en la propiedad correcta
        if ((prop === "nombre" || prop === "apellido")&& !(/^[A-Za-zÑñÁÉÍÓÚáéíóú]+$/g.test(valor))){
            return console.error(`Por favor el ${prop} debe tener solo letras sin expacio en blanco`);
        }

        //Valia que la edad no sea negtiva, ni que se un dato diferente a numero

        if((prop === "edad") && (typeof valor !== "number")){
            return console.error(`La propiedad ${prop} debe contener solo números`)
        }

        //valida que sea un número positivo
        if((prop === "edad") && (Math.sign(valor) !== 1)){
            return console.error(`La propiedad ${prop} debe tener números positivos`);
        }
        obj[prop] = valor;
    }
};

const jon = new Proxy(persona,manejador)

//Cómo darle atributos, para que se añadan se debe pasar estos valores por medio de persona a mamenajdor

jon.nombre = "jon";
jon.apellido = "Mircha";
jon.edad = 2;

//Cómo añadirle llaves, sin necesidad de definirlas

jon.estatura = 180;
/**
 * A pesar que no lo he pasado en persona, me permite instanciarlo gracias al
 * manejador, sin embargo si no quisiera que esto pasará, se debe hacer unos ajustes
 * en el manejador para que no me permitiera agregar más elementos
 */

console.log(jon);

console.log(jon.nombre);

