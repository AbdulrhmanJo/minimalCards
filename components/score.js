import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default class Score extends Component{

    calcPercentage = (correct, total) => {
        return Math.floor((correct/total) * 100)
    }

    render(){
        const { correct, inCorrect } = this.props        
        const total = correct + inCorrect

        return (
            <View style={styles.container}>
                <View style={styles.Percentage}>
                    <Text style={styles.header}>Score</Text>
                    <Text style={styles.PercentageText}>{`${this.calcPercentage(correct, total)}%`}</Text>
                </View>
                <View style={{flex:1,flexDirection:'row',justifyContent:'space-evenly'}}>
                    <View style={{alignItems:'center'}}>
                        <Text style={styles.correct}>{correct}</Text>
                        <Text style={styles.text}>Correct</Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <Text style={styles.wrong}>{inCorrect}</Text>
                        <Text style={styles.text}>Wrong</Text>
                    </View>
                </View>
                <View style={{flex:1}}>
                    <TouchableOpacity style={styles.btn} onPress={this.props.reset}>
                        <Text style={styles.btnText}>Reset</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, {marginTop:15}]} onPress={this.props.goBack}>
                        <Text style={styles.btnText}>Back</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header:{
        fontSize:30,
        color:'white',
        // marginTop:40,
        // flex:1,
    },

    Percentage:{
        flex:1,
        marginTop:20,
        justifyContent:'space-evenly',
        alignItems:'center',
        
    },

    PercentageText:{
        fontSize:55,
        color:'white',
        fontWeight:'700'
    },

    text:{
        fontSize:20,
        fontWeight:'500',
        color:'#aeb0b2',
    },

    wrong:{
        fontSize:50,
        color:'#ff3b30',
        fontWeight:'700'
    },
    correct:{
        fontSize:50,
        fontWeight:'700',
        color:'#34c759',
    },
    btn:{
        alignItems:'center',
        backgroundColor:'#5ac8fa',
        borderRadius:8,
        padding:13,
        marginBottom:5
    },
    btnText:{
        fontWeight:'700', 
        fontSize:20, 
        color:'white'
    },
})