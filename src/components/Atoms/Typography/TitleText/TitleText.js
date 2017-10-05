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
    fontSize: 40,
  },
  underline: {
    borderBottomWidth: 10,
    borderBottomColor: gStyles.colors.primary,
    marginTop: 10,
    marginLeft: 3,
    width: 80,
  },
})

export default props => (
  <View>
    <Text style={styles.text}>{props.children}</Text>
    <View style={styles.underline} />
  </View>
)
