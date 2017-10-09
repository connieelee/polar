import React from 'react'
import {
  Text,
  StyleSheet,
} from 'react-native'

import gStyles from '../../../styles'

const styles = StyleSheet.create({
  text: {
    fontWeight: '600',
    fontSize: 18,
    color: gStyles.colors.blue,
  },
})

export default props => (
  <Text style={styles.text}>{props.children}</Text>
)
