import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

import {
  landingPage,
  login,
} from './src/screens'


AppRegistry.registerComponent('polar', () => login);
