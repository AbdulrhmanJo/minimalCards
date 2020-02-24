import React, { Component } from 'react'
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import MyFlipCard from './flipCard'
import Score from './score'
import { connect } from 'react-redux'
class Quiz extends Component {
    state = {
        flip: false,
        currentIndex:0, 
        correct:0,
        inCorrect:0
    }

    handleCorrect = () => {
        this.setState((state) => ({
            flip:false,
            currentIndex: state.currentIndex+1,
            correct:state.correct + 1,
        }))
    }

    handleInCorrect = () => {
        this.setState((state) => ({
            flip:false,
            currentIndex: state.currentIndex+1,
            inCorrect:state.inCorrect + 1,
        }))
    }

    reset = () => {
        this.setState({
            flip: false,
            currentIndex:0, 
            correct:0,
            inCorrect:0
        })
    }

    goBack = () => {
        const { navigation } = this.props
        navigation.goBack()
    }

    render(){
        const { currentIndex, correct, inCorrect } = this.state
        const { cards } = this.props   
        const show = currentIndex < cards.length     
        return(
                <View style={styles.container}>
                {
                    show 
                    ? 
                    <View style={{flex:1}}>
                        <View style={styles.topSection}>
                            <Text style={[styles.topSectionText, {fontSize: 30}]}>Quiz</Text>
                            <Text style={[styles.topSectionText,{fontSize:20}]}>{`${currentIndex+1}/${cards.length}`}</Text>
                        </View>
                        <View style={styles.cardSection}>
                            <MyFlipCard flip={this.state.flip} card={cards[currentIndex]}/>
                        </View>
                        <View style={styles.actionSection}>
                            <TouchableOpacity onPress={this.handleCorrect}>
                                <Ionicons name='ios-checkmark-circle' size={65} color="#34c759"/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setState((state) => ({flip:!state.flip}))}>
                                <MaterialIcons name='rotate-right' size={35} color="gray"/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.handleInCorrect}>
                                <Ionicons name='ios-close-circle' size={65} color="#ff3b30"/>
                            </TouchableOpacity>
                        </View>
                    </View>

                    : <Score correct={correct} inCorrect={inCorrect} reset={this.reset} goBack={this.goBack}/>
                }
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        paddingBottom:0,
        backgroundColor:'black',
    },
    topSection:{
        flexDirection:'row',
        justifyContent:"space-between",
        marginTop:40,
        alignItems:'center',
        paddingBottom: 20
    },

    topSectionText:{
        fontWeight:'700',
        color:'white',
    },

    cardSection:{
        flex:10,
        
    },

    actionSection:{
        flex:2,    
        padding:20,
        justifyContent:'space-between',
        flexDirection:'row',
    }
})
const mapStateToProps = (decks, {route} ) => {
    const id = route.params.deckID
    const deck = decks[id]
    return {
        cards: deck.cards
    }
}

export default connect(mapStateToProps)(Quiz)