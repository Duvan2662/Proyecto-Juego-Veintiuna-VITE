/**
 * Funcion que le asigna un valor a la carta en especifico
 * @param {string} carta  EJM: 4P,10D,8C,KT
 * @returns {number} retorna el valor numerico de la carta 
*/

export const valorCarta = (carta) => {
    let puntos = 0; 
    let valor = carta.substring(0,carta.length-1);//Necestio tomar el primer valor de la carta 2,3,4,5 o 10 entonces siempre va a ir desde la posicion 0 hasta la posicion final menos 1 para el 10 

    if(isNaN(valor)){ //Mira si el valor es un numero
        //Entra si NO es un numero el valor 
        if(valor == 'A'){
            puntos = 11;
        }else{
            puntos = 10;
        }
    }else{
        //Entra si ES un numero el valor 
        puntos = parseInt(valor,10); //Paso el valor a entero 
    }
    
    return puntos;
};