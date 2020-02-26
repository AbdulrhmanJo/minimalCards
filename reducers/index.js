import {
    ADD_CARD,
    ADD_DECK,
    RECEIVE_DECKS
} from '../actions/index'

export default function decks(state={}, action){
    switch(action.type){
        case ADD_CARD:
            return {
                ...state,
                [action.deckID]: {
                    ...state[action.deckID],
                    cards:state[action.deckID].cards.concat([action.card])
                }              
            }
        case ADD_DECK:
            const { deck } = action            
            return {
                ...state,
               [deck.title]:{
                   ...deck
               }
            }
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks
            }

        default:
            return state
    }
}