import { crearJuego, tomarCarta, acumularPuntos, asignarImagenCarta, turnoComputadora} from "../casos-uso/index";

const modulo = ( ()=>{
    'use strict'

    let baraja          = [],
        puntosJugadores = [];
  
    //Referencias del DOM
    const btnpedir          = document.querySelector('#btnPedir'),
          btndetener        = document.querySelector('#btnDetener'),
          btnuevo           = document.querySelector('#btnNuevo'),
          actualizarPuntos  = document.querySelectorAll('small'),
          divCartas         = document.querySelectorAll('.divCartas');
  
    //Eventos
  
    //Evento de pedir
    btnpedir.addEventListener('click', () => {
  
        const carta = tomarCarta(baraja);
        const puntosJugador = acumularPuntos(carta,0,puntosJugadores,actualizarPuntos);
        asignarImagenCarta(carta,0,divCartas);
        
        if(puntosJugador > 21){
            btnpedir.disabled = true;//bloque el boton pedir
            btndetener.disabled = true;//bloque el boton detener
            turnoComputadora(puntosJugador,baraja,puntosJugadores,actualizarPuntos,divCartas);//Funcion para que juege la computadora 
        }else if(puntosJugador === 21){
            btnpedir.disabled = true;//bloque el boton pedir
            btndetener.disabled = true;//bloque el boton detener
            turnoComputadora(puntosJugador,baraja,puntosJugadores,actualizarPuntos,divCartas);//Funcion para que juege la computadora 
        }
        
    })
  
    //Evento de detener
    btndetener.addEventListener('click', ()=> {
        btnpedir.disabled = true;//bloque el boton pedir
        btndetener.disabled = true;//bloque el boton detener
        turnoComputadora (puntosJugadores[0],baraja,puntosJugadores,actualizarPuntos,divCartas);//Funcion para que juege la computadora 
    })
  
    //Evento nuevo juego 
    btnuevo.addEventListener('click', ()=>{
        const retorno= crearJuego(2,actualizarPuntos,divCartas,btnpedir,btndetener);
        baraja = retorno.bara;
        puntosJugadores = retorno.puntosJu;
    })
  
    //Retorno de mi funcion modulo
    return {
        nuevoJuego : crearJuego
    };
  
})();