import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import FlipCard from 'react-native-flip-card'

const MyFlipCard = ({ flip, card }) => { 
    return (
        <FlipCard 
            style={styles.card}
            friction={6}
            flipHorizontal={true}
            flipVertical={false}
            perspective={1000}
            flip={flip}
            clickable={false}
            >
            <View style={styles.face}>
                <Text style={styles.forntFaceText}>{card.question}</Text>
            </View>
            <View style={styles.face}>
                <Text style={styles.backFaceText}>{card.answer}</Text>
            </View>
        </FlipCard>
    )
}

const styles = StyleSheet.create({
    card:{
        flex:1,
        backgroundColor:'white',
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center',
        padding:20
    },
    cardText:{
        fontSize:25,
        fontWeight:'500'
    },

    face: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },

    forntFaceText:{
        fontSize:28,
        fontWeight:'500',
        textAlign:'center'
    },

    backFaceText:{
        fontSize:26,

        textAlign:'center'
    }
})


export default MyFlipCard