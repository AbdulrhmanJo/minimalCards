import { AsyncStorage } from 'react-native'
import { DecksResults, KEY } from './_data'

export function getDecks() {
    return AsyncStorage.getItem(KEY)
    .then((data) => JSON.parse(data))
}

export function storeDeck(deck) {
    return AsyncStorage.mergeItem(KEY, JSON.stringify({
        [deck.title]: deck
    }))
}

export function storeCard(deckID, card) {
    AsyncStorage.getItem(KEY).then((result) => {
        let decks = JSON.parse(result)
        decks[deckID].cards.push(card)
        AsyncStorage.mergeItem(KEY, JSON.stringify(decks))
    })
}