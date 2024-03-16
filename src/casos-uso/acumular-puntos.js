import { valorCarta } from "./index";
/**
 * Funcion que me permite ir acumulando los puntos de los jugadores y escribirlo en el html
 * @param {string} carta EJM: 4P,10D,8C,KT
 * @param {number} turno Turno del jugador o de la computadora la computadora siempre tienen el ultimo turno 
 * @param {array <number>} puntosJugadores  arreglo ue tiene el puntaje de los jugadores 
 * @param {HTMLElement} actualizarPuntos Elemento de HTML que me permite visualizar el puntaje de los jugadores
 * @returns {number} retorna el valor de los puntos totales del jugador 
*/

export const acumularPuntos = (carta,turno,puntosJugadores,actualizarPuntos) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta); 
    actualizarPuntos[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
};