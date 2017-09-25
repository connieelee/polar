import React from 'react'
import {
  StyleSheet,
  TextInput,
} from 'react-native'

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 3,
  },
})

export default () => (
  <TextInput style={styles.textInput} />
)
