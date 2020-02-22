import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Deck = (props) => {
    const { cardfrontText, cardBackText } = props
    return (
        <View style={styles.card} >
            <Text style={styles.cardTitle}>{cardfrontText}</Text>
            <Text style={{color:'#8e8e93'}}>{`${cardBackText}`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flex:1,
        justifyContent:'space-between',
        padding: 20,
        backgroundColor:'rgba(255,255,255,.12)',
        borderRadius:10,
        height:120,
        marginBottom:20
    },
    cardTitle:{
        fontSize:20,
        fontWeight:'500',
        color:'#c7c7cc',
        textTransform:'capitalize'
    }
})

export default Deck