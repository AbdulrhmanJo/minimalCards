import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, FlatList} from 'react-native'
import Header  from './header'
import SectionHeader from './sectionHeader'
import { LinearGradient } from 'expo-linear-gradient';
import Card from './card'
import { connect } from 'react-redux'
class DeckPage extends Component {

    handleQuiz = () => {
        const { navigation, deck, id } = this.props
        if(deck.cards.length > 0){
            navigation.navigate('Quiz',{deckID: id})
        }else{
            alert('there are no cards to take a quiz, please add at least on card to take a quiz')
        }
    }

    render(){
        
        const { navigation, deck,id } = this.props;
        
        return (
            <View style={styles.container}>
                <LinearGradient 
                    style={styles.topSection}
                    colors={['black', 'rgb(44,44,46)']}>
                    <Header stylee= {{fontSize:30}} navigation={navigation} routeTo='Decks'>{deck.title}</Header>
                    <Text style={styles.sectionText}>{deck.description}</Text>
                    <TouchableOpacity style={styles.btn} onPress={this.handleQuiz}>
                        <Text style={styles.btnText}>Take Quiz</Text>
                    </TouchableOpacity>
                </LinearGradient>
                <View style={styles.bottomSection}>
                    <SectionHeader navigation={navigation} routeTo='Decks' icon='ios-add-circle' routeTo="NewCard" deckID={id}>Cards</SectionHeader>
                    <FlatList
                        data={deck.cards}
                        renderItem={({item}) => (
                            <Card  cardfrontText={item.question} cardBackText={item.answer}/>
                        )}
                        keyExtractor={item => item.question}
                        ListEmptyComponent={() => (
                            <View style={styles.error}>
                                <Text style={styles.errorHeader}>No Cards</Text>
                                <Text style={styles.errorMessage}>All Cards that you've added will appear here.</Text>
                            </View>
                        
                        )}
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
        paddingBottom:0,
        flex:1,
    },

    deckContainer:{
        flex:1,
    },
    
    error:{
        marginTop:50,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    errorHeader:{
      fontSize:20,
      color:'#aeb0b2',
      fontWeight:'700',
      marginBottom:5
    },
    errorMessage:{
        width:300,
        fontSize:17,
        color:'#636366',
        fontWeight:'500',
        textAlign:'center'
      }
})

const mapStateToProps = (decks, { route }) => {
    const id = route.params.deckID
    const deck = decks[id]    

    return {
        deck,
        id
    }
}

export default connect(mapStateToProps)(DeckPage)