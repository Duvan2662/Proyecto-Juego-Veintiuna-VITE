import { crearBaraja } from "./index";
/**
 * Funcion que crea un nuevo juego  
 * @param {number} numeroJugadores Cantidad de jugadores en el juego para este caso siempre se toman 2 
 * @param {HTMLElement} actualizarPuntos Elemento de HTML que me permite visualizar el puntaje de los jugadores  
 * @param {HTMLElement} divCartas Elemento de HTML que me permite limpiar y colocar las cartas de los jugadores
 * @param {HTMLElement} btnpedir Elemento de HTML que me permite activar y desactivar el boton pedir 
 * @param {HTMLElement} btndetener Elemento de HTML que me permite activar y desactivar el boton detener 
 * @returns {object} Esta funcion retorna un objeto literar que contine la baraja y el array de los con los puntos de los jugadores
*/

export const crearJuego = (numeroJugadores = 2, actualizarPuntos, divCartas, btnpedir, btndetener) => {
    console.clear
    let baraja = crearBaraja();
    let puntosJugadores = [];

    for (let i = 0; i < numeroJugadores; i++) {
        puntosJugadores.push(0); 
    }

    actualizarPuntos.forEach(ele => ele.innerText = 0);
    divCartas.forEach(ele => ele.innerHTML ="" );
    btnpedir.disabled = false;
    btndetener.disabled = false;

    return{
        bara : baraja,
        puntosJu : puntosJugadores
    }
}
