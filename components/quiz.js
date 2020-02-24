import React, { Component } from 'react'
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import MyFlipCard from './flipCard'

export default class Quiz extends Component {
    state = {
        flip: false,
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.topSection}>
                    <Text style={[styles.topSectionText, {fontSize: 30}]}>Quiz</Text>
                    <Text style={[styles.topSectionText,{fontSize:20}]}>1/3</Text>
                </View>
                <View style={styles.cardSection}>
                    <MyFlipCard flip={this.state.flip}/>
                </View>
                <View style={styles.actionSection}>
                    <TouchableOpacity>
                        <Ionicons name='ios-checkmark-circle' size={65} color="#34c759"/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setState((state) => ({flip:!state.flip}))}>
                        <MaterialIcons name='rotate-right' size={35} color="gray"/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name='ios-close-circle' size={65} color="#ff3b30"/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        paddingBottom:0,
        backgroundColor:'black'
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