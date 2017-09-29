import React from 'react'
import {
  StyleSheet,
  TextInput,
  View,
} from 'react-native'

const sideMargin = 10

const styles = StyleSheet.create({
  textInput: {
    height: 30,
    fontSize: 22,
  },
  inputContainer: {
    paddingLeft: sideMargin,
    paddingRight: sideMargin,
    width: 300,
    height: 50,
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
})

export default props => (
  <View style={styles.inputContainer}>
    <TextInput {...props} style={styles.textInput} />
  </View>
)
