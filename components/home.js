import React, { Component } from 'react'
import { Text,View, StyleSheet, FlatList, AsyncStorage} from 'react-native'
import Deck from './deck'
import Header  from './header'
import { connect } from 'react-redux'
import { getDecks } from '../utils/api'
import { recieveDecks } from '../actions/index'

class Home extends Component {

    state = {
        isLoading: true,
    }

    componentDidMount(){
        const {dispatch } = this.props
        getDecks()
        .then((decks) => dispatch(recieveDecks(decks)))
        .then(() => this.setState({isLoading:false}))
    }


    render(){
        
        const { navigation, decks } = this.props
        const { isLoading } = this.state

        return (
            <View style={style.homeContainer}>
               <Header navigation={navigation} routeTo='NewDeck' icon="ios-add-circle">Decks</Header>
               {
                   isLoading 
                   ? <Text style={{fontSize:20, color:'white'}}>Loading</Text> 
                   :(
                    <FlatList
                    data={Object.keys(decks).map((id) => ({ key: id }))}
                    renderItem={({item, index}) => (
                        <View style={[{flex: 1 }, index%2==0 ? { marginRight: 5 } : { marginLeft: 5 } ]}>
                            <Deck deckID={item.key} navigation={navigation}/>
                        </View>
                    )}
                    keyExtractor={item => item.key}
                    horizontal={false} 
                    numColumns={2}
                    ItemSeparatorComponent={() => <View style={{height:10}}></View>}
                    ListEmptyComponent={() => (
                        <View style={style.error}>
                            <Text style={style.errorHeader}>No Decks</Text>
                            <Text style={style.errorMessage}>All decks that you've added will appear here.</Text>
                        </View>
                    )}
                    />
                   )
               }
               
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
        marginBottom:20,
    },
    error:{
        marginTop:50,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    errorHeader:{
      fontSize:23,
      color:'#aeb0b2',
      fontWeight:'700',
      marginBottom:5
    },
    errorMessage:{
        width:300,
        fontSize:19,
        color:'#636366',
        fontWeight:'500',
        textAlign:'center'
      }

})

const mapStatetoProps = (decks) => {
    return {
        decks
    }
}


export default connect(mapStatetoProps)(Home)