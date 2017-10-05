import React from 'react'
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
} from 'react-native'

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
  selected: {
    fontSize: 30,
    fontWeight: '700',
  },
})

export default props => (
  <TouchableOpacity onPress={props.onPress} style={styles.parent}>
    {props.selected && <Text style={styles.selected}>X</Text>}
  </TouchableOpacity>
)
