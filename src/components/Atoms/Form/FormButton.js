import React from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native'

import gStyles from '../../styles'

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderColor: gStyles.colors.primary,
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 22,
    color: gStyles.colors.primary,
  },
})

export default props => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>
      {props.children}
    </Text>
  </TouchableOpacity>
)
