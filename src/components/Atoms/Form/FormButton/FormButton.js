import React from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native'

import { colors } from '../../../styles'

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderColor: colors.primary,
    paddingVertical: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 22,
    color: colors.primary,
  },
})

export default props => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>
      {props.children}
    </Text>
  </TouchableOpacity>
)
