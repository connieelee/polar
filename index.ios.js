import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

import {
  landingPage,
  login,
  poll,
} from './src/screens'


AppRegistry.registerComponent('polar', () => poll);
