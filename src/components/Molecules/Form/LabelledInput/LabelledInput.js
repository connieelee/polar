import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'

import {
  FormLabel,
  TextInput,
} from '../../../Atoms'

const styles = StyleSheet.create({
  inputWrapper: {
    marginVertical: 20,
  },
})

export default props => (
  <View style={styles.inputWrapper}>
    <FormLabel>{props.label}</FormLabel>
    <TextInput {...props.textInput} />
  </View>
)
