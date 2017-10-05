import React from 'react'
import {
  Text,
  StyleSheet,
  View,
} from 'react-native'

import gStyles from '../../../styles'

const styles = StyleSheet.create({
  text: {
    fontWeight: '700',
    fontSize: 35,
  },
  underline: {
    borderBottomWidth: 10,
    borderBottomColor: gStyles.colors.primary,
    marginTop: 10,
    marginLeft: 3,
    width: 80,
  },
  parent: {
    padding: 10,
  },
})

export default props => (
  <View style={styles.parent}>
    <Text style={styles.text}>{props.children}</Text>
    <View style={styles.underline} />
  </View>
)
