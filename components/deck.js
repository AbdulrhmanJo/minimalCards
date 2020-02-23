import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
class Deck extends Component {
    render(){
        const { navigation, deckID } = this.props
        const { title, cards }  = this.props.deck                
        return (
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('DeckView', { deckID })}>
                <Text style={styles.cardTitle}>{title}</Text>
                <Text>{`${cards.length} cards`}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        flex:1,
        justifyContent:'space-between',
        padding: 20,
        backgroundColor:'#eeeeee',
        borderRadius:10,
        height:150,
    },
    cardTitle:{
        fontSize:23,
        fontWeight:'500'
    }
})

const mapStateToProp = (decks,{ deckID }) => {    
    const deck = decks[deckID]    
    return {
        deck
    }
}
export default connect(mapStateToProp)(Deck)