import React, { Component } from 'react'
import { AppRegistry, Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'

import {
  LandingPage,
  Login,
} from './src/screens'

const App = StackNavigator({
  Home: { screen: LandingPage },
  Login: { screen: Login },
}, {
  headerMode: 'screen',
})

AppRegistry.registerComponent('polar', () => App)
