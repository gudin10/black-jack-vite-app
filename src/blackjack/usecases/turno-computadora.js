import { crearCartaHTML } from './crear-carta-html';
import {pedirCarta} from './pedir-carta';
import {valorCarta} from './valor-carta'
/**
 * 
 * @param {Number} puntosMinimos puntos minimos de la CP para ganar
 * @param {HTMLelement} puntosHTML
 * @param {Array<String>} deck
 */
// turno de la computadora
const turnoComputadora = ( puntosMinimos ,puntosHTML,divCartasComputadora, deck= []) => {


    if ( !puntosMinimos ) throw new Error('Puntos minimos necesarios');
    if ( !puntosHTML ) throw new Error('Puntos html es necesario');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        //To do crear carta
        const imgCarta = crearCartaHTML( carta );
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}

export {
    turnoComputadora
}

