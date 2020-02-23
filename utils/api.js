import { AsyncStorage } from 'react-native'
import { DecksResults, KEY } from './_data'

export function getDecks() {
    return AsyncStorage.getItem(KEY)
    .then(DecksResults)
}

export function storeDeck(deck) {
    return AsyncStorage.mergeItem(KEY, JSON.stringify({
        [deck.title]: deck
    }))
}

export function addCard(key, question, answer) {
    AsyncStorage.getItem(KEY).then((result) => {
        let data = JSON.parse(result)
        data[key].cards.push({question: question, answer: answer})
        AsyncStorage.mergeItem(KEY, JSON.stringify(decks))
    })
}