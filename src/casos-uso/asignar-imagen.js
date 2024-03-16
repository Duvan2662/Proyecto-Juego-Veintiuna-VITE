/**
 * Funcion que me permite crear la imagen de la carta en el HTML 
 * @param {string} carta EJM: 4P,10D,8C,KT
 * @param {number} turno Turno del jugador o de la computadora la computadora siempre tienen el ultimo turno 
 * @param {HTMLElement} divCartas Elemento de HTML que me permite limpiar y colocar las cartas de los jugadores
*/
export const asignarImagenCarta = (carta,turno,divCartas) => {
    const imagenCarta = document.createElement('img');
    imagenCarta.classList.add('carta');
    imagenCarta.src = `necesario/Cartas/${carta}.jpg`;
    divCartas[turno].append(imagenCarta); 
}