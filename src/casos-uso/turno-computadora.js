import { tomarCarta,acumularPuntos,asignarImagenCarta,determinarGanador} from "./index";
/**
 * Funcion que inicia el turno de la computadora 
 * @param {number} puntosMinimos Puntos del jugador
 * @param {array <string>} baraja baraja: arreglo de string con el que se esta jugando 
 * @param {array <number>} puntosJugadores arreglo ue tiene el puntaje de los jugadores 
 * @param {HTMLElement} actualizarPuntos Elemento de HTML que me permite visualizar el puntaje de los jugadores
 * @param {HTMLElement} divCartas Elemento de HTML que me permite limpiar y colocar las cartas de los jugadores
*/

export const turnoComputadora = (puntosMinimos, baraja, puntosJugadores, actualizarPuntos, divCartas)=>{
    let puntosComputadora = 0;

    do {
        const carta = tomarCarta(baraja);
        puntosComputadora = acumularPuntos(carta,puntosJugadores.length-1,puntosJugadores,actualizarPuntos);
        asignarImagenCarta(carta,puntosJugadores.length-1,divCartas);
    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos<=21));

    determinarGanador(puntosComputadora,puntosMinimos);
}