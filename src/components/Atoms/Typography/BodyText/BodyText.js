import React from 'react'
import {
  Text,
  StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
  text: {
    fontWeight: '400',
    fontSize: 20,
  },
})

export default props => <Text style={styles.text}>{props.children}</Text>
