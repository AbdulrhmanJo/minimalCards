export const ADD_CARD = 'ADD_CARD'
export const ADD_DECK = 'ADD_DECK'
export const RECEIVE_DECKS = 'RECEIVE_DECKS'

export function addCard(deckID,card){
    return {
        type: ADD_CARD,
        deckID,
        card
    }
}


export function addDeck(deck){
    return {
        type: ADD_DECK,
        deck
    }
}

export function recieveDecks(decks){
    return {
        type: RECEIVE_DECKS,
        decks
    }
}