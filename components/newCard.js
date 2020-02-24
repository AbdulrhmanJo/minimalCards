import React, { Component } from 'react'
import { Keyboard,View, Text, StyleSheet, TextInput,TouchableOpacity,TouchableWithoutFeedback } from 'react-native'
import { connect } from 'react-redux'
import { addCard } from '../actions/index'
import { storeCard } from '../utils/api'
class NewCard extends Component{
    state = {
        answer: null,
        question:null,
    }

    handleAddCard = () => {
        const { answer, question} = this.state
        const { dispatch, navigation, route } = this.props
        const id = route.params.deckID
        if(!answer && !question){
            alert("please Enter card information")
        }else if(!question){
            alert("please Enter card question")
        }else if(!answer){
            alert("please Enter card answer")
        }else{
            const card = {
                question,
                answer
            }

            dispatch(addCard(id,card))
            this.setState({ answer: null,question:null,})
            navigation.goBack()
            storeCard(id, card)
        }
    }

    render(){
        const { answer,  question} = this.state
        return (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                        <Text style={styles.action}>Create New Card</Text>
                        <TextInput
                            clearButtonMode='while-editing'
                            placeholderTextColor="gray"
                            placeholder="Question"
                            value={question}
                            onChangeText={(text) => this.setState({ question: text})}
                            style={styles.input}
                        />
                        <TextInput
                            clearButtonMode='while-editing'
                            placeholderTextColor="gray"
                            placeholder="Answer"
                            value={answer}
                            onChangeText={(text) => this.setState({ answer: text})}
                            style={styles.input}
                        />
                        <TouchableOpacity style={styles.button} onPress={this.handleAddCard}>
                            <Text style={{fontWeight:'500', fontSize:20, color:'white'}}>Add</Text>
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
        alignItems:'stretch',
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
    },
})

export default connect()(NewCard)