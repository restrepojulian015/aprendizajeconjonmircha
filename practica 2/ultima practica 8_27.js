// practoca hgacer un api

// class Pelicula {
//     constructor({id,titulo,director,estreno,pais,generos,calificacion}){
//         this.id = id;
//         this.titulo = titulo;
//         this.director = director;
//         this.estreno = estreno;
//         this.pais = pais;
//         this.generos = generos;
//         this.calificacion = calificacion;

//         this.validarIMDB(id);
//         this.validarTitulo(titulo);
//         this.validarDirector(director);
//         this.validarEstreno(estreno);
//         this.validarPais(pais);
//         this.validarGeneros(generos);
//         this.validarCalificacion(calificacion);
//     };

//     static get listaGeneros(){
//         return ['Action','Adult','Comedy','romance']
//     };

//     static generosAceptados(){
//         return console.info(`Los generós aceptados son: ${Pelicula.listaGeneros.join(',')}`);
//     };

//     validarCadena(propiedad,valor){
//         if(!valor) return console.warn(`${propiedad} "${valor}" está vacío`);

//         if ( typeof valor !== 'string') return console.error(`${propiedad} "${valor}" ingresada, No es una cadena de texto`);

//         return true;
//     };

//     validarLongitudCadena(propiedad,valor,longitud){
//         if (valor.length > longitud) return console.error(`${propiedad} "${valor}" excede el número de caracteres permitidos (${longitud})`);
//         return true;
//     };

//     validarNumero(propiedad,valor){
//         if(!valor) return console.warn(`${propiedad} "${valor}" está vacío`);

//         if ( typeof valor !== 'number') return console.error(`${propiedad} "${valor}" ingresada, No es una cadena de texto`);

//         return true;
//     };

//     validarIMDB(id){
//         if(this.validarCadena("IMDB id",id)){
//             /*
//             En este if lo que estoy haciendo es validar que sean 9 caracteres, que los dos primeros sean
//             letras y las siguientes sean números; el simbolo "^" me indeca que no debe haber espacios en
//             blanco antes de la expresion, el "{2}" significa que mis primeros dos caracteres deben de
//             cumplir con la condición que estoy pasandole al principio "[a-z]", posteriormente se repite
//             con la segnuda condicción, sin embargo en este caso es con números y el rango es de 7, por
//             el simbolo "$" significa que no debe haver nada despues del id.Si colocó mayuscolas me devolverá false
//             */
//             if(!(/^([a-z]){2}([0-9]){7}$/.test(id))){
//                 return console.error(`IMDB id "${id}" ingresada, No es valido, debe tener 9 caracteres, los 2 primeros letras minusculas, los 7 restantes números`);    
//             };
//         };
//     };
//     validarTitulo(titulo){
//         if(this.validarCadena("Titulo",titulo)){

//             this.validarLongitudCadena("Titulo",titulo,100);
//         };
//     };

//     validarDirector(director){
//         if(this.validarCadena("Director",director)){

//             this.validarLongitudCadena("Director",director,50);
//         };
//     };

//     validarEstreno(estreno){
//         if(this.validarNumero("Año de Estreno",estreno)){
//             if(!(/^([0-9]){4}$/.test(estreno))){
//                 return console.error(`Año de Estreno "${estreno}" ingresada, No es valido, debe ser un número de 4 digitos`);    
//             };
//         };
//     };

//     validarArreglo(propiedad,valor){
//         if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);

//         if (!(valor instanceof Array)) return console.error(`${propiedad} "${valor}" ingresado, No es un areglo`);

//         if (valor.length === 0) return console.error(`${propiedad} "${valor}" no tiene datos`);

//         for (let cadena of valor){
//             if (typeof cadena !== "string") return console.error(`El valor "${cadena}" ingresado, No es una cadena de texto`);

//         };

//         return true;

//     };

//     validarPais(pais){
//         this.validarArreglo("País",pais);
//     }

//     validarGeneros(generos){
//         if (this.validarArreglo("Generos",generos)){
//             for(let genero of generos){
//                 //Se utiliza la clase Pelicula ya que como el método "listaGeneros", es estático, el ".this" no sirve
//                 if (!(genero,Pelicula.listaGeneros.includes(genero))){
//                     console.error(`Géneros incorrectos "${generos.join(",")}"`);
//                     Pelicula.generosAceptados();
//                 };
//             };
//         }
//     };

//     validarCalificacion(calificacion){
//         if(this.validarNumero("Calificación",calificacion)){
//                 return (calificacion < 0 || calificacion > 11) ?
//                     console.error("La calificación se sobre sale del rango 0 y 10")
//                     // toFixed me permite recortar la cantidad de decimales
//                         :this.calificacion = calificacion.toFixed(1);    
//         };
//     };

//     fichaTecnica(){
//         console.info(`Ficha Técnica:\nTítulo: "${this.titulo}"\nDirector:"${this.director}"\nAño: "${this.estreno}"
//         \nPaís:"${this.pais.join('-')}"\nGéneros:"${this.generos.join(",")}"\nCalificacion: "${this.calificacion}"
//         \nIMDB id "${this.id}"`)
//     };
// };

// Pelicula.generosAceptados();
// const peli = new Pelicula({
//     id: "tt1234567",
//     titulo: "Titullo de la pelicula",
//     director: "Director de la peli",
//     estreno: 2020,
//     pais: ['México','Francia'],
//     generos: ["Comedy","romance"],
//     calificacion: 10.6
// });

// peli.fichaTecnica();