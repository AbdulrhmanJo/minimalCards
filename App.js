import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './components/myStack'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import MyStatusBar from './components/myStatuesBar'
import { setLocalNotification } from './utils/helper'

export default class App extends Component {

  componentDidMount(){
    setLocalNotification()
  }

  render(){
    return (
      <Provider store={createStore(reducer)}>
        <NavigationContainer>
          <MyStatusBar backgroundColor="black" barStyle="light-content"/>
          <MyStack/>
        </NavigationContainer>
      </Provider>
    );
  }
}
