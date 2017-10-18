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
    <FormLabel error={props.error}>{props.label}</FormLabel>
    <TextInput
      width={props.width}
      value={props.value}
      onChangeText={props.onChangeText}
    />
  </View>
)