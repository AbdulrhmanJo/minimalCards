import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, FlatList} from 'react-native'
import Header  from './header'
import SectionHeader from './sectionHeader'
import { LinearGradient } from 'expo-linear-gradient';
import Card from './card'
import { connect } from 'react-redux'
class DeckPage extends Component {
    render(){
        
        const { navigation, deck } = this.props;
        
        return (
            <View style={styles.container}>
                <LinearGradient 
                    style={styles.topSection}
                    colors={['black', 'rgb(44,44,46)']}>
                    <Header stylee= {{fontSize:30}} navigation={navigation} routeTo='Decks'>{deck.title}</Header>
                    <Text style={styles.sectionText}>{deck.description}</Text>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Quiz")}>
                        <Text style={styles.btnText}>Take Quiz</Text>
                    </TouchableOpacity>
                </LinearGradient>
                <View style={styles.bottomSection}>
                    <SectionHeader navigation={navigation} routeTo='Decks' icon='ios-add-circle' routeTo="NewCard">Cards</SectionHeader>
                    <FlatList
                        data={deck.cards}
                        renderItem={({item}) => (
                            <Card  cardfrontText={item.question} cardBackText={item.answer}/>
                        )}
                        keyExtractor={item => item.question}
                    />
                </View>

            </View>
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
        flex:1
    },

    deckContainer:{
        flex:1,
    }
})

const mapStateToProps = (decks, { route }) => {
    const id = route.params.deckID
    const deck = decks[id]    

    return {
        deck
    }
}

export default connect(mapStateToProps)(DeckPage)