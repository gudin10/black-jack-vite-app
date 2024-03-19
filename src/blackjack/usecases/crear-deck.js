import _ from 'underscore';

// Esta función crea un nuevo deck
/**
 * Esta funcion crear un nuevo deck
 * @param { Array<String> } tiposDeCarta Ejemplo -['C','D','H','S']
 * @param { Array<String> } tiposEspeciales Ejemplo -['A','J','Q','K'];
 * @returns { Array<String> } esta funcion regresa un nuevo deck de cartas
 */
const crearDeck = (tiposDeCarta , tiposEspeciales) => {
    let deck = [];
    if ( !tiposDeCarta || tiposDeCarta ===0 ) throw new Error('Tipos de carta debe ser arreglo de string');

    if ( !tiposEspeciales || tiposEspeciales ===0 ) throw new Error('Tipos de carta debe ser arreglo de string');

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}

//export default crearDeck
export {
    crearDeck
};