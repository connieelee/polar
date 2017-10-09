import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'

import {
  LabeledInput,
  TinyButton,
} from '../../../../components'

const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
})

export default props => (
  <View style={styles.parent}>
    <LabeledInput
      label="Answers"
    />
    <TinyButton
      onPress={props.onPress}
    >
      +
    </TinyButton>
  </View>
)
