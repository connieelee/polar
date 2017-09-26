import React from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native'

import gStyles from '../../../styles'

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderColor: gStyles.colors.primary,
    paddingVertical: 10,
    flex: 1,
    alignItems: 'center',
    borderRadius: 20,
    marginHorizontal: 10,
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
