import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import Deck from './deck'

export default class Home extends Component {
    render(){
        const { navigation } = this.props
        return (
            <View style={style.homeContainer}>
                <View style={style.topBar}>
                    <Text style={style.topBarText}>Decks</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('NewDeck')}>
                            <Ionicons name="ios-add-circle" color="white" size={35} style={{ height: 35 - 1}}/>
                    </TouchableOpacity>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={style.deckContainer}>
                        <Deck deckName="Math" numberOfCards={5} />
                        <Deck deckName="Sport" numberOfCards={3} />
                    </View>
                    <View style={style.deckContainer}>
                        <Deck deckName="Software" numberOfCards={10} />
                        <Deck deckName="Colors" numberOfCards={5} />
                    </View>
                    <View style={style.deckContainer}>
                        <Deck deckName="Animal" numberOfCards={50} />
                        <Deck deckName="HTML" numberOfCards={5} />
                    </View>
                    <View style={style.deckContainer}>
                        <Deck deckName="CSS" numberOfCards={5} />
                        <Deck deckName="HTML" numberOfCards={5} />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const style = StyleSheet.create({
    homeContainer:{
        flex: 1,
        backgroundColor: 'black',
        paddingLeft:20,
        paddingRight:20,
        paddingTop:25


    },
    topBar:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        marginBottom:20,

    },
    topBarText:{
        fontSize:35,
        fontWeight:'700', 
        color:'white'
    },

    deckContainer:{
        flexDirection:"row", 
        justifyContent:'space-between', 
        marginBottom:20
    }

})