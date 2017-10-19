import React from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native'

import gStyles from '../../../styles'

const styles = StyleSheet.create({
  parent: {
    height: 40,
    width: 40,
    borderWidth: 2,
    marginHorizontal: 20,
    marginVertical: 10,
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
