import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import Deck from './deck'
import Header  from './header'

export default class Home extends Component {
    render(){
        const { navigation } = this.props
        return (
            <View style={style.homeContainer}>
               <Header navigation={navigation} routeTo='NewDeck' icon="ios-add-circle">Decks</Header>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={style.deckContainer}>
                        <Deck deckName="Data Types" numberOfCards={3} navigation={this.props.navigation}/>
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