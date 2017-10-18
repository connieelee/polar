import React from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native'

import {
  colors,
  fonts
} from '../../../styles';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    paddingVertical: 13,
    marginHorizontal: 10,
    backgroundColor: colors.light,
  },
  buttonText: {
    fontSize: fonts.sizes.small,
    fontFamily: fonts.families.body,
    color: colors.dark,
  }
})

export default props => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>
      {props.children}
    </Text>
  </TouchableOpacity>
)
