import { shuffle } from "./index";
/**
 * Funcion que crea la baraja de cartas
 * @returns {array <string>} retorna un arreglo que tiene la baraja de cartas con las que se va a jugar 
*/

export const crearBaraja = () =>{
    const tipos      = ['C','D','T','P'], //Tipos de carta
          especiales = ['A','J','Q','K']; //Tipos de carta
    let baraja = [];//Vacia la baraja

    
    for (let i = 2; i<= 10; i++) {
    for (let tipo of  tipos) {
        baraja.push(i+tipo)
    }
    }

    for (let tipo of tipos) {
        for (let esp of especiales) {
            baraja.push(esp+tipo)
        }
    }

    return shuffle (baraja); 
};