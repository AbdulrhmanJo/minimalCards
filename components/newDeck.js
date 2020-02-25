import React, { Component } from 'react'
import { Keyboard,View, Text, StyleSheet, TextInput,TouchableOpacity,TouchableWithoutFeedback } from 'react-native'
import { connect } from 'react-redux'
import { storeDeck } from '../utils/api'
import { addDeck } from '../actions/index'
class NewDeck extends Component{
    state = {
        name: null,
        description: null
    }

    addNewDeck = () => {
        const { name, description} = this.state
        const { dispatch,navigation } = this.props

        if(!name && !description){
            alert("please Enter the information of the deck")
        }else if(!name){
            alert("please Enter the name of the deck")
        }else if(!description){
            alert("please Enter the description of the deck")
        }else{
            const deck = {
                title:name.trim(),
                description:description.trim(),
                cards:[]
            }
            dispatch(addDeck(deck))
            this.setState({name: null,description: null}) 
            navigation.navigate('Decks')
            storeDeck(deck)
        }
    }
    render(){
        const { inputText } = this.state
        return (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                        <Text style={styles.action}>Create New Deck</Text>
                        <TextInput
                            clearButtonMode='while-editing'
                            placeholderTextColor="gray"
                            placeholder="name"
                            maxLength={25}
                            value={inputText}
                            onChangeText={(text) => this.setState({name:text})}
                            style={styles.input}
                        />
                        <TextInput
                            clearButtonMode='while-editing'
                            placeholderTextColor="gray"
                            placeholder="description"
                            maxLength={120}
                            value={inputText}
                            onChangeText={(text) => this.setState({description:text})}
                            style={styles.input}
                        />
                        <TouchableOpacity style={styles.button} onPress={this.addNewDeck}>
                            <Text style={{fontWeight:'500', fontSize:20, color:'white'}}>Create Deck</Text>
                        </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
        padding:20
    },
    action:{
        marginTop:40,
        fontSize:30,
        color: "white",
        fontWeight:'700',
    },
    input:{
        marginTop:15,
        backgroundColor:'#3a3a3c',
        padding:15,
        borderRadius:8,
        color:'white',
        fontWeight:'500',
        
    },
    button:{
        marginTop:45,
        alignItems:'center',
        backgroundColor:'rgb(100,210,255)',
        borderRadius:8,
        padding:13,
    }
})

export default connect()(NewDeck)