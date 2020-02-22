import React, { Component } from 'react'
import { Keyboard,View, Text, StyleSheet, TextInput,TouchableOpacity,TouchableWithoutFeedback } from 'react-native'

export default class NewDeck extends Component{
    state= {
        inputText: null
    }
    handleInputChange = (text) => {
        this.setState({
            inputText: text
        })
    }
    render(){
        const { inputText } = this.state
        return (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.action}>Create New Deck</Text>
                        <TextInput
                            clearButtonMode='while-editing'
                            placeholderTextColor="gray"
                            placeholder="name"
                            maxLength={30}
                            value={inputText}
                            onChangeText={this.handleInputChange}
                            style={styles.input}
                        />
                        <TouchableOpacity style={styles.button}>
                            <Text style={{fontWeight:'500', fontSize:20}}>Add</Text>
                        </TouchableOpacity>
                    </View> 
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
        alignItems:'center',
        padding:20
    },
    action:{
        marginTop:60,
        fontSize:30,
        color: "white",
        fontWeight:'700',
    },
    input:{
        marginTop:15,
        backgroundColor:'#3a3a3c',
        padding:13,
        borderRadius:8,
        color:'white',
        fontWeight:'500',
        
    },
    button:{
        marginTop:45,
        alignItems:'center',
        backgroundColor:'#eeeeee',
        borderRadius:8,
        padding:10,
    }
})