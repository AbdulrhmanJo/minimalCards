import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native'
import Header  from './header'
import SectionHeader from './sectionHeader'
import { LinearGradient } from 'expo-linear-gradient';
import Card from './card'

export default class DeckPage extends Component {
    render(){
        const { navigation } = this.props;

        return (
            <ScrollView style={styles.container}>
                <LinearGradient 
                    style={styles.topSection}
                    colors={['black', 'rgb(44,44,46)']}>
                    <Header navigation={navigation} routeTo='Decks'>Data types</Header>
                    <Text style={styles.sectionText}>Containes all the data types that used in programming</Text>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>Quiz</Text>
                    </TouchableOpacity>
                </LinearGradient>
                <View style={styles.bottomSection}>
                    <SectionHeader navigation={navigation} routeTo='Decks' icon='ios-add-circle' routeTo="NewCard">Cards</SectionHeader>
                    <View style={styles.deckContainer}>
                        <Card cardfrontText="integer" cardBackText='numberdsafdsfasdfadfadfadsfasdfadsfadsfsdafadfsdfadsfasdfadsfsdafsdf'/>
                        <Card cardfrontText="double" cardBackText='numberdsafdsfasdfadfadfadsfasdfadsfadsfsdafadfsdfadsfasdfadsfsdafsdf'/>
                        <Card cardfrontText="string" cardBackText='numberdsafdsfasdfadfadfadsfasdfadsfadsfsdafadfsdfadsfasdfadsfsdafsdf'/>
                        
                        
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
    },
    topSection:{
        padding:20,
        marginTop:40
    },
    sectionText:{
        marginTop: -5,
        fontSize:17,
        fontWeight:'500', 
        color:'#aeb0b2',
    },

    btn:{
        marginTop:40,
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

    bottomSection:{
        padding:20,
    },

    deckContainer:{
        flex:1,
    }
})