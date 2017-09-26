import React from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'

import {
  FormLabel,
  TextInput,
} from '../../Atoms'

export default props => (
  <View>
    <FormLabel>{props.label}</FormLabel>
    <TextInput />
  </View>
)
