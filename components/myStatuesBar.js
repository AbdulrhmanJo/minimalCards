import React from 'react';
import { StatusBar,View } from 'react-native'
import Constants from 'expo-constants'

const MyStatusBar = ({backgroundColor, ...props}) => (
    <View style={{height: Constants.statusBarHeight, backgroundColor }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );

export default MyStatusBar