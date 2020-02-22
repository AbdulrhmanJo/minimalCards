import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import FlipCard from 'react-native-flip-card'

const MyFlipCard = (props) => {
    return (
        <FlipCard 
            style={styles.card}
            friction={6}
            flipHorizontal={true}
            flipVertical={false}
            perspective={1000}
            flip={props.flip}
            >
            <View style={styles.face}>
                <Text>The Face</Text>
            </View>
            <View style={styles.face}>
                <Text>The Back</Text>
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
})


export default MyFlipCard