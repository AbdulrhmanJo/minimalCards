import React from 'react'
import Home from '../components/home'
import NewDeck from '../components/newDeck'
import NewCard from '../components/newCard'
import DeckPage from '../components/deckView'
import Quiz from '../components/quiz'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';


const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Decks" component={Home} options={{headerShown: false}}/>
      <Stack.Screen name="NewDeck" component={NewDeck} options={{
        title: null,
        headerTransparent:true,
        headerTintColor:'rgb(100,210,255)',
      }} />
      <Stack.Screen name="DeckView" component={DeckPage} options={{
        title: null,
        headerTintColor:'rgb(100,210,255)',
        headerTransparent:true,        

      }} />
      <Stack.Screen name="NewCard" component={NewCard} options={{
        title: null,
        headerTintColor:'rgb(100,210,255)',
        headerTransparent:true,
      }} />
      <Stack.Screen name="Quiz" component={Quiz} options={{
        title: null,
        headerTintColor:'rgb(100,210,255)',
        headerTransparent:true,
        ...TransitionPresets.ModalSlideFromBottomIOS,
      }} />
    </Stack.Navigator>
  )
}

export default MyStack