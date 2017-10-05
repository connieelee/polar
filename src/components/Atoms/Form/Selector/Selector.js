import React from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native'

import gStyles from '../../../styles'

const styles = StyleSheet.create({
  parent: {
    height: 50,
    width: 50,
    borderWidth: 2,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  parentSelected: {
    borderColor: gStyles.colors.primary,
  },
  text: {
    fontSize: 30,
    fontWeight: '700',
  },
  textSelected: {
    color: gStyles.colors.primary,
  },
})

export default props => (
  <TouchableOpacity
    onPress={props.onPress}
    style={[styles.parent, props.selected && styles.parentSelected]}
  >
    {props.selected && <Text style={[styles.text, props.selected && styles.textSelected]}>X</Text>}
  </TouchableOpacity>
)
