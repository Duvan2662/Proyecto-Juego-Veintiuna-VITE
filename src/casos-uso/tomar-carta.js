/**
 * Funcion que toma una carta de la baraja y la elimina 
 * @param {array <string>} baraja baraja: arreglo de string con el que se esta jugando  
 * @returns {string} Devuelve y elimina  el ultimo elemento de la baraja  EJM: 5P
 */
export const tomarCarta = (baraja) =>{
    if(baraja.length === 0){
        throw 'No ahi cartas en la baraja'
    }

    return baraja.pop();
};