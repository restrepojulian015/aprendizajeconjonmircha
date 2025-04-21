// call, apply, bind

/**
 * Si necesito guardar el scope de una función se usara call and apply
 */

//vamos a crear una variable

this.lugar = "Comtexto Global";

function saludar(saludo,aQuien){
    console.log(`${saludo} ${aQuien} desde el ${this.lugar}`)
};

saludar("hola","kenai");


const obj = {
    lugar: "contexto objeto"
};


// el call recibe como parámetro el contexto que quiero
saludar.call(obj,"hola","jon"); // contexto objeto

// si coloco this o null, hace referencia al contexto global
saludar.call(null,"hola","jon");


// el apply funciona exacta mente igual, pero apply funciona con un arreglo
saludar.apply(obj,["adios","mircha"]); // contexto objeto


const Persona = {
    nombre: "jhon",
    saludar: function() {
        console.log(`Hola ${this.nombre}`);
    }
}

Persona.saludar();

const otraPersona = {
    // en esta parte se una el bind para enlazar
    saludar: Persona.saludar.bind(Persona)
}

otraPersona.saludar();// hola jhon