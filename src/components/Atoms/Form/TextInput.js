import React from 'react'
import {
  StyleSheet,
  TextInput,
} from 'react-native'

const styles = StyleSheet.create({
  textInput: {
    borderBottomWidth: 3,
    height: 50,
    width: 300,
    padding: 2,
  },
})

export default () => (
  <TextInput style={styles.textInput} />
)
