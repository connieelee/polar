import React from 'react'
import {
  Text,
  StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontSize: 20,
    fontWeight: '400',
  },
})

export default props => <Text style={styles.text}>{props.children}</Text>
