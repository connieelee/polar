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
    color: gStyles.colors.primary,
  },
  error: {
    color: 'red',
    fontWeight: '400',
  },
})

export default props => (
  <Text style={styles.text}>{props.children}
    {
      !!props.error && <Text style={styles.error}> {props.error}</Text>
    }
  </Text>
)
