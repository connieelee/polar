import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
  parent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default props => (
  <View style={[styles.parent, StyleSheet.absoluteFill]}>
    {props.children}
  </View>
)
