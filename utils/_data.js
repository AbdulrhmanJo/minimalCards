import { AsyncStorage } from 'react-native'

export const KEY = 'MinimalCards'

let decks = {
    'Java':{
        title:'Java',
        description:'Includes the important concepts of OOP in java for the first exam',
        cards: [
            { 
                question:'What is OOP ?',
                answer:'Object oriented programming'
            },
            {
                question:'What is encapsulation and how is it enforced in Java ?',
                answer:'Keep variables private. Use public mutator and accessor methods to use them'
            },
            {
                question:'class',
                answer:'software blueprint for implementing objects of a given type'
            },
            {
                question:'data fields/instance variable',
                answer:'maintain the current state of an object'
            }
        ]
    },

    'financial management':{
        title:'Financial Management',
        description:'Includes the important concepts of Course fin230',
        cards: [
            { 
                question:'Asset',
                answer:'any financial claim or piece of property that is subject to ownership'
            },
            {
                question:'Interest rate',
                answer:'the cost of borrowing or the price paid for the rental of funds'
            },
            {
                question:'Bond',
                answer:'a debt security that promises to make payments periodically for a specified period of time'
            },
        ]
    },
}

// storeData = async () => {
//     try {
//        const d = await AsyncStorage.setItem(KEY,JSON.stringify(decks))
//        return d
//     } catch (error) {
//         console.log(error);
//     }
// }

// export function DecksResults(results) {
//     return results !== null ? JSON.parse(results) 
// }

