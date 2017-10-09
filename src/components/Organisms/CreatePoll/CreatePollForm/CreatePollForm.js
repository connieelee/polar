import React from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'

import {
  LabeledInput,
} from '../../../../components'

const styles = StyleSheet.create({
  parent: {
    alignItems: 'center',
  },
})

export default () => (
  <View style={[StyleSheet.absoluteFill, styles.parent]}>
    <LabeledInput
      label="Question"
    />
  </View>
)
