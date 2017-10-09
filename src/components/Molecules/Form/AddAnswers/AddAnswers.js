import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'

import {
  LabeledInput,
} from '../../../../components'

const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
  },
})

export default props => (
  <View style={styles.parent}>
    <LabeledInput
      label="Answers"
    />
  </View>
)
