import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const Deck = (props) => {
    const { deckName, numberOfCards } = props
    return (
        <TouchableOpacity style={styles.card}>
            <Text style={styles.cardTitle}>{deckName}</Text>
            <Text>{`${numberOfCards} cards`}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        width:'47%',
        justifyContent:'space-between',
        padding: 20,
        backgroundColor:'#eeeeee',
        borderRadius:10,
        height:150,
    },
    cardTitle:{
        fontSize:24,
        fontWeight:'500'
    }
})

export default Deck