// break & continue

const array = [1,2,3,4,5,6,7,8,9,10];

/*
 en este caso no se utiliza el forEach por que no se puede utilizar un break o continue con un 
método del forEach
 */
for ( i = 0; i < array.length; i++){
    //Accedo a la posición
    console.log(i);
    if(i= 5){break}; // No imprime el resto de posiciones porque se sale del for
}

for ( i = 0; i < array.length; i++){
    //Accedo a la posición
    console.log(i);
    if(i= 5){continue}; // No imprime el siguiente número porque se lo salta
}