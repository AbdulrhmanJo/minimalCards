import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants'
import Home from './components/home'
import NewDeck from './components/newDeck'
import NewCard from './components/newCard'
import DeckPage from './components/deckView'
import Quiz from './components/quiz'

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={{height: Constants.statusBarHeight, backgroundColor }}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator >
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
      }} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStatusBar backgroundColor="black" barStyle="light-content"/>
      <MyStack/>
      {/* <View style={{flex:1}}>
        <MyStatusBar backgroundColor="black" barStyle="light-content"/>
        <View style={styles.container}>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
          </Stack.Navigator>
        </View> 
      </View> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: 'black',
  //   padding:20
  // },
});
