import React from 'react'
import {
  StyleSheet,
  TextInput,
  View,
} from 'react-native'

import gStyles from '../../../styles'


export default (props) => {
  const styles = StyleSheet.create({
    textInput: {
      height: 30,
      fontSize: 22,
    },
    inputContainer: {
      paddingLeft: gStyles.whiteSpace.medium,
      paddingRight: gStyles.whiteSpace.medium,
      width: props.width || gStyles.width.medium,
      height: 50,
      borderBottomWidth: 1,
      justifyContent: 'center',
    },
  })

  return (
    <View style={styles.inputContainer}>
      <TextInput {...props} style={styles.textInput} />
    </View>
  )
}
